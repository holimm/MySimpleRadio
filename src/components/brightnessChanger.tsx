import BrightnessIcon from "../image/icon/brightness.svg";

const BrightnessChanger = ({ ...others }) => {
  return (
    <div className="h-14 md:h-20 w-full flex justify-end items-center relative">
      <div className="h-fit w-fit">
        <div className="h-fit w-fit md:-rotate-90 float-right">
          <input
            type={"range"}
            onChange={others.handleBrightness}
            className="appearance-none rounded-xl p-0 h-1 bg-slate-100 w-[6rem] md:w-[10rem] mr-5 md:mr-0"
            min={0}
            max={100}
            defaultValue={0}
          />
        </div>
        <div className="h-fit w-fit text-white text-center float-right absolute right-[8rem] md:right-[6rem]">
          <img
            className="w-8 h-8"
            src={BrightnessIcon}
            alt="BrightnessIcon"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default BrightnessChanger;
