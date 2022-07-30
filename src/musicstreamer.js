import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import {Link,BrowserRouter,Routes, Route} from 'react-router-dom';
import Particle from './particles';

export default function MusicStreamer(){
    const refVolumeRange = useRef(null);
    const [mute,setMute] = useState(true);
    const [play,setPlay] = useState(false);
    const [playIcon, setPlayIcon] = useState('./image/icon/play.svg');
    const [volume,setVolume] = useState(0.5);
    const [volumeIcon, setVolumeIcon] = useState('./image/icon/volumeoff.svg');
    const [particles,setParticles] = useState(<Particle/>);
    
    const changeMute = () => {
        if(mute){
            setMute(false); setVolumeIcon('./image/icon/volumeon.svg');
        }else{
            setMute(true); setVolumeIcon('./image/icon/volumeoff.svg'); refVolumeRange.current.value = 0; setVolume(0);
        }
    }
    const playMusic = () => {
        if(play){
            setPlay(false); setPlayIcon('./image/icon/play.svg');
        }else{
            setPlay(true); setPlayIcon('./image/icon/pause.svg');
        }
    }
    const handleChangeVolume = (e) => {
        let volume = e.target.value / 100;
        setVolume(volume);
    }
    return(
        <>       
        <div className='h-full w-full overflow-hidden absolute top-0 scale-150'>
          <ReactPlayer className='react-player' url={`//www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&mute=0`} width={"100%"} height={"100vh"} controls={false} playing={play} loop={true} volume={volume} muted={mute}/>
        </div>
        {particles}
        <div className='h-screen w-screen bg-transparent overflow-hidden absolute top-0'>
            <div className='h-20 w-full flex justify-start items-center'>
                <Link to='/'>
                <button className='h-9 w-9 mx-5 ml-20 text-lg bg-transparent border-2 hover:scale-110 transition duration-300 ease-in-out text-white rounded-full'><img className='h-6 w-6 mx-auto' src='./image/icon/back.svg'/></button> 
                </Link>
                <h2 className='text-white text-3xl' style={{fontFamily: 'Barlow Condensed'}}>My Simple Radio</h2>
            </div>
            <div className='w-fit h-fit p-5 pb-10 bottom-0 mx-auto'>
                <div className='flex justify-between items-center bg-transparent mx-auto w-fit h-fit'>
                    <button onClick={playMusic} className='h-20 w-20 mx-5 text-lg bg-transparent border-2 hover:scale-110 transition duration-300 ease-in-out text-white rounded-full'><img className='h-12 w-12 mx-auto' src={playIcon}/></button>  
                    <button onClick={changeMute} className='h-20 w-20 mx-5 text-lg bg-transparent border-2 hover:scale-110 transition duration-300 ease-in-out text-white rounded-full'><img className='h-12 w-12 mx-auto' src={volumeIcon}/></button>   
                    <input ref={refVolumeRange} type={'range'} onChange={handleChangeVolume} className='appearance-none rounded-xl p-0 h-1 bg-slate-100' min={0} max={100}/>          
                </div>
            </div>
        </div>
        </>
    );
}
