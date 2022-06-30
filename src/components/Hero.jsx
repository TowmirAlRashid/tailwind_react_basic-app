import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[900px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="uppercase text-[#00df9a] font-bold p-2">
          Growing with web development
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold py-2 md:py-6">
          Grow with MERN stack
        </h1>
        <div className='flex justify-center items-center'>
          <p className="font-bold text-lg sm:text-3xl md:text-4xl py-4">
            Fast, flexible development with
          </p>
          <Typed
            className="font-bold text-lg sm:text-3xl md:text-4xl pl-2"
            strings={["JavaScript", "ReactJs", "NextJs", "NodeJs", "MongoDB", "ExpressJs"]}
            typeSpeed={120}
            backSpeed={130}
            startDelay={30}
            backDelay={30}
            loop
          />
        </div>
        <p className='text-xl md:text-2xl font-bold text-gray-600 py-3'>Start your journey with MERN stack today!</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-bold mx-auto my-6 px-6 py-2 text-black'>Get Started</button>
      </div>
    </div>
  );
}

export default Hero