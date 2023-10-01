import { useState } from "react";
import Particle from "./particles/particles";
import { motion } from "framer-motion";
import "./css/scrollbar.css";
import VideoPlayer from "./components/videoPlayer";
import TopNavigation from "./components/topNav";
import ChannelPicker from "./components/channelPicker";
import PausedScreen from "./components/pausedScreen";
import BrightnessChanger from "./components/brightnessChanger";
import NatureSound from "./components/natureSound";
import {
  BackgroundVideo,
  BackgroundControlsMobile,
} from "./components/backgroundVideo";
import {
  BottomControls,
  BottomControlsMobile,
} from "./components/bottomControls";
import { BackgroundPlayerModel, ChannelModel } from "./models/mainModel";
import useWindowDimensions from "./hooks/useDimensions";
import RainIcon from "./image/icon/rain.svg";
import WaveIcon from "./image/icon/wave.svg";
import ImageIcon from "./image/icon/image.svg";

export default function MusicStreamer() {
  const [mute, setMute] = useState<boolean>(true);
  const [play, setPlay] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0);
  const [playRain, setPlayRain] = useState<boolean>(false);
  const [volumeRain, setVolumeRain] = useState<number>(0);
  const [playWave, setPlayWave] = useState<boolean>(false);
  const [volumeWave, setVolumeWave] = useState<number>(0);
  const [brightness, setBrightness] = useState<number>(0);
  const [genre, setGenre] = useState<string>("Streaming");
  const [bgPlayer, setBGPlayer] = useState<BackgroundPlayerModel>({
    label: "BG Video",
    url: "",
  });
  const [particles] = useState<any>(<Particle />);
  const [channel, setChannel] = useState<ChannelModel>({
    channel: "Lofi Girl - Relax/Study",
    urlPart: "jfKfPfyJRdk",
    url: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
    type: "Streaming",
  });
  const { width } = useWindowDimensions();
  console.log("Width: ", window.screen.width, "Height: ", window.screen.height);
  const changeMute = () => {
    setMute(!mute);
  };
  const playMusic = () => {
    setPlay(!play);
  };
  const handleChangeVolume = (e: any) => {
    let volume = e.target.value / 100;
    if (volume !== 0) {
      setVolume(volume);
      setMute(false);
    } else {
      setVolume(volume);
      setMute(true);
    }
  };
  const handleRainVolume = (e: any) => {
    let volume = e.target.value / 100;
    volume === 0 ? setPlayRain(false) : setPlayRain(true);
    setVolumeRain(volume);
  };
  const handleWaveVolume = (e: any) => {
    let volume = e.target.value / 100;
    volume === 0 ? setPlayWave(false) : setPlayWave(true);
    setVolumeWave(volume);
  };
  const handleBrightness = (e: any) => {
    let brightness = e.target.value / 100;
    setBrightness(brightness);
  };
  const handleGenreChange = (e: any) => {
    let value = parseInt(e.target.value);
    value === 0
      ? setGenre("Streaming")
      : value === 1
      ? setGenre("Lofi")
      : value === 2
      ? setGenre("Piano")
      : value === 3
      ? setGenre("Electric Guitar")
      : value === 4
      ? setGenre("Creator's Choice")
      : setGenre("Streaming");
  };
  const handleBackgroundChange = (e: any) => {
    switch (e.target.value) {
      case "0": {
        setBGPlayer({ label: "Video BG", url: "" });
        break;
      }
      case "1": {
        setBGPlayer({ label: "Autumn", url: "2wIACHP04qQ" });
        break;
      }
      case "2": {
        setBGPlayer({ label: "Summer Tram", url: "KextmYQmxH0" });
        break;
      }
      case "3": {
        setBGPlayer({ label: "Rain", url: "kDCXBwzSI-4" });
        break;
      }
      case "4": {
        setBGPlayer({ label: "Living Room", url: "zJOQRLJyQYA" });
        break;
      }
    }
  };
  function changeChannel(channel: any) {
    setChannel(channel);
  }

  return (
    <>
      <motion.div
        className="h-screen w-screen bg-black absolute z-50"
        initial={{ y: 0 }}
        animate={{ y: "100vh", transitionEnd: { display: "none" } }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
      ></motion.div>
      {width < 768 && (
        <div className="h-[50vh] w-screen bg-black absolute bottom-0 z-20"></div>
      )}
      <NatureSound
        volume={volumeRain}
        mute={mute}
        play={playRain}
        url="Q48Fry14PDM"
      />
      <NatureSound
        volume={volumeWave}
        mute={mute}
        play={playWave}
        url="nZfnoaHqFZw"
      />
      <div className="h-full w-full overflow-hidden absolute top-0 z-10 md:scale-[1.8] scale-[1.4]">
        <VideoPlayer
          className={"react-player"}
          height={width < 768 ? "50vh" : "100vh"}
          width={"100%"}
          playing={play}
          volume={volume}
          muted={mute}
          urlPart={channel.urlPart}
        />
      </div>

      <BackgroundVideo
        height={width < 768 ? "50vh" : "100vh"}
        width={"100%"}
        play={play}
        backgroundURL={bgPlayer.url}
        screen
      />

      <div
        className={`h-full w-full overflow-hidden absolute top-0 z-10 bg-black`}
        style={{ opacity: brightness }}
      ></div>

      {!play && (
        <motion.div
          className="absolute top-0 z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {particles}
        </motion.div>
      )}
      <div className="h-screen w-screen bg-transparent overflow-hidden absolute top-0 z-30">
        <TopNavigation channel={channel.channel} url={channel.url} />
        <div className="h-[27vh] w-full block md:hidden"></div>
        <div className="h-[29vh] w-full md:h-[70%]">
          <ChannelPicker
            genre={genre}
            handleGenreChange={handleGenreChange}
            changeChannel={changeChannel}
          />
          {!play && <PausedScreen />}
          <motion.div
            className="w-3/12 h-full float-right"
            initial={{ x: 150 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.7, delay: 0.8, ease: "easeInOut" }}
          >
            <div className="w-full h-full md:flex justify-end items-center relative">
              <BrightnessChanger handleBrightness={handleBrightness} />
              <BottomControlsMobile
                handleVolume={handleRainVolume}
                icon={RainIcon}
              />
              <BottomControlsMobile
                handleVolume={handleWaveVolume}
                icon={WaveIcon}
              />
              <BackgroundControlsMobile
                handleVolume={handleBackgroundChange}
                icon={ImageIcon}
              />
            </div>
          </motion.div>
        </div>
        <div className="w-full h-full p-5 pb-10 mt-8 md:mt-0">
          <BottomControls
            handleChangeVolume={handleChangeVolume}
            handleRainVolume={handleRainVolume}
            handleWaveVolume={handleWaveVolume}
            handleBackgroundChange={handleBackgroundChange}
            changeMute={changeMute}
            playMusic={playMusic}
            play={play}
            mute={mute}
            backgroundLabel={bgPlayer.label}
            screenWidth={width}
          />
        </div>
      </div>
    </>
  );
}
