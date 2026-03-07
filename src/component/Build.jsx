import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBootstrap, faGithub, faLinkedinIn, faMdb, faNodeJs, faReact, faXTwitter,faTypo3} from '@fortawesome/free-brands-svg-icons'
import {  faArrowRight, faMailBulk} from '@fortawesome/free-solid-svg-icons'
import "./build.scss"
import { Link } from 'react-router-dom'
import {motion} from "framer-motion"
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
       <div className='text-gray-400 text-3xl flex justify-between  w-52 mt-6'>
       <FontAwesomeIcon icon={faBootstrap}/>
       <FontAwesomeIcon icon={faReact}/>
       <FontAwesomeIcon icon={faNodeJs}/>
       <FontAwesomeIcon icon={faMdb}/>
       <FontAwesomeIcon icon={faTypo3}/>
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

            <h3 className='text-xl text-white capitalize'>Built a school website name <span className='text-[#e80b24]'>universite de Toukra</span></h3>

            <h4 className='text-md text-gray-300 my-3'>Septembre 2023</h4>
            <p className='text-lg text-gray-300'>We create a university website who help the foreign to know about the university !</p>
        </motion.div>
        <motion.div
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}

        whileInView={{opacity:1,x:0}}
         className='rounded-lg py-3 px-2 bg-[#021927a0] my-6'>
            <h3 className='text-xl text-white capitalize'>Real world problem solver website<span className='text-[#e80b24]'> Distance Learning blog</span></h3>
            <h4 className='text-md text-gray-300 my-3'>April 2024</h4>
            <p className='text-lg text-gray-300'>Developed a platform to address real-world issues, enabling students and faculty members to create and share diverse content, including blogs. The platform boasts 150 active users and facilitates interactive engagement through commenting functionalities. Leveraged technologies such as React, MongoDB,
             Express, and Node.js for robust development and implemented enhanced authentication mechanisms for improved security.</p>
        </motion.div>



        <motion.div
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}} className='rounded-lg py-3 px-2 bg-[#021927a0] my-6'>
            <h3 className='text-xl text-white capitalize'> Build a Web documentation named <span className='text-[#e80b24]'>WebDocs</span></h3>

        {/* whileInView={{opacity:1,x:0}} className='rounded-lg py-3 px-2 bg-[#021927a0] my-6'> */}
            <h4 className='text-md text-gray-300 my-3'>october 2023</h4>
            <p className='text-lg text-gray-300'>the website was create to help the beginner to get some knowledge with html,css and javascript.</p>
        </motion.div>
        <motion.div
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}} className='rounded-lg py-3 px-2 bg-[#021927a0] my-6'>

<h3 className='text-xl text-white capitalized'>Built a <span className='text-[#e80b24]'>AnasDev</span> Institute</h3>      
      <h4 className='text-md  text-gray-300 my-3'>November 2023</h4>
            <p className='text-lg text-gray-300'>The website is created to teach user with programming and data analyst course and certified with it.</p>
        </motion.div>
      </div>
        <h2 className='text-xl text-white'>Read more <FontAwesomeIcon icon={faArrowRight} className='mt-2'/></h2>
      </div>
      {/* +______________________________ our peojwct +____________________+++++++++++++++++++++++++++++==== */}
      <hr/>
      <div className='my-20'>
      <h2 className='text-2xl font-bold text-white'>Latest project</h2>
      <p className='text-white text-xl my-2'>Click on these picture to enter the website .</p>
      {/* _++++++++++++++++++ the first latest project_++++++++++++++++++++++++++++ */}
      <div className='lg:flex mt-10'>
       <Link className='lg:w-[65%]' to="https://kal1be.github.io/toukra-project">

       <div className='border p-4  lg:me-2' id='element'>
<img src='/toukra1.png' className='h-[35vh] w-full'/>
<h4 className='text-lg text-[#e80b24] my-3 px-1'>Septembre 2023</h4>
<p className='text-md my-2 text-white px-1'>The university website was created in the objectif to help the foreign
 to know more about the university and know about their program and discuss with the school stuff for more about their service.</p>
       </div></Link>
       <Link className='lg:w-[65%]' to="https://kal1be.github.io/devtechnology">

<div className='border p-4  lg:me-2' id='element'>
<img src='/devtech.png' className='h-[35vh] w-full'/>
<h4 className='text-lg text-[#e80b24] my-3 px-1'>March 2024</h4>
<p className='text-md my-2 text-white px-1'>DevTechnology is one of my company build for creating cutting-edge service web,networking,LMS platform,E-Commerce and since created and stabilish in 2018,we have almost 300 users in two different country .</p>
</div></Link>
   
      </div>
      {/* +____________________=++++++++++++++++++++ the second latest project+_______________________________+++++++++++++++++ */}
      <div className='lg:flex mt-10'>
      <Link className='lg:w-[65%]' to="https://distance-learning-blog.onrender.com">
     <div className='border p-4  lg:ms-2 lg:mt-0 mt-4'  id='element'>
       <motion.img 
      src='/distance.png' className='h-[35vh] w-full'/>
       <h4 className='text-lg text-[#e80b24] px-1 my-3'>Mars 2024</h4>
       <p className='text-md my-2 text-white px-1'>Distance Learning blog is a plateform to address real-world issues,enabling students and members of faculty to create and share diverse including blogs.</p>
       </div></Link>
     <Link className='lg:w-[65%]' to="https://learn-online-course.onrender.com/">
     <div className='border p-4  lg:ms-2 lg:mt-0 mt-4'  id='element'>
       <motion.img 
      src='/webdocs.png' className='h-[35vh] w-full'/>
       <h4 className='text-lg text-[#e80b24] px-1 my-3'>september 2024</h4>
       <p className='text-md my-2 text-white px-1'>WebDocs is an online platform  build for teaching basics of programing such as HTML,CSS3,JavaScript ! and the new version of the software will out !</p>
       </div></Link>
      </div>
    
      <h2 className='text-xl my-8 text-white'>View more <FontAwesomeIcon icon={faArrowRight} className='mt-2'/></h2>
      </div>
    </div>
  )
}

export default Build
