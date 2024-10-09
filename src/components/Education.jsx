import React from 'react'

const Educations = [
    {
        id:"Department of Science",
        title:"Feni Govt Pilot High School",
        description:"january,2015-February,2020",

    },
    {
        id:"Computer Science and Technology",
        title:"Lakshmipur Polytechnic Institute",
        description:"September,2021-October,2024",

    },
]

const Education = () => {
  return (
    <div className='bg-black text-white py-20 ' id='Education'>
    <div className='container mx-auto px-8 md:px-16 lg:px-24'>
    <h2 className='text-4xl font-bold text-center mb-12'>Education</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
        {Educations.map (Educations =>(
            <div key={Educations.id}
            className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                <div className='text-left text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r text-white'>
                    {Educations.id}
                    </div>
                    <h3  className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                     {Educations.title}
                    </h3>
                    <p  className='mt-2 text-gray-300'> {Educations.description} </p>
             </div>
        ))}
    </div>
    </div>
    </div>
  )
}

export default Education
