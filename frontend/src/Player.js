import React, { useRef, useState, useEffect } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components/macro";
import {
  IoMdPlay,
  IoMdPause,
  IoMdFastforward,
  IoMdRewind
} from "react-icons/io";

const AUTHORIZE_PLAYBACK_QUERY = gql`
  query AUTHORIZE_PLAYBACK_QUERY($url: String!) {
    authorizePlayback(url: $url)
  }
`;

const VidFrame = styled.div`
  video {
    height: 100vh;
  }
`;

const Controls = styled.div`
  display: ${props => (props.visible ? "flex" : "none")};
  visibility: ${props => (props.visible ? "visible" : "hidden")}
  z-index: 10;
  position: fixed;
  bottom: ${props => props.theme.verticalOverscan};
  justify-content: space-around;
  width: 100%;

  button {
    height: 6rem;
    width: 6rem;
    font-size: 5rem;
    color: inherit;
    background-color: transparent;
    border: none;
  }
`;

const Player = ({ savedTime, urls }) => {
  const videoEl = useRef(null);
  const timer = useRef(null);
  const [controlsActive, setActive] = useState(false);
  const [isPaused, setPaused] = useState(false);

  useEffect(() => {
    const handleKeys = () => {
      console.log("timer set");
      setActive(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        setActive(false);
        console.log("ding");
      }, 1000);
    };
    window.addEventListener("keydown", handleKeys);
    return () => {
      window.removeEventListener("keydown", handleKeys);
    };
  }, []);

  const togglePlay = () => {
    if (isPaused) {
      videoEl.current.play();
    } else {
      videoEl.current.pause();
    }
    setPaused(!isPaused);
  };

  const skip = amt => {
    videoEl.current.currentTime += amt;
  };

  return (
    <Query query={AUTHORIZE_PLAYBACK_QUERY} variables={{ url: urls.hd }}>
      {({ data }) => (
        <VidFrame>
          <video
            ref={videoEl}
            src={data.authorizePlayback}
            type="video/mp4"
            autoPlay
          />
          {controlsActive && (
            <ControlArea
              isActive={controlsActive}
              skip={skip}
              isPaused={isPaused}
              togglePlay={togglePlay}
            />
          )}
        </VidFrame>
      )}
    </Query>
  );
};

const ControlArea = props => {
  const { isActive, skip, isPaused, togglePlay } = props;

  return (
    <Controls visible={isActive}>
      <button onClick={() => skip(-10)}>
        <IoMdRewind />
      </button>
      <button onClick={() => togglePlay()}>
        {isPaused ? <IoMdPlay /> : <IoMdPause />}
      </button>
      <button onClick={() => skip(10)}>
        <IoMdFastforward />
      </button>
    </Controls>
  );
};

export default Player;
