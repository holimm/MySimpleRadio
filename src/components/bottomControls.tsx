import { motion } from "framer-motion";
import PlayIcon from "../image/icon/play.svg";
import PauseIcon from "../image/icon/pause.svg";
import VolumeOn from "../image/icon/volumeon.svg";
import VolumeOff from "../image/icon/volumeoff.svg";
import RainIcon from "../image/icon/rain.svg";
import WaveIcon from "../image/icon/wave.svg";

const BottomControls = ({ ...others }) => {
  const renderNatureSoundControls = ({ ...others }) => {
    return (
      <div className="w-fit float-left lg:mr-10">
        <img
          className="w-8 h-8 mx-auto"
          src={others.src}
          alt={others.alt}
        ></img>
        <input
          type={"range"}
          onChange={others.handleVolume}
          className="appearance-none rounded-xl p-0 h-1 bg-slate-100"
          min={0}
          max={100}
          defaultValue={0}
        />
      </div>
    );
  };
  return (
    <div className="w-full h-fit mx-auto grid grid-cols-3 gap-2 lg:gap-16">
      <motion.div
        className="flex justify-center items-center w-full h-full bg-slate-400 bg-opacity-30 backdrop-blur-xl rounded-full"
        initial={{ y: 150 }}
        animate={{ y: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <div className="mx-auto w-fit">
          {renderNatureSoundControls({
            src: RainIcon,
            alt: "RainIcon",
            handleVolume: others.handleRainVolume,
          })}
          {renderNatureSoundControls({
            src: WaveIcon,
            alt: "WaveIcon",
            handleVolume: others.handleWaveVolume,
          })}
        </div>
      </motion.div>
      <motion.div
        className="flex justify-between items-center px-5 py-3 mx-auto w-fit h-full bg-slate-400 bg-opacity-30 backdrop-blur-xl rounded-full"
        initial={{ y: 150 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          transition={{ ease: "easeInOut" }}
        >
          <button
            onClick={others.playMusic}
            className="h-16 w-16 lg:h-20 lg:w-20 mx-1 lg:mx-5 text-lg bg-transparent border-2 transition duration-300 ease-in-out text-white rounded-full"
          >
            <img
              className="h-12 w-12 mx-auto"
              src={others.play ? PauseIcon : PlayIcon}
              alt="PlayIcon"
            />
          </button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          transition={{ ease: "easeInOut" }}
        >
          <button
            onClick={others.changeMute}
            className="h-16 w-16 lg:h-20 lg:w-20 mx-1 lg:mx-5 text-lg bg-transparent border-2 hover:scale-110 transition duration-300 ease-in-out text-white rounded-full"
          >
            <img
              className="h-12 w-12 mx-auto"
              src={others.mute ? VolumeOff : VolumeOn}
              alt="VolumeIcon"
            />
          </button>
        </motion.div>
        <input
          type={"range"}
          onChange={others.handleChangeVolume}
          className="appearance-none rounded-xl p-0 h-1 bg-slate-100"
          min={0}
          max={100}
          defaultValue={0}
        />
      </motion.div>
      <motion.div
        className="hidden lg:flex justify-between items-center w-full h-full bg-slate-400 bg-opacity-30 backdrop-blur-xl rounded-full "
        initial={{ y: 150 }}
        animate={{ y: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <div className="flex justify-center items-center py-4 mx-auto w-fit h-full text-white after:bg-rose-500 appearance-none focus:ring-0 cursor-pointer">
          <div className="w-fit">
            <p
              className="text-center text-white text-2xl"
              style={{ fontFamily: "Barlow Condensed" }}
            >
              {others.backgroundLabel}
            </p>
            <input
              type={"range"}
              onChange={others.handleBackgroundChange}
              className="appearance-none rounded-xl p-0 h-1 bg-slate-100"
              min={0}
              max={4}
              defaultValue={0}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BottomControls;
