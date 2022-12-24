import * as React from 'react'
import SantaBg from '../images/santa.jpg'
import Clip from '../images/clip.mp4'

const Home = () => {
  return (
    <div className="relative h-screen overflow-hidden">
        <img 
          src={SantaBg} 
          className="absolute top-0 left-0 z-10 h-full w-full object-cover opacity-50"
          alt="" 
        />
        <div className="z-20 p-8 flex flex-col items-center h-full w-full justify-center">
          <h1 className="text-center leading-relaxed z-20 my-12 text-5xl filter drop-shadow-lg text-red-600">
            FELIZ NAVIDAD MI AMOR!
          </h1>
          <video 
                repeat="true" 
                loop 
                autoPlay 
                muted 
                preload="metadata"
                playsInline 
                className="z-20 my-auto w-full"
            >
                <source 
                    src={Clip} 
                    type="video/mp4" 
                    alt=""
                />
            </video>
            <p className="z-20 my-12 text-xl">
              Love of my life, I hope you have the most amazing Christmas imaginable. You mean the world to me and because I know one of your dreams is to race, we're going to the Sergio Perez Karting Track in Guadalajara.I can't wait to take you on this trip and see you scream with joy while you GO FAST!!
            </p>
            <h1 className="text-green-500 text-4xl filter drop-shadw-lg">
              LOVE B
            </h1>
        </div>
    </div>
  )
}

export default Home