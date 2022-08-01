import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

export default function Home(){
    const refIcon = useRef(null);
    const refVolume = useRef(null);
    const [mute,setMute] = useState(true);
    const [volume,setVolume] = useState(0.5);
    const [channel] = useState({
        url: '//www.youtube.com/embed/2fCoOx9W4NQ?autoplay=1&mute=0&start=1',
    });
    const unMute = () => {
        if(mute){
            setMute(false);
        }else{
            setMute(true);refVolume.current.value=0;setVolume(0);
        }
    }
    return(
        <>       
        <div className='h-full w-full overflow-hidden absolute top-0 scale-125'>
          <ReactPlayer className='react-player' url={`${channel.url}`} width={"100%"} height={"100vh"} playing={true} loop={true} volume={volume} muted={mute}/>
        </div>
        <div className='h-full w-full overflow-hidden absolute top-0 scale-150 hidden'>
          <ReactPlayer className='react-player' url={`//www.youtube.com/embed/q76bMs-NwRk?autoplay=1&mute=0&start=0`} width={"100%"} height={"100vh"} playing={true} loop={true} volume={0.4} muted={mute}/>
        </div>
        <div className='h-full w-full overflow-hidden absolute top-0 bg-black opacity-30'></div>
        <div className='h-screen w-screen bg-transparent overflow-hidden absolute top-0'>
            <motion.div className='w-fit h-fit p-5 pb-10 mt-60 mx-auto border-2 border-transparent'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 2}}
            >
                <motion.div className='flex justify-start items-center mt-5'
                    initial={{opacity: 0, letterSpacing: '13px'}}
                    animate={{opacity: 1, letterSpacing: '3px'}}
                    transition={{duration: 4}}
                >
                    <p className='text-7xl text-white text-center' style={{fontFamily: 'Barlow Condensed'}}>MY SIMPLE RADIO</p>
                    <motion.div whileTap={{scale: 1.6}} transition={{ease: 'easeInOut'}}>
                        <img ref={refIcon} onClick={unMute} className='w-16 h-16 ml-5 cursor-pointer' src='image/headphone.svg' alt='HeadphoneIcon'></img>
                    </motion.div>
                </motion.div>
                {/* <p className='text-xl text-white text-center mt-2 mb-10' style={{fontFamily: 'Barlow Condensed'}}>AN ONLINE MUSIC APP</p> */}
                <motion.div className='bg-transparent mx-auto mt-12 w-fit h-fit'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 5}}
                >
                    <Link to='/MySimpleRadio/MusicStreamer'>
                    <button className='px-20 py-5 text-lg bg-transparent hover:scale-110 border-2 hover:bg-white hover:text-black transition duration-300 ease-in-out text-white rounded-full'>START LISTENING</button>
                    </Link>
                </motion.div>
            </motion.div>
        </div>
        </>
    );
}
