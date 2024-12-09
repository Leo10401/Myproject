import React from 'react'

import App from './category-2/page';

const Home = () => {
  return (
    <div>
      <div
        className=" min-h-screen "
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          muted
          autoPlay
          playsInline
        >
          <source src="/Whitechristmas.mp4" type="video/mp4" />
        </video>
        <div className=" top-0 left-0 w-full h-full  "></div>
      </div><div className='min-h-screen'>
        <header className="w-full bg-primary py-6 shadow-lg bg-white sticky top-0 z-10 mb-36">
          <h1 className="text-4xl font-bold text-center text-accent background  bg-white">Find Your Perfect Companion</h1>

        </header>

        <App />
        <footer className="w-full bg-primary py-4 text-center flex justify-end  shadow-lg sticky bottom-0 z-10">
          <p className="text-primary-foreground">© 2023 Pet Adoption Platform. All rights reserved.</p>
        </footer></div>
    </div>

  )
}

export default Home;