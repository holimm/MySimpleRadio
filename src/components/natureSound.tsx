import ReactPlayer from "react-player";

const NatureSound = ({ ...others }) => {
  return (
    <>
      <ReactPlayer
        className="react-player"
        url={`//www.youtube.com/embed/${others.url}?autoplay=1&mute=0&start=0`}
        width={"100%"}
        height={"100vh"}
        controls={false}
        playing={others.play}
        loop={true}
        volume={others.volume}
        muted={others.mute}
      />
    </>
  );
};

export default NatureSound;
