import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-lg flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ease-in-out">
          <img
            src={Single}
            alt="/"
            className="w-20 mx-auto mt-[-3rem] bg-white"
          />
          <h2 className="text-2xl text-center font-bold py-8">
            Single Learner
          </h2>
          <p className="text-center font-bold text-4xl">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">6 months of learning.</p>
            <p className="py-2 border-b mx-8">500+ videos</p>
            <p className="py-2 border-b mx-8">Necessary documentation</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-bold mx-auto my-6 px-6 py-2 text-black">
            Start Trial
          </button>
        </div>

        <div className="w-full shadow-lg flex flex-col p-4 my-8 bg-gray-100 rounded-lg hover:scale-105 duration-300 ease-in-out">
          <img
            src={Double}
            alt="/"
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
          />
          <h2 className="text-2xl text-center font-bold py-8">
            Double Learners
          </h2>
          <p className="text-center font-bold text-4xl">$199</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">6 months of learning.</p>
            <p className="py-2 border-b mx-8">1000+ videos</p>
            <p className="py-2 border-b mx-8">Necessary documentation</p>
          </div>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-bold mx-auto my-6 px-6 py-2">
            Start Trial
          </button>
        </div>

        <div className="w-full shadow-lg flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ease-in-out">
          <img
            src={Triple}
            alt="/"
            className="w-20 mx-auto mt-[-3rem] bg-white"
          />
          <h2 className="text-2xl text-center font-bold py-8">
            Three Learners
          </h2>
          <p className="text-center font-bold text-4xl">$249</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">6 months of learning.</p>
            <p className="py-2 border-b mx-8">1500+ videos</p>
            <p className="py-2 border-b mx-8">Necessary documentation</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-bold mx-auto my-6 px-6 py-2 text-black">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards