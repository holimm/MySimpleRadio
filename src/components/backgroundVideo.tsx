import { useEffect, useRef } from "react";
import ReactPlayer from "react-player";

const BackgroundVideo = ({ ...others }) => {
  console.log(others.backgroundURL);
  const refBackground = useRef<HTMLDivElement>(null);
  useEffect(() => {
    refBackground.current?.classList.remove("hidden");
  }, [others.backgroundURL]);
  return (
    <div
      ref={refBackground}
      className="h-full w-full overflow-hidden absolute top-0 scale-150 hidden"
    >
      <ReactPlayer
        className="react-player"
        url={`//www.youtube.com/embed/${others.backgroundURL}?autoplay=1&mute=0&start=0`}
        width={"100%"}
        height={"100vh"}
        controls={false}
        playing={others.play}
        loop={true}
        muted={true}
      />
    </div>
  );
};

export default BackgroundVideo;
