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
import BackgroundVideo from "./components/backgroundVideo";
import BottomControls from "./components/bottomControls";
import { BackgroundPlayerModel, ChannelModel } from "./models/mainModel";

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
    e.target.value === 0
      ? setGenre("Streaming")
      : e.target.value === 1
      ? setGenre("Lofi")
      : e.target.value === 2
      ? setGenre("Piano")
      : e.target.value === 3
      ? setGenre("Electric Guitar")
      : e.target.value === 4
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
        setBGPlayer({ label: "Summer Tram", url: "KextmYQmxH0" });
        break;
      }
      case "2": {
        setBGPlayer({ label: "Rain", url: "kDCXBwzSI-4" });
        break;
      }
      case "3": {
        setBGPlayer({ label: "Living Room", url: "WPvY5sp17kQ" });
        break;
      }
      case "4": {
        setBGPlayer({ label: "Noelle", url: "uFEzJ7udA98" });
        break;
      }
    }
  };
  function changeChannel(channel: any) {
    setChannel(channel);
  }

  return (
    <>
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
      <div className="h-full w-full overflow-hidden absolute top-0 scale-custom scale-custom2 scale-150">
        <VideoPlayer
          playing={play}
          volume={volume}
          muted={mute}
          urlPart={channel.urlPart}
        />
      </div>

      <BackgroundVideo play={play} backgroundURL={bgPlayer.url} />

      <div
        className={`h-full w-full overflow-hidden absolute top-0 bg-black`}
        style={{ opacity: brightness }}
      ></div>

      {!play && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {particles}
        </motion.div>
      )}
      <div className="h-screen w-screen bg-transparent overflow-hidden absolute top-0">
        <TopNavigation channel={channel.channel} url={channel.url} />
        <div className="w-full" style={{ height: "70%" }}>
          <ChannelPicker
            genre={genre}
            handleGenreChange={handleGenreChange}
            changeChannel={changeChannel}
          />
          {!play && <PausedScreen />}
          <BrightnessChanger handleBrightness={handleBrightness} />
        </div>
        <div className="w-full h-full p-5 pb-10">
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
          />
        </div>
      </div>
    </>
  );
}
