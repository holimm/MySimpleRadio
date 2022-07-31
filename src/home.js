import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import {Link} from 'react-router-dom';
import Particle2 from './particles/particles2';

export default function Home(){
    const refIcon = useRef(null);
    const refVolume = useRef(null);
    const [mute,setMute] = useState(true);
    const [volume,setVolume] = useState(0.5);
    const [particles] = useState(<Particle2/>);
    const [channel] = useState({
        channel: 'Lofi Girl',
        url: '//www.youtube.com/embed/5_Blq9W9cT8&t?autoplay=1&mute=0&start=1',
    });
    const unMute = () => {
        if(mute){
            setMute(false);refIcon.current.classList.add('animate-bounce');
        }else{
            setMute(true);refIcon.current.classList.remove('animate-bounce');refVolume.current.value=0;setVolume(0);
        }
    }
    return(
        <>       
        <div className='h-full w-full overflow-hidden absolute top-0 scale-150'>
          <ReactPlayer className='react-player' url={`${channel.url}`} width={"100%"} height={"100vh"} playing={true} loop={true} volume={volume} muted={mute}/>
        </div>
        <div className='h-full w-full overflow-hidden absolute top-0 bg-black opacity-20'></div>
        {particles}
        <div className='h-screen w-screen bg-transparent overflow-hidden absolute top-0'>
            <div className='w-fit h-fit p-5 pb-10 mt-60 mx-auto border-2 border-transparent hover:border-t-white hover:border-b-white hover:border-t-2 hover:border-b-2 transition duration-500 ease-in-out'>
                <div className='flex justify-start items-center mt-5'>
                    <p className='text-7xl text-white text-center' style={{fontFamily: 'Barlow Condensed'}}>MY SIMPLE RADIO</p>
                    <img ref={refIcon} onClick={unMute} className='w-16 h-16 ml-5 hover:scale-110 cursor-pointer' src='image/headphone.svg' alt='HeadphoneIcon'></img>
                </div>
                {/* <p className='text-xl text-white text-center mt-2 mb-10' style={{fontFamily: 'Barlow Condensed'}}>AN ONLINE MUSIC APP</p> */}
                <div className='bg-transparent mx-auto mt-12 w-fit h-fit'>
                    <Link to='/MySimpleRadio/MusicStreamer'>
                    <button className='px-20 py-5 text-lg bg-transparent border-2 hover:bg-white hover:text-black transition duration-300 ease-in-out text-white rounded-full'>START LISTENING</button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    );
}
