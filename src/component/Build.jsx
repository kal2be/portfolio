import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBootstrap, faGithub, faLinkedinIn, faMdb, faNodeJs, faReact, faXTwitter} from '@fortawesome/free-brands-svg-icons'
import {  faArrowRight, faCloud, faMailBulk} from '@fortawesome/free-solid-svg-icons'
import "./build.scss"
import {motion} from "framer-motion"
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons/faGithubAlt'
function Build() {
  return (
    <div className='lg:mt-20 mt-10'>
    {/* ++++++++++++++++++ about my-self and my work _+++++++++++++++++++++++++++++++_+++++++++++++ */}
      <div className='text-xl font-[400] text-gray-200'>
        <p>I&apos;m <span className='text-[#e80b24]'>Yahoulbo Felix</span>.
         I&apos;m a enthusiast Programmer,and software engineer specialize 
         in Frontend Development,backend development using Elixir,automated trading system,Forex trader,AI automation,writing computer program is one 
         of my best passion,and solving real world problem.</p>
      </div>
      {/* _++++++++++++++++++++ the social media that we use _++++++++++++++++++++++++++++++++++++++++= */}
      <div className='flex my-3 text-white' id='network'>
        <p className='bg-[#021927a0] me-3 py-1 px-1 cursor-pointer rounded-lg font-medium'><a href='https://github.com/kal1be'><FontAwesomeIcon icon={faGithub} className='px-2'/>Github</a></p>
        <p className='bg-[#021927a0] mx-1 lg:mx-2 py-1 px-1 cursor-pointer rounded-lg font-medium'><a href='https://xtwiter.com/kalibe'><FontAwesomeIcon icon={faXTwitter} className='px-2'/>Twitter</a></p>
        <p className='bg-[#021927a0] mx-1 lg:mx-2 py-1 px-1 cursor-pointer rounded-lg font-medium'><a href='https://www.linkedin.com/in/kalibe-felix-38aa2a294'><FontAwesomeIcon icon={faLinkedinIn} className='px-2'/>LinkedIn</a></p>
        <p className='bg-[#021927a0] mx-1 lg:mx-2 py-1 px-1 cursor-pointer rounded-lg font-medium'><a href='https://gmail.com/yahoulbofelix@gmail.com'><FontAwesomeIcon icon={faMailBulk} className='px-2'/>Email</a></p>
      </div>
      {/* _+++++++++++++++++++ the current skills that we working _++++++++++++++++++++++ */}
      <div className='my-20'>
       <h2 className='text-xl font-medium text-white'>Current favorite tech stack/tools</h2>
       <div className='text-gray-400 grid lg:grid-cols-6 grid-cols-3 justify-between md:gap-4 gap-2  mt-6'>
       <span className='border border-gray-700 p-2 flex justify-between gap-1 items-center'>Bootstrap<FontAwesomeIcon icon={faBootstrap} className='text-blue-400'/></span>
       <span className='border border-gray-700 p-2 flex justify-between gap-1 items-center'>ReactJs<FontAwesomeIcon icon={faReact} className='text-blue-400'/></span>
       <span className='border border-gray-700 p-2 flex justify-between gap-1 items-center'>MongoDb<FontAwesomeIcon icon={faMdb} className='text-green-400'/></span>
       <span className='border border-gray-700 p-2 flex justify-between gap-1 items-center'>NodeJs<FontAwesomeIcon icon={faNodeJs} className='text-yellow-400'/></span>
       <span className='border border-gray-700 p-2 flex justify-between gap-1 items-center'>AwS<FontAwesomeIcon icon={faCloud} className='text-yellow-800'/></span>
       <span className='border border-gray-700 p-2 flex justify-between gap-1 items-center'>Git&Github<FontAwesomeIcon icon={faGithub} /></span>
       </div>
      </div>

      <hr/>
      {/* +++++++++++++++++ our latest blog _+++++++++++++++++++++++++++++++++++++= */}
      <div className='my-20'>
      <h2 className='text-xl font-bold text-white mx-2'>Our latest blog</h2>
      <div>
        <motion.div
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}}
         className='rounded-lg py-3 px-2 bg-[#011826a0] my-6'>

            <h3 className='text-xl text-white capitalize'>software <span className='text-[#e80b24]'>universite de Toukra</span></h3>

            <h4 className='text-md text-gray-300 my-3'>Septembre 2023</h4>
            <p className='text-lg text-gray-300'>The university web app was created to allow student to register online to the university and check available department in the university.</p>
        </motion.div>
        <motion.div
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}}
         className='rounded-lg py-3 px-2 bg-[#011826a0] my-6'>

            <h3 className='text-xl text-white capitalize'>Software <span className='text-[#e80b24]'>Sesaabu</span></h3>

            <h4 className='text-md text-gray-300 my-3'>january 2026</h4>
            <p className='text-lg text-gray-300'>The university website who allow student in the department to be able to download course materiel,interact with others and allow staff to post news paper in the department with an active admin dashboard who can upload course materiel,news paper and blogs !</p>
        </motion.div>
        <motion.div
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}

        whileInView={{opacity:1,x:0}}
         className='rounded-lg py-3 px-2 bg-[#021927a0] my-6'>
            <h3 className='text-xl text-white capitalize'>web app<span className='text-[#e80b24]'> Distance Learning blog</span></h3>
            <h4 className='text-md text-gray-300 my-3'>April 2024</h4>
            <p className='text-lg text-gray-300'>Developed a platform to address real-world issues, enabling students and faculty members to create and share diverse content, including blogs. The platform boasts 150 active users and facilitates interactive engagement through commenting functionalities. Leveraged technologies such as React, MongoDB,
             Express, and Node.js for robust development and implemented enhanced authentication mechanisms for improved security.</p>
        </motion.div>
       


        <motion.div
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}} className='rounded-lg py-3 px-2 bg-[#021927a0] my-6'>
            <h3 className='text-xl text-white capitalize'> Software <span className='text-[#e80b24]'>WebDocs</span></h3>

        {/* whileInView={{opacity:1,x:0}} className='rounded-lg py-3 px-2 bg-[#021927a0] my-6'> */}
            <h4 className='text-md text-gray-300 my-3'>october 2023</h4>
            <p className='text-lg text-gray-300'>the website was create to help the beginner to get some knowledge with html,css and javascript.</p>
        </motion.div>
        <motion.div
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}} className='rounded-lg py-3 px-2 bg-[#021927a0] my-6'>

<h3 className='text-xl text-white capitalized'>Trading platform <span className='text-[#e80b24]'>OneX</span></h3>      
      <h4 className='text-md  text-gray-300 my-3'>Mars 2026</h4>
            <p className='text-lg text-gray-300'>The software was create to perform in the crypto market by generating signal,using mathematiques and machine learning. allow quant and trader to make informed decisions.</p>
        </motion.div>
      </div>
        {/* <h2 className='text-xl text-white'>Read more <FontAwesomeIcon icon={faArrowRight} className='mt-2'/></h2> */}
      </div>
      {/* +______________________________ our peojwct +____________________+++++++++++++++++++++++++++++==== */}
      <hr/>
      <div className='my-20'>
      <h2 className='text-2xl font-bold text-white'>Latest project</h2>
      <p className='text-white text-xl my-2'>Click on the project to enter the website .</p>


      
       <div className='lg:flex mt-10'>
      <a className='lg:w-[65%] block cursor-pointer z-50 relative' href="https://onex-one.vercel.app" target='_blank ' rel='noopener noreferrer'>
     <div className='border p-4  lg:ms-2 lg:mt-0 mt-4'  id='element'>
       <motion.img 
      src='/onex.png' className='h-[35vh] w-full'/>
       <h4 className='text-lg text-[#e80b24] px-1 my-3'>Mars 2026</h4>
       <p className='text-md my-2 text-white px-1'>The software was create to perform in the crypto market by generating signal,using mathematiques and machine learning. allow quant and trader to make informed decision</p>
       </div></a>
     <a className='lg:w-[65%] block cursor-pointer z-50 relative' href="https://sesaabu.com.ng" target='_blank ' rel='noopener noreferrer'>
     <div className='border p-4  lg:ms-2 lg:mt-0 mt-4'  id='element'>
       <motion.img 
      src='/sesa.png' className='h-[35vh] w-full'/>
       <h4 className='text-lg text-[#e80b24] px-1 my-3'>september 2024</h4>
       <p className='text-md my-2 text-white px-1'>The university website who allow student in the department to be able to download course materiel,interact with others and allow staff to post news paper in the department. </p>
       </div></a>
      </div>

      {/* _++++++++++++++++++ the first latest project_++++++++++++++++++++++++++++ */}
      <div className='lg:flex mt-10'>
       <a  href="https://kal1be.github.io/toukra-project " className='lg:w-[65%] block cursor-pointer z-50 relative' target='_blank ' rel='noopener noreferrer'>

       <div className='border p-4  lg:me-2 mt-4' id='element'>
<img src='/toukra1.png' className='h-[35vh] w-full'/>
<h4 className='text-lg text-[#e80b24] my-3 px-1'>Septembre 2023</h4>
<p className='text-md my-2 text-white px-1'>The university website was created in the objectif to help the foreign
 to know more about the university and know about their program and discuss with the school stuff for more about their service.</p>
       </div></a>
       <a  href="https://kal1be.github.io/devtechnology" className='lg:w-[65%] block cursor-pointer z-50 relative' target='_blank ' rel='noopener noreferrer'>

<div className='border p-4  lg:me-2 mt-4' id='element'>
<img src='/devtech.png' className='h-[35vh] w-full'/>
<h4 className='text-lg text-[#e80b24] my-3 px-1'>March 2024</h4>
<p className='text-md my-2 text-white px-1'>DevTechnology is one of my company build for creating cutting-edge service web,networking,LMS platform,E-Commerce and since created and stabilish in 2018,we have almost 300 users in two different country .</p>
</div></a>
   
      </div>
      {/* +____________________=++++++++++++++++++++ the second latest project+_______________________________+++++++++++++++++ */}
      <div className='lg:flex mt-10'>
      <a  href="https://distance-learning-blog.onrender.com" className='lg:w-[65%] block cursor-pointer z-50 relative' target='_blank ' rel='noopener noreferrer' >
     <div className='border p-4  lg:ms-2 lg:mt-0 mt-4'  id='element'>
       <motion.img 
      src='/distance.png' className='h-[35vh] w-full'/>
       <h4 className='text-lg text-[#e80b24] px-1 my-3'>Mars 2024</h4>
       <p className='text-md my-2 text-white px-1'>Distance Learning blog is a plateform to address real-world issues,enabling students and members of faculty to create and share diverse including blogs.</p>
       </div></a>
     <a  href="https://learn-online-course.onrender.com/" className='lg:w-[65%] block cursor-pointer z-50 relative' target='_blank ' rel='noopener noreferrer'>
     <div className='border p-4  lg:ms-2 lg:mt-0 mt-4'  id='element'>
       <motion.img 
      src='/webdocs.png' className='h-[35vh] w-full'/>
       <h4 className='text-lg text-[#e80b24] px-1 my-3'>september 2024</h4>
       <p className='text-md my-2 text-white px-1'>WebDocs is an online platform  build for teaching basics of programing such as HTML,CSS3,JavaScript,python it easy to navigate and interact with as a beginner</p>
       </div></a>
      </div>

      </div>
    </div>
  )
}

export default Build
