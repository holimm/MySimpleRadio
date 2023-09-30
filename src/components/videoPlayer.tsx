import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ ...others }) => {
  return (
    <ReactPlayer
      className="react-player"
      url={`//www.youtube.com/embed/${others.urlPart}?autoplay=1&mute=0&start=0&controls=0&rel=0`}
      config={{ youtube: { playerVars: { showinfo: 0 } } }}
      width={"100%"}
      height={"100vh"}
      controls={false}
      playing={others.playing}
      loop={true}
      volume={others.volume}
      muted={others.muted}
    />
  );
};

export default VideoPlayer;
