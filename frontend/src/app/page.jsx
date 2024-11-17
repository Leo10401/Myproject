import React from 'react'
import backgroundImage from './bgimage.jpeg'; 

const Home = () => {
  return (
    <div>
      <div 
        className="bg-gradient-to-r h-screen from-accent to-secondary text-primary-foreground dark:text-secondary-foreground bg-no-repeat bg-contain py-20 px-4 md:px-8 text-center rounded-lg shadow-lg"
        style={{
          backgroundImage: `url(${backgroundImage.src})`
        }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">Find Your New Best Friend</h1>
        <p className="text-lg md:text-xl mb-8 italic">Browse through our adorable pets available for adoption</p>
        <a href="#" className="bg-primary hover:bg-primary/80 text-primary-foreground font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-md transform hover:scale-105">Adopt Now</a>
      </div>
    </div>
  )
}

export default Home;