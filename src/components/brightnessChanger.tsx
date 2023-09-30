import { motion } from "framer-motion";
import BrightnessIcon from "../image/icon/brightness.svg";

const BrightnessChanger = ({ ...others }) => {
  return (
    <motion.div
      className="w-3/12 h-full float-right"
      initial={{ x: 150 }}
      animate={{ x: 0 }}
      transition={{ duration: 1.7, ease: "easeInOut" }}
    >
      <div className="w-full h-full flex justify-end items-center relative">
        <div className="h-fit w-fit ">
          <div className="h-fit w-fit -rotate-90 float-right">
            <input
              type={"range"}
              onChange={others.handleBrightness}
              className="appearance-none rounded-xl p-0 h-1 bg-slate-100"
              min={0}
              max={100}
              defaultValue={0}
            />
          </div>
          <div className="h-fit w-fit text-white text-center float-right absolute right-20">
            <img
              className="w-8 h-8"
              src={BrightnessIcon}
              alt="BrightnessIcon"
            ></img>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BrightnessChanger;
