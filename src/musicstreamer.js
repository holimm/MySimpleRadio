import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import {Link} from 'react-router-dom';
import Particle from './particles/particles';
import {motion} from 'framer-motion';
import "./css/scrollbar.css";

export default function MusicStreamer(){
    const refVolumeRange = useRef(null);
    const refStopScreen = useRef(null);
    const refPause = useRef(null);
    const refBackground = useRef(null);
    const [mute,setMute] = useState(true);
    const [play,setPlay] = useState(false);
    const [playIcon, setPlayIcon] = useState('image/icon/play.svg');
    const [volume,setVolume] = useState(0);
    const [volumeIcon, setVolumeIcon] = useState('image/icon/volumeoff.svg');
    const [playRain, setPlayRain] = useState(false);
    const [volumeRain,setVolumeRain] = useState(0);
    const [playWave, setPlayWave] = useState(false);
    const [volumeWave,setVolumeWave] = useState(0);
    const [brightness,setBrightness] = useState(0);
    const [genre,setGenre] = useState('Streaming');
    const [bgPlayer, setBGPlayer] = useState({
        label: 'BG Video',
        url: '',
    })
    const [particles] = useState(<Particle/>);
    
    const [channel,setChannel] = useState({
        channel: 'Lofi Girl - Relax/Study',
        urlPart: 'jfKfPfyJRdk',
        url: 'https://www.youtube.com/watch?v=jfKfPfyJRdk',
        type: 'Streaming'
    });
    
    const changeMute = () => {
        if(mute){
            setMute(false); setVolumeIcon('image/icon/volumeon.svg');
        }else{
            setMute(true); setVolumeIcon('image/icon/volumeoff.svg'); refVolumeRange.current.value = 0; setVolume(0);
        }
    }
    const playMusic = () => {
        if(play){
            setPlay(false); setPlayIcon('image/icon/play.svg');
            refStopScreen.current.style.display = 'block'; refPause.current.style.display = 'block';
        }else{
            setPlay(true); setPlayIcon('image/icon/pause.svg');
            refStopScreen.current.style.display = 'none';  refPause.current.style.display = 'none';
        }
    }
    const handleChangeVolume = (e) => {
        let volume = e.target.value / 100;     
        setVolume(volume);
    }
    const handleRainVolume = (e) => {
        let volume = e.target.value / 100;
        volume == 0 ? setPlayRain(false) : setPlayRain(true);
        setVolumeRain(volume);
    }
    const handleWaveVolume = (e) => {
        let volume = e.target.value / 100;
        volume == 0 ? setPlayWave(false) : setPlayWave(true);
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
    const handleBackgroundChange = (e) => {
        switch(e.target.value){
            case '0': {
                setBGPlayer({label: 'Video BG', url: ''})
                refBackground.current.style.display = 'none';
                break;
            }
            case '1': {
                setBGPlayer({label: 'Summer Tram', url: 'KextmYQmxH0'})
                refBackground.current.style.display = 'block';
                break;
            }
            case '2': {
                setBGPlayer({label: 'Rain', url: 'kDCXBwzSI-4'})
                refBackground.current.style.display = 'block';
                break;
            }    
            case '3': {
                setBGPlayer({label: 'Living Room', url: 'WPvY5sp17kQ'})
                refBackground.current.style.display = 'block';
                break;
            } 
            case '4': {
                setBGPlayer({label: 'Noelle', url: 'uFEzJ7udA98'})
                refBackground.current.style.display = 'block';
                break;
            }     
        }
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
            channel: 'Floating Garden - Chill',
            urlPart: 'AhxbeH9cFRM',
            url: 'https://www.youtube.com/watch?v=AhxbeH9cFRM',
            type: 'Lofi'
        },
        {
            channel: 'Floating City - Chill',
            urlPart: '1oahTaVIQvk',
            url: 'https://www.youtube.com/watch?v=1oahTaVIQvk',
            type: 'Lofi'
        },
        {
            channel: 'Midnight Aura - Lofi & Jazzhop',
            urlPart: 'tgI6PjEq0O8',
            url: 'https://www.youtube.com/watch?v=tgI6PjEq0O8',
            type: 'Lofi'
        },
        {
            channel: 'Lofi Hiphop Mix - Study & Work',
            urlPart: 'FhKh-lj9qtg',
            url: 'https://www.youtube.com/watch?v=FhKh-lj9qtg',
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
            channel: "Ib - Puppet, Mary's Theme",
            urlPart: 'ssVIe2hicYs',
            url: 'https://www.youtube.com/watch?v=ssVIe2hicYs',
            type: 'Piano'
        },
        {
            channel: 'Tada Koe Hitotsu',
            urlPart: 'bZA9fPmFok0',
            url: 'https://www.youtube.com/watch?v=bZA9fPmFok0',
            type: 'Piano'
        },
        {
            channel: 'La Vie En Rose',
            urlPart: 'hjeHKTTS9A0',
            url: 'https://www.youtube.com/watch?v=hjeHKTTS9A0',
            type: 'Piano'
        },
        {
            channel: 'Csárdás - Vittorio Monti',
            urlPart: 'eGG-PAL_RcQ',
            url: 'https://www.youtube.com/watch?v=eGG-PAL_RcQ',
            type: 'Piano'
        },
        {
            channel: 'J.S.BACH - Badinerie',
            urlPart: '3PP7ZSspeQA',
            url: 'https://www.youtube.com/watch?v=3PP7ZSspeQA',
            type: 'Piano'
        },
        {
            channel: 'Paganini/Liszt - Etude No. 6',
            urlPart: 'LR98AEAgnYQ',
            url: 'https://www.youtube.com/watch?v=LR98AEAgnYQ',
            type: 'Piano'
        },
        {
            channel: 'Rossini - William Tell Overture (Finale)',
            urlPart: '5Sb3W0ZY-1U',
            url: 'https://www.youtube.com/watch?v=5Sb3W0ZY-1U',
            type: 'Piano'
        },
        {
            channel: 'Vivaldi - Spring (The Four Seasons)',
            urlPart: 'jGFqtOdEIWk',
            url: 'https://www.youtube.com/watch?v=jGFqtOdEIWk',
            type: 'Piano'
        },
        {
            channel: 'John Mayer - Slow Dancing In A Burning Room',
            urlPart: 'gJ2Kn2l_NGU',
            url: 'https://www.youtube.com/watch?v=gJ2Kn2l_NGU',
            type: 'Electric Guitar'
        },
        {
            channel: 'Polyphia - Playing God',
            urlPart: 'Z5NoQg8LdDk',
            url: 'https://www.youtube.com/watch?v=Z5NoQg8LdDk',
            type: 'Electric Guitar'
        },
        {
            channel: 'Polyphia - G.O.A.T.',
            urlPart: '9_gkpYORQLU',
            url: 'https://www.youtube.com/watch?v=9_gkpYORQLU',
            type: 'Electric Guitar'
        },
        {
            channel: 'Tim Henson - Sunset (ft. Cory Wong & Plini)',
            urlPart: 'gPJYpjuR-WE',
            url: 'https://www.youtube.com/watch?v=gPJYpjuR-WE',
            type: 'Electric Guitar'
        },
        {
            channel: 'Smooth Jazz Guitar Jam',
            urlPart: 'dN_HZlplA4Q',
            url: 'https://www.youtube.com/watch?v=dN_HZlplA4Q',
            type: 'Electric Guitar'
        },
        {
            channel: 'Joji - Glimpse of Us',
            urlPart: 'FvOpPeKSf_4',
            url: 'https://www.youtube.com/watch?v=FvOpPeKSf_4',
            type: "Creator's Choice"
        },
        {
            channel: 'Joji - Run',
            urlPart: 'K09_5IsgGe8',
            url: 'https://www.youtube.com/watch?v=K09_5IsgGe8',
            type: "Creator's Choice"
        },
        {
            channel: 'saib. - in your arms.',
            urlPart: 'zw47ymC0RNQ',
            url: 'https://www.youtube.com/watch?v=zw47ymC0RNQ',
            type: "Creator's Choice"
        },
        {
            channel: '好きだから。/ 『ユイカ』',
            urlPart: 'eYAd4uDotF0',
            url: 'https://www.youtube.com/watch?v=eYAd4uDotF0',
            type: "Creator's Choice"
        },
        {
            channel: 'Gate Of Steiner',
            urlPart: '7d0WMVU_tlo',
            url: 'https://www.youtube.com/watch?v=7d0WMVU_tlo',
            type: "Creator's Choice"
        },
        {
            channel: 'GREY D x tlinh - vaicaunoicokhiennguoithaydoi',
            urlPart: '2iidlwQ-NfU',
            url: 'https://www.youtube.com/watch?v=2iidlwQ-NfU',
            type: "Creator's Choice"
        },
    ];
    
    return(
        <>       
        <div className='h-full w-full overflow-hidden absolute top-0 scale-150'>
          <ReactPlayer className='react-player' url={`//www.youtube.com/embed/${channel.urlPart}?autoplay=1&mute=0&start=0&controls=0&rel=0`}  config={{youtube: {playerVars: { showinfo: 0 }}}} width={"100%"} height={"100vh"} controls={false} playing={play} loop={true} volume={volume} muted={mute}/>
        </div>
        <div ref={refBackground} className='h-full w-full overflow-hidden absolute top-0 scale-150 hidden'>
          <ReactPlayer className='react-player' url={`//www.youtube.com/embed/${bgPlayer.url}?autoplay=1&mute=0&start=0`} width={"100%"} height={"100vh"} controls={false} playing={play} loop={true} muted={true}/>
        </div>
        <div className={`h-full w-full overflow-hidden absolute top-0 bg-black`} style={{opacity: brightness}}></div>
        <div className='h-full w-full overflow-hidden absolute top-0 hidden'>
          <ReactPlayer className='react-player' url={`//www.youtube.com/embed/q76bMs-NwRk?autoplay=1&mute=0&start=0`} width={"100%"} height={"100vh"} controls={false} playing={playRain} loop={true} volume={volumeRain} muted={mute}/>
          <ReactPlayer className='react-player' url={`//www.youtube.com/embed/nPit8KqqFwI?autoplay=1&mute=0&start=0`} width={"100%"} height={"100vh"} controls={false} playing={playWave} loop={true} volume={volumeWave} muted={mute}/>
        </div>
        <div ref={refStopScreen} className='h-full w-full absolute top-0 bg-black opacity-60 block'>{particles}</div>  
        <div className='h-screen w-screen bg-transparent overflow-hidden absolute top-0'>      
            <motion.div className='h-20 w-full flex justify-start items-center'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 3, ease: 'easeInOut'}}
            >
                <div className='w-1/3 h-full flex justify-start items-center'>
                    <Link to='/MySimpleRadio/'>
                        <button className='h-9 w-9 mx-5 ml-20 text-lg bg-transparent border-2 hover:scale-110 transition duration-300 ease-in-out text-white rounded-full'><img className='h-6 w-6 mx-auto' src='image/icon/back.svg' alt='ReturnIcon'/></button> 
                    </Link>
                    <h2 className='text-white text-3xl' style={{fontFamily: 'Barlow Condensed'}}>My Simple Radio</h2>
                </div>
                <div className='w-7/12 h-full flex justify-start items-center'>
                    <p className='text-white text-6xl truncate py-2' style={{fontFamily: 'Barlow Condensed'}}>{channel.channel}</p>
                    <a href={`${channel.url}`} target={'_blank'} rel='noreferrer'><img className='w-10 h-10 ml-4 mt-2 hover:scale-110 cursor-pointer' src='image/icon/youtube.svg' alt='YoutubeIcon'></img></a>
                </div>
            </motion.div>
            <div className='w-full' style={{height: '70%'}}>
                <motion.div className='w-3/12 h-full float-left'
                    initial={{x:-450}}
                    animate={{x:0}}
                    transition={{duration: 1.6, ease: 'easeInOut'}}
                >
                    <div className='flex justify-center items-center py-2 w-fit mx-auto h-20 text-white after:bg-rose-500 rounded-full appearance-none focus:ring-0 cursor-pointer'>
                        <div className='w-fit float-left ml-5'>
                            <p className='text-center text-white text-2xl' style={{fontFamily: 'Barlow Condensed'}}>{genre}</p>
                            <input type={'range'} onChange={handleGenreChange} className='appearance-none rounded-xl p-0 h-1 bg-slate-100' min={0} max={4} defaultValue={0}/>
                        </div>                         
                    </div>  
                    <div className='w-full h-4/6 mt-3 float-right overflow-w-0 overflow-x-hidden'>
                        {listRadio.filter(condition=>{return condition.type === genre}).map(items=>{
                            return (
                            <motion.div whileHover={{scale:1.2}} whileTap={{scale: 0.8}} transition={{ease: 'easeInOut'}}>
                            <div onClick={()=>changeChannel(items)} className='my-4 cursor-pointer' style={{fontFamily: 'Barlow Condensed'}}>
                                <div className='flex justify-start items-center ml-16 mr-8 transition ease-in-out'>
                                    <img className='h-4 w-4' src='image/icon/play.svg' alt='ReturnIcon'/>
                                    <p className='text-xl ml-5 text-white truncate'>{items.channel}</p>
                                </div>
                            </div>
                            </motion.div>);
                        })}
                    </div>
                </motion.div>
                <motion.div className='w-6/12 h-full float-left'
                    initial={{scale: 0}}
                    animate={{scale: 1}}
                    transition={{duration: 2, ease: 'easeInOut'}}
                >
                    <div ref={refPause} className='w-fit h-fit mx-auto mt-32'>
                        <div className='w-52 h-52 bg-cover bg-center rounded-3xl' style={{backgroundImage: `url('image/icon/pauseGIF.gif')`}}></div>
                        <p className='text-4xl text-white text-center mt-5' style={{fontFamily: 'Barlow Condensed'}}>Paused</p>
                    </div>
                </motion.div>
                <motion.div className='w-3/12 h-full float-right'
                    initial={{x:150}}
                    animate={{x:0}}
                    transition={{duration: 1.7, ease: 'easeInOut'}}
                >
                    <div className='w-full h-full flex justify-end items-center relative'>
                        <div className='w-fit h-fit absolute right-10 bottom-44'>
                            <img className='w-8 h-8' src='image/icon/brightness.svg' alt='BrightnessIcon'></img>
                        </div>
                        <div className='w-10 mr-20 mb-20'>
                            <input ref={refVolumeRange} type={'range'} onChange={handleBrightness} className='appearance-none rounded-xl p-0 h-1 bg-slate-100 -rotate-90' min={0} max={100} defaultValue={0}/>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className='w-full h-full p-5 pb-10'>
                <div className='w-fit h-fit mx-auto grid grid-cols-3 gap-16'>
                    <motion.div className='flex justify-center items-center w-full h-full bg-slate-400 bg-opacity-30 backdrop-blur-xl rounded-full'
                        initial={{y: 150}}
                        animate={{y: 0}}
                        transition={{duration: 2, ease: 'easeInOut'}}
                    >
                        <div className='mx-auto w-fit'>
                            <div className='w-fit float-left mr-10'>
                                <img className='w-8 h-8 mx-auto' src='image/icon/rain.svg' alt='RainIcon'></img>
                                <input ref={refVolumeRange} type={'range'} onChange={handleRainVolume} className='appearance-none rounded-xl p-0 h-1 bg-slate-100' min={0} max={100} defaultValue={0}/>
                            </div>
                            <div className='w-fit float-left ml-5'>
                            <img className='w-8 h-8 mx-auto' src='image/icon/wave.svg' alt='WaveIcon'></img>
                                <input ref={refVolumeRange} type={'range'} onChange={handleWaveVolume} className='appearance-none rounded-xl p-0 h-1 bg-slate-100' min={0} max={100} defaultValue={0}/>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className='flex justify-between items-center px-5 py-3 bg-transparent mx-auto w-fit h-fit bg-slate-400 bg-opacity-30 backdrop-blur-xl rounded-full'
                    initial={{y: 150}}
                    animate={{y: 0}}
                    transition={{duration: 1.6, ease: 'easeInOut'}}
                    >         
                        <motion.div whileHover={{scale:1.1}} whileTap={{scale: 0.8}} transition={{ease: 'easeInOut'}}>
                        <button onClick={playMusic} className='h-20 w-20 mx-5 text-lg bg-transparent border-2 transition duration-300 ease-in-out text-white rounded-full'><img className='h-12 w-12 mx-auto' src={playIcon} alt='PlayIcon'/></button>  
                        </motion.div>
                        <motion.div whileHover={{scale:1.1}} whileTap={{scale: 0.8}} transition={{ease: 'easeInOut'}}>
                        <button onClick={changeMute} className='h-20 w-20 mx-5 text-lg bg-transparent border-2 hover:scale-110 transition duration-300 ease-in-out text-white rounded-full'><img className='h-12 w-12 mx-auto' src={volumeIcon} alt='VolumeIcon'/></button>   
                        </motion.div>
                        <input ref={refVolumeRange} type={'range'} onChange={handleChangeVolume} className='appearance-none rounded-xl p-0 h-1 bg-slate-100' min={0} max={100} defaultValue={0}/>          
                    </motion.div>
                    <motion.div className='flex justify-between items-center w-full h-full'
                        initial={{y: 150}}
                        animate={{y: 0}}
                        transition={{duration: 2, ease: 'easeInOut'}}
                    >                     
                        <div className='flex justify-center items-center py-4 mx-5 w-3/4 h-full bg-slate-400 bg-opacity-30 backdrop-blur-xl text-white after:bg-rose-500 rounded-full appearance-none focus:ring-0 cursor-pointer'>
                            <div className='w-fit float-left ml-5'>
                                <p className='text-center text-white text-2xl' style={{fontFamily: 'Barlow Condensed'}}>{bgPlayer.label}</p>
                                <input type={'range'} onChange={handleBackgroundChange} className='appearance-none rounded-xl p-0 h-1 bg-slate-100' min={0} max={4} defaultValue={0}/>
                            </div>                         
                        </div>                        
                    </motion.div>
                </div>
            </div>
        </div>
        </>
    );
}
