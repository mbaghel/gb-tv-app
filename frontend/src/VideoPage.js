import React from "react";

const VideoPage = props => {
  console.log(props);
  return (
    <div>
      <p>This is video w/ id: {props.match.params.id}</p>
    </div>
  );
};

export default VideoPage;
