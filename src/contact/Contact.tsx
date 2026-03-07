import React from 'react'
import Footer from '../footer/Footer'
import { motion} from 'framer-motion'
function Contact() {
    const handleSubmit=()=>{
    
    }
  return (
    <div className='wrap mt-24 relative overflow-hidden'>
        <div className="absolute inset-0 opacity-20">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                      className="w-[700px] h-[800px] border border-blue-500 rounded-full absolute -top-40 -left-40"
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                      className="w-[700px] h-[700px] border border-purple-500 rounded-full absolute top-20 right-[-200px]"
                    />
                  </div>
        <h3 className='md:text-lg text-md font-medium font-sans lg:m-2 text-white'>Leave me a feedback and let's work together!</h3>
        <form onSubmit={handleSubmit}>
            <div className='w-full md:flex gap-12 text-white my-6 '>
                <div className='md:w-[360px]'>
                    <label className='block py-2 text-md' htmlFor="">Enter your name</label>
                    <input type="text" className='w-full py-2 bg-[#021927a0] outline-none ' />
                </div>

                <div className='md:w-[360px]'>
                    <label className='block py-2 text-md' htmlFor="email">Enter your email</label>
                    <input type="email" className='w-full py-2 bg-[#021927a0] outline-none' />
                </div>
            </div>
            <label htmlFor="" className='text-md text-white'>Your message here!</label>
            <textarea className="w-full text-white bg-[#021927a0] my-4 outline-none" name="" id="" cols={30} rows={10}></textarea>
            <button className='text-center bg-white text-black w-full py-2 rounded-xl '>Submit</button>
        </form>

     <div className='mt-4'>
     <Footer/>
     </div>
    </div>
  )
}

export default Contact
