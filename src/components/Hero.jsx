import React from 'react'
import image from "../assets/icon..jfif"
import { ArrowDownToLine } from 'lucide-react'

function Hero() {
  return (
    <div className='bg-black text-white text-center py-16'>
       <img src= {image} alt=""
       className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105' />
       <h1 className='text-4xl font-bold'>
        I'M {" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Mahadi Hasan</span>
       , Mern-Stack Developer
       </h1>
       <p className='mt-4 text-lg text-gray-300 '>
       Hello! I'm Mahadi Hasan,
        A passionate Junior Web Developer eager to contribute to cutting-edge web projects. Proficient in front-end development using HTML, CSS, JavaScript, and React, with a solid understanding of back-end technologies like Node.js and Express.|
       </p>
       <div className='mt-8 space-x-8 '>
        <button  className='bg-gradient-to-r from bg-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact With Me</button>
        <button  className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-10 py-2 rounded-full'> Resume </button>
       </div>
    </div>
  )
}

export default Hero



{/* <ArrowDownToLine size={20}/> */}


{/* <button className='bg-indigo-700 hover:text-white px-4 py-2 font-bold rounded-2xl flex items-center gap-1'> Download CV <ArrowDownToLine size={20}/> </button> */}


{/* <button  className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-10 py-2 rounded-full items-center gap-2 '> Download CV <ArrowDownToLine size={20}/> </button> */}