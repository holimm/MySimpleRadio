import { motion } from "framer-motion";
import PauseGIF from "../image/icon/pauseGIF.gif";

const PausedScreen = () => {
  return (
    <motion.div
      className="w-4/12 lg:w-6/12 h-full float-left flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="w-fit h-fit mx-auto">
        <img
          src={PauseGIF}
          alt="PausedGIF"
          className="w-32 h-32 lg:w-52 lg:h-52 bg-cover bg-center rounded-3xl"
        />
        <p
          className="text-4xl text-white text-center mt-5"
          style={{ fontFamily: "Barlow Condensed" }}
        >
          Paused
        </p>
      </div>
    </motion.div>
  );
};

export default PausedScreen;
