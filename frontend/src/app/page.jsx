import React from 'react'
 
import Browse from './Category/page';

const Home = () => {
  return (
    <div>
      <div 
        className="relative h-screen"
      >
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover"
          muted 
          autoPlay 
           
          playsInline
        >
          <source src="/Whitechristmas.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full "></div>
      </div>
      <Browse/>
    </div>
  )
}

export default Home;