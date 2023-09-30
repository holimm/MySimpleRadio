import { motion } from "framer-motion";
import listRadio from "../radioList.json";
import PlayIcon from "../image/icon/play.svg";

const ChannelPicker = ({ ...others }) => {
  return (
    <motion.div
      className="w-5/12 lg:w-3/12 h-full float-left"
      initial={{ x: -450 }}
      animate={{ x: 0 }}
      transition={{ duration: 1.6, ease: "easeInOut" }}
    >
      <div className="flex justify-center items-center py-2 w-fit mx-auto h-20 text-white after:bg-rose-500 rounded-full appearance-none focus:ring-0 cursor-pointer">
        <div className="w-fit float-left ml-5">
          <p
            className="text-center text-white text-2xl"
            style={{ fontFamily: "Barlow Condensed" }}
          >
            {others.genre}
          </p>
          <input
            type={"range"}
            onChange={others.handleGenreChange}
            className="appearance-none rounded-xl p-0 h-1 bg-slate-100"
            min={0}
            max={4}
            defaultValue={0}
          />
        </div>
      </div>
      <div className="w-full h-3/4 mt-3 float-right overflow-w-0 overflow-x-hidden">
        {listRadio
          .filter((condition: any) => {
            return condition.type === others.genre;
          })
          .map((items: any, key: any) => {
            return (
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                transition={{ ease: "easeInOut" }}
                key={key}
              >
                <div
                  onClick={() => others.changeChannel(items)}
                  className="my-4 cursor-pointer"
                  style={{ fontFamily: "Barlow Condensed" }}
                >
                  <div className="flex justify-start items-center ml-2 lg:ml-16 mr-8">
                    <img className="h-4 w-4" src={PlayIcon} alt="ReturnIcon" />
                    <p className="text-xl ml-5 text-white truncate">
                      {items.channel}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
      </div>
    </motion.div>
  );
};
export default ChannelPicker;
