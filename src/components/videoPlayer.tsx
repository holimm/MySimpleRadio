import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ ...others }) => {
  console.log("Width: ", others.width, "Height: ", others.height);
  return (
    <ReactPlayer
      className={others.className}
      url={`//www.youtube.com/embed/${others.urlPart}?autoplay=1&mute=0&start=0&controls=0&rel=0`}
      config={{ youtube: { playerVars: { showinfo: 0 } } }}
      height={others.height}
      width={others.width}
      controls={false}
      playing={others.playing}
      loop={true}
      volume={others.volume}
      muted={others.muted}
    />
  );
};

export default VideoPlayer;
