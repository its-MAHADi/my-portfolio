import React from 'react'

 const Service = [
      {
         id:1,
         title:"Web Design",
         Description:"creating visually appealing and user-friendly web designs",
      },

      {
         id:2,
         title:"Frontend Development",
         Description:"Building responsive and interactive user interfaces",
      },

      {
         id:3,
         title:"Backend Development",
         Description:"Developing robust server-side logic and Databases",
      },

      {
         id:4,
         title:"Mern-Stack Development",
         Description:"Combining both frontend and Backend Development Skills ",
      },

      // {
      //    id:5,
      //    title:"content Writing",
      //    Description:"Writing content for your business and companies",
      // },
    
];

const Services = () => { 
  return (
    <div className='bg-black text-white py-20 ' id='services'>
    <div className='container mx-auto px-8 md:px-16 lg:px-24'>
    <h2 className='text-4xl font-bold text-center mb-12'>My Services</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
        {Service.map(Services => (
         <div key={Services.id}
         className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>

            <div className='text-left text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400'>

               {Services.id}
               <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                {Services.title}
               </h3>
                <p className='mt-2 text-gray-300'> {Services.Description} </p>
                <a href="#" className='mt-4 inline-block text-green-400 hover:text-blue-500'> Read More </a>
                </div>

         </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Services