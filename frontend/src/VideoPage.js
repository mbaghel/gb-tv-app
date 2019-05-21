import React from "react";
import Video from "./Video";

const VideoPage = props => {
  return <Video id={props.match.params.id} />;
};

export default VideoPage;
