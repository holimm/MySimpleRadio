import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactPlayer from 'react-player';
import {Link,BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './home';
import MusicStreamer from './musicstreamer';


const App = () => {
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/musicstreamer' element={<MusicStreamer/>}></Route>
      </Routes>
    </BrowserRouter>     
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
