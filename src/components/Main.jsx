import React from 'react';

import Mainvideo from '../images/video.mp4';

const Hero = () => {
  return (
    <div className='w-full h-[90vh] top-[90px]'>
      <video
        className='object-cover h-full w-full absolute -z-10'
        src={Mainvideo}
        autoPlay
        loop
        muted
      />
      <div className='w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center'>
        <h1>Decentralized</h1>
        <h1 className='py-2'>
          <span className='blue'>Worldwide</span> Web
        </h1>
        <p className='text-xl py-4'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        </p>
        <div>
          <button className='m-2'>Use Defi</button>
          <button className='m-2'>FAQ</button>
        </div>
      </div>
     
    </div>
  );
};

export default Hero;