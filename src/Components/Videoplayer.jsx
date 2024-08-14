import React from 'react'
import ReactPlayer from 'react-player';
import Vid1 from '../Video/Vid1.mp4';
// import vid2 from './video/vid2';
// import vid3 from './video/vid3';
// import vid4 from './video/vid4';
// import vid5 from './video/vid5';


function Videoplayer() {
    // const video=[url='']
  return (
    <div className='  relative h-screen w-full bg-zinc-500'>
        <div className='absolute bg-red-200 h-[200px] w-[200px] rounded-md m-10'>
            <div className="actualvid">
                <ReactPlayer url={Vid1} playing={true} muted={true} loop={true}/>
            </div>
        </div>
    </div>
  )
}

export default Videoplayer
