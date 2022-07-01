import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-lg font-bold text-[#00df9a]">
            Learn Web Development
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
            vitae maiores aut eveniet dignissimos reiciendis ullam corrupti qui
            accusantium, veritatis iste libero illo officiis culpa, ipsam,
            blanditiis sapiente nihil vero.
          </p>
          <button className="bg-black w-[200px] rounded-md font-bold mx-auto md:mx-0 my-6 px-6 py-2 text-[#00df9a]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics