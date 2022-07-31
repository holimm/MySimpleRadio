import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import {Link} from 'react-router-dom';
import Particle from './particles/particles';

export default function MusicStreamer(){
    const refVolumeRange = useRef(null);
    const refGenre = useRef(null);
    const refStopScreen = useRef(null);
    const refPause = useRef(null);
    const [mute,setMute] = useState(true);
    const [play,setPlay] = useState(false);
    const [playIcon, setPlayIcon] = useState('./image/icon/play.svg');
    const [volume,setVolume] = useState(0);
    const [volumeIcon, setVolumeIcon] = useState('./image/icon/volumeoff.svg');
    const [volumeRain,setVolumeRain] = useState(0);
    const [volumeWave,setVolumeWave] = useState(0);
    const [brightness,setBrightness] = useState(0);
    const [genre,setGenre] = useState('Streaming');
    const [particles] = useState(<Particle/>);
    
    const [channel,setChannel] = useState({
        channel: 'Lofi Girl - Relax/Study',
        urlPart: 'jfKfPfyJRdk',
        url: 'https://www.youtube.com/watch?v=jfKfPfyJRdk',
        type: 'Streaming'
    });
    
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
            refStopScreen.current.style.display = 'block'; refPause.current.style.display = 'block';
        }else{
            setPlay(true); setPlayIcon('./image/icon/pause.svg');
            refStopScreen.current.style.display = 'none';  refPause.current.style.display = 'none';
        }
    }
    const handleChangeVolume = (e) => {
        let volume = e.target.value / 100;
        setVolume(volume);
    }
    const handleRainVolume = (e) => {
        let volume = e.target.value / 100;
        setVolumeRain(volume);
    }
    const handleWaveVolume = (e) => {
        let volume = e.target.value / 100;
        setVolumeWave(volume);
    }
    const handleBrightness = (e) => {
        let brightness = e.target.value / 100;
        setBrightness(brightness);
    }
    const handleGenreChange = (e) => {
        e.target.value==0 ? setGenre("Streaming") :
        e.target.value==1 ? setGenre("Lofi") :
        e.target.value==2 ? setGenre("Piano") :
        e.target.value==3 ? setGenre("Electric Guitar") :
        e.target.value==4 ? setGenre("Creator's Choice") : setGenre("Streaming");
    }
    function changeChannel(channel){
        setChannel(channel);
    }
    var listRadio = [
        {
            channel: 'Lofi Girl - Relax/Study',
            urlPart: 'jfKfPfyJRdk',
            url: 'https://www.youtube.com/watch?v=jfKfPfyJRdk',
            type: 'Streaming'
        },
        {
            channel: 'Lofi Girl - Sleep/Chill',
            urlPart: 'rUxyKA_-grg',
            url: 'https://www.youtube.com/watch?v=rUxyKA_-grg',
            type: 'Streaming'
        },
        {
            channel: 'Chill With Taiki',
            urlPart: 'qH3fETPsqXU',
            url: 'https://www.youtube.com/watch?v=qH3fETPsqXU',
            type: 'Streaming'
        },
        {
            channel: 'Chillhop Radio - Jazzy & Lofi',
            urlPart: '5yx6BWlEVcY',
            url: 'https://www.youtube.com/watch?v=5yx6BWlEVcY',
            type: 'Streaming'
        },
        {
            channel: 'Chillhop Radio - Lofi & Hiphop',
            urlPart: '7NOSDKb0HlU',
            url: 'https://www.youtube.com/watch?v=7NOSDKb0HlU',
            type: 'Streaming'
        },
        {
            channel: 'ABao - Jazz & Lofi',
            urlPart: 'kgx4WGK0oNU',
            url: 'https://www.youtube.com/watch?v=kgx4WGK0oNU',
            type: 'Streaming'
        },
        {
            channel: 'Morning Coffee',
            urlPart: '1fueZCTYkpA',
            url: 'https://www.youtube.com/watch?v=1fueZCTYkpA',
            type: 'Lofi'
        },
        {
            channel: 'Sleepless Night',
            urlPart: 'Nyx6SBixRE8',
            url: 'https://www.youtube.com/watch?v=Nyx6SBixRE8',
            type: 'Lofi'
        },
        {
            channel: 'Your Smile / My Everything',
            urlPart: 'Hddty2eLglc',
            url: 'https://www.youtube.com/watch?v=Hddty2eLglc',
            type: 'Lofi'
        },
        {
            channel: 'I found my home in your arms',
            urlPart: 'GVR4ufTc5CU',
            url: 'https://www.youtube.com/watch?v=GVR4ufTc5CU',
            type: 'Lofi'
        },
        {
            channel: 'Gate Of Steiner',
            urlPart: '7d0WMVU_tlo',
            url: 'https://www.youtube.com/watch?v=7d0WMVU_tlo',
            type: 'Piano'
        },
        {
            channel: 'Ib - Memory',
            urlPart: '71Ss5JzjwLw',
            url: 'https://www.youtube.com/watch?v=71Ss5JzjwLw',
            type: 'Piano'
        },
        {
            channel: 'FF - Suteki Da Ne',
            urlPart: 'iX_z94CLp8U',
            url: 'https://www.youtube.com/watch?v=iX_z94CLp8U',
            type: 'Piano'
        },
        {
            channel: 'Tada Koe Hitotsu',
            urlPart: 'bZA9fPmFok0',
            url: 'https://www.youtube.com/watch?v=bZA9fPmFok0',
            type: 'Piano'
        },
        {
            channel: 'Gate Of Steiner',
            urlPart: '7d0WMVU_tlo',
            url: 'https://www.youtube.com/watch?v=7d0WMVU_tlo',
            type: 'Electric Guitar'
        },
    ];
    
    return(
        <>       
        <div className='h-full w-full overflow-hidden absolute top-0 scale-150'>
          <ReactPlayer className='react-player' url={`//www.youtube.com/embed/${channel.urlPart}?autoplay=1&mute=0&start=0`} width={"100%"} height={"100vh"} controls={false} playing={play} loop={true} volume={volume} muted={mute}/>
        </div>
        <div className={`h-full w-full overflow-hidden absolute top-0 bg-black`} style={{opacity: brightness}}></div>
        <div className='h-full w-full overflow-hidden absolute top-0 scale-150 hidden'>
          <ReactPlayer className='react-player' url={`//www.youtube.com/embed/q76bMs-NwRk?autoplay=1&mute=0&start=0`} width={"100%"} height={"100vh"} controls={false} playing={play} loop={true} volume={volumeRain} muted={mute}/>
          <ReactPlayer className='react-player' url={`//www.youtube.com/embed/nPit8KqqFwI?autoplay=1&mute=0&start=0`} width={"100%"} height={"100vh"} controls={false} playing={play} loop={true} volume={volumeWave} muted={mute}/>
        </div>
        <div ref={refStopScreen} className='h-full w-full absolute top-0 bg-black opacity-60 block'>{particles}</div>  
        <div className='h-screen w-screen bg-transparent overflow-hidden absolute top-0'>
            <div className='h-20 w-full flex justify-start items-center'>
                <div className='w-1/3 h-full flex justify-start items-center'>
                    <Link to='/'>
                        <button className='h-9 w-9 mx-5 ml-20 text-lg bg-transparent border-2 hover:scale-110 transition duration-300 ease-in-out text-white rounded-full'><img className='h-6 w-6 mx-auto' src='./image/icon/back.svg' alt='ReturnIcon'/></button> 
                    </Link>
                    <h2 className='text-white text-3xl' style={{fontFamily: 'Barlow Condensed'}}>My Simple Radio</h2>
                </div>
                <div className='w-7/12 h-full flex justify-start items-center'>
                    <p className='text-white text-6xl truncate' style={{fontFamily: 'Barlow Condensed'}}>{channel.channel}</p>
                    <a href={`${channel.url}`} target={'_blank'} rel='noreferrer'><img className='w-10 h-10 ml-4 mt-2 hover:scale-110 cursor-pointer' src='./image/icon/youtube.svg'></img></a>
                </div>
            </div>
            <div className='w-full' style={{height: '70%'}}>
                <div className='w-3/12 h-full float-left'>
                    <div className='w-full mt-3 float-right h-full border-r-2 overflow-w-0 overflow-x-hidden'>
                        {listRadio.filter(condition=>{return condition.type === genre}).map(items=>{
                            return (
                            <div onClick={()=>changeChannel(items)} className='my-4 cursor-pointer' style={{fontFamily: 'Barlow Condensed'}}>
                                <div className='flex justify-start items-center ml-12 mr-8 hover:scale-110 transition ease-in-out'>
                                    <img className='h-4 w-4' src='./image/icon/play.svg' alt='ReturnIcon'/>
                                    <p className='text-xl ml-5 text-white truncate'>{items.channel}</p>
                                </div>
                            </div>);
                        })}
                    </div>
                </div>
                <div className='w-6/12 h-full float-left'>
                    <div ref={refPause} className='w-fit h-fit mx-auto mt-32'>
                        <div className='w-52 h-52 bg-cover bg-center rounded-3xl' style={{backgroundImage: `url('./image/icon/pauseGIF.gif')`}}></div>
                        <p className='text-4xl text-white text-center mt-5' style={{fontFamily: 'Barlow Condensed'}}>Paused</p>
                    </div>
                </div>
                <div className='w-3/12 h-full float-left'>
                    <div className='w-full h-full flex justify-end items-center'>
                        <div className='w-fit h-fit absolute right-10 top-96'>
                            <img className='w-8 h-8' src='./image/icon/brightness.svg'></img>
                        </div>
                        <div className='w-10 mr-20 mb-20'>
                            <input ref={refVolumeRange} type={'range'} onChange={handleBrightness} className='appearance-none rounded-xl p-0 h-1 bg-slate-100 -rotate-90' min={0} max={100} defaultValue={0}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-full p-5 pb-10'>
                <div className='w-fit h-fit mx-auto grid grid-cols-3 gap-16'>
                    <div className='flex justify-center items-center w-full h-full bg-slate-400 bg-opacity-30 backdrop-blur-xl rounded-full'>
                        <div className='mx-auto w-fit'>
                            <div className='w-fit float-left mr-10'>
                                <img className='w-8 h-8 mx-auto' src='./image/icon/rain.svg'></img>
                                <input ref={refVolumeRange} type={'range'} onChange={handleRainVolume} className='appearance-none rounded-xl p-0 h-1 bg-slate-100' min={0} max={100} defaultValue={0}/>
                            </div>
                            <div className='w-fit float-left ml-5'>
                            <img className='w-8 h-8 mx-auto' src='./image/icon/wave.svg'></img>
                                <input ref={refVolumeRange} type={'range'} onChange={handleWaveVolume} className='appearance-none rounded-xl p-0 h-1 bg-slate-100' min={0} max={100} defaultValue={0}/>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between items-center px-5 py-3 bg-transparent mx-auto w-fit h-fit bg-slate-400 bg-opacity-30 backdrop-blur-xl rounded-full'>
                        <button onClick={playMusic} className='h-20 w-20 mx-5 text-lg bg-transparent border-2 hover:scale-110 transition duration-300 ease-in-out text-white rounded-full'><img className='h-12 w-12 mx-auto' src={playIcon} alt='PlayIcon'/></button>  
                        <button onClick={changeMute} className='h-20 w-20 mx-5 text-lg bg-transparent border-2 hover:scale-110 transition duration-300 ease-in-out text-white rounded-full'><img className='h-12 w-12 mx-auto' src={volumeIcon} alt='VolumeIcon'/></button>   
                        <input ref={refVolumeRange} type={'range'} onChange={handleChangeVolume} className='appearance-none rounded-xl p-0 h-1 bg-slate-100' min={0} max={100} defaultValue={0}/>          
                    </div>
                    <div className='flex justify-between items-center w-full h-full'>
                        <div className='flex justify-center items-center py-4 w-3/4 h-full bg-slate-400 hover:bg-slate-300 bg-opacity-30 hover:bg-opacity-30 backdrop-blur-xl hover:backdrop-blur-xl text-white after:bg-rose-500 rounded-full appearance-none focus:ring-0 cursor-pointer'>
                            <div className='w-fit float-left ml-5'>
                                <p className='text-center text-white text-2xl' style={{fontFamily: 'Barlow Condensed'}}>{genre}</p>
                                <input type={'range'} onChange={handleGenreChange} className='appearance-none rounded-xl p-0 h-1 bg-slate-100' min={0} max={4} defaultValue={0}/>
                            </div>                         
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
