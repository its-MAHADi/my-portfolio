import React from 'react'
import about from "../assets/about.jfif"

function About() {
  return (
    <div className='bg-black text-white py-20 ' id='about'>
       <div className='container mx-auto px-8 md:px-16 lg:px-24'>
       <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
       <div className='flex flex-col md:flex-row items-center md:space-x-12'>
       <img src= {about} alt=""
       className='w-72 h-80 rounded object-cover mb-8 md:mb-0' />
         <div className='flex-1'> 
        <p className='text-lg mb-8'>
        I am a passionate mern-stack developer with a focus on a building
        modern and responsibe web applications.With a strong foundation
        in both frontend and backend technologies,I strive to create 
        seamless and efficient user experiences.
       </p>
         <div className='space-y-4'>
          <div className='flex items-center'>
          <label htmlFor="htmlandcss" className='w-2/12'>HTML & CSS</label>
          <div className='grow bg-gray-800 rounded-full h-2.5'>
            <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transfrom transition-transform duration-300 hover:scale-105 w-10/12'>
            </div>
          </div>
          </div>

          <div className='flex items-center'>
          <label htmlFor="htmlandcss" className='w-2/12'>Javascript</label>
          <div className='grow bg-gray-800 rounded-full h-2.5'>
            <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transfrom transition-transform duration-300 hover:scale-105 w-10/12'>
            </div>
          </div>
          </div>
           
          <div className='flex items-center'>
          <label htmlFor="htmlandcss" className='w-2/12'>React JS</label>
          <div className='grow bg-gray-800 rounded-full h-2.5'>
            <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transfrom transition-transform duration-300 hover:scale-105 w-11/12'>
            </div>
          </div>
          </div>

          <div className='flex items-center'>
          <label htmlFor="htmlandcss" className='w-2/12'>Next JS</label>
          <div className='grow bg-gray-800 rounded-full h-2.5'>
            <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transfrom transition-transform duration-300 hover:scale-105 w-7/12'>
            </div>
          </div>
          </div>

         </div>
            {/* Experience */}
         <div className='mt-12 flex justify-between text-center'>
            <div>
                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                    80%
                </h3>
                <p> Communication </p>
            </div>

            <div>
                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                    90%
                </h3>
                <p> Time Management </p>
            </div>

            <div>
                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                    80%
                </h3>
                <p> Leadership </p>
            </div>


         </div>

       </div>
       </div>
       </div>
    </div>
  )
}

export default About
