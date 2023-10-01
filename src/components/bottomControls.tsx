import { motion } from "framer-motion";
import PlayIcon from "../image/icon/play.svg";
import PauseIcon from "../image/icon/pause.svg";
import VolumeOn from "../image/icon/volumeon.svg";
import VolumeOff from "../image/icon/volumeoff.svg";
import RainIcon from "../image/icon/rain.svg";
import WaveIcon from "../image/icon/wave.svg";

export const BottomControls = ({ ...others }) => {
  console.log(others.screenWidth);
  const renderNatureSoundControls = ({ ...others }) => {
    const width = others.screenWidth;
    return (
      <div
        className={`h-fit w-fit float-left mx-3 ${
          width < 1280 && "flex justify-center items-center"
        }`}
      >
        <img
          className={`w-8 h-8 mr-5 xl:mx-auto`}
          src={others.src}
          alt={others.alt}
        ></img>
        <input
          type={"range"}
          onChange={others.handleVolume}
          className="w-[2rem] md:w-[8rem] appearance-none rounded-xl p-0 h-1 bg-slate-100"
          min={0}
          max={100}
          defaultValue={0}
        />
      </div>
    );
  };
  return (
    <div className="w-full h-fit mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-16">
      {/* Nature Sound */}
      <div className="h-full w-full hidden md:block">
        <motion.div
          className="h-full w-full xl:w-[75%] flex justify-center items-center float-right bg-slate-400/30 backdrop-blur-xl rounded-full"
          initial={{ y: 150 }}
          animate={{ y: 0 }}
          transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
        >
          <div className="mx-auto w-fit grid lg:grid-cols-1 xl:grid-cols-2 gap-6">
            {renderNatureSoundControls({
              src: RainIcon,
              alt: "RainIcon",
              handleVolume: others.handleRainVolume,
              screenWidth: others.screenWidth,
            })}
            {renderNatureSoundControls({
              src: WaveIcon,
              alt: "WaveIcon",
              handleVolume: others.handleWaveVolume,
              screenWidth: others.screenWidth,
            })}
          </div>
        </motion.div>
      </div>
      {/* Nature Sound */}
      {/* Controls */}
      <div className="h-full w-full">
        <motion.div
          className="h-full w-full md:w-full xl:w-[80%] flex justify-center items-center px-5 py-3 mx-auto bg-slate-400/30 backdrop-blur-xl rounded-full"
          initial={{ y: 150 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.6, delay: 0.8, ease: "easeInOut" }}
        >
          <div className="h-full w-full flex justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              transition={{ ease: "easeInOut" }}
            >
              <button
                onClick={others.playMusic}
                className="h-16 w-16 lg:h-20 lg:w-20 text-lg bg-transparent border-2 transition duration-300 ease-in-out text-white rounded-full"
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
                className="h-16 w-16 lg:h-20 lg:w-20 mx-6 lg:mx-5 text-lg bg-transparent border-2 hover:scale-110 transition duration-300 ease-in-out text-white rounded-full"
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
              className={`w-[7rem] md:w-[5rem] lg:w-[7rem] xl:w-[8rem] appearance-none rounded-xl p-0 h-1 ml-1 md:ml-0 bg-slate-100`}
              min={0}
              max={100}
              defaultValue={0}
            />
          </div>
        </motion.div>
      </div>
      {/* Controls */}
      {/* BG Changer */}
      <div className="h-full w-full hidden md:block">
        <motion.div
          className="h-full w-full xl:w-[75%] lg:flex justify-between items-center bg-slate-400/30 backdrop-blur-xl rounded-full "
          initial={{ y: 150 }}
          animate={{ y: 0 }}
          transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
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
      {/* BG Changer */}
    </div>
  );
};

export const BottomControlsMobile = ({ ...others }) => {
  return (
    <div className="h-14 w-full relative md:hidden">
      <div className="h-full w-full flex justify-end items-center ">
        <div className="h-fit w-fit md:-rotate-90 float-right">
          <input
            type={"range"}
            onChange={others.handleVolume}
            className="appearance-none rounded-xl p-0 h-1 bg-slate-100 w-[6rem] md:w-[10rem] mr-5 md:mr-0"
            min={0}
            max={100}
            defaultValue={0}
          />
        </div>
        <div className="h-fit w-fit text-white text-center float-right absolute right-[8rem] md:right-[6rem]">
          <img className="w-8 h-8" src={others.icon} alt="BrightnessIcon"></img>
        </div>
      </div>
    </div>
  );
};
