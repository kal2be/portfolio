import React from 'react'
import Footer from '../footer/Footer'
import {motion} from "framer-motion"
function About() {
  return (
  <>
   <div className='wrap mt-24 text-white overflow-hidden relative'>
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

{/* <h2 className='md:text-lg font-medium my-2 opacity-55 text-lg '>About my-Self
</h2>
<div className='my-2 text-lg'>
    <p>Hello my name is <span className='text-[#e80b24]'>Yahoulbo Felix</span>,i'm a software developer,student,self motivator,programmer.</p>
    <br />
    <p>As i say,i'm a hard-worker and my ability to learn fast help me alot for entirely my life.</p>
</div>
<div className='text-lg my-4'>

    <h3 className='text-lg font-bold opacity-75 text-[#e80b24]'>About my current work</h3>
    <p>As a developper,i'm currently seeking for a junior Developer opportunity to further enhance skills in 
      HTML,CSS3, JavaScript, React.js(Next.js), TypeScript, Node.js and MongoDb while gained practical experience in a professional environment!</p>
</div> */}
  <section
      id="about"
      className=" py-12 bg-[#011c2d]  text-white overflow-hidden"
    >
      {/* Animated background glow */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={{ x: [0, 100, -100, 0], y: [0, 50, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="w-[500px] h-[500px] bg-blue-900 blur-[180px] absolute -top-40 -left-40"
        />

        <motion.div
          animate={{ x: [0, -120, 80, 0], y: [0, -50, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="w-[500px] h-[500px] bg-[#011c2d]  blur-[180px] absolute bottom-0 right-0"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
             <img src="/felx.jpg" className='w-24 border my-2 h-24 rounded-full' alt="" />
          <h2 className="lg:text-2xl text-xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            I am a developer and quantitative researcher focused on building
            intelligent systems for finance, trading, and scalable software
            platforms. My work combines software engineering, artificial
            intelligence, and quantitative modeling to create powerful tools
            for data-driven decision making.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            I specialize in building modern web applications, algorithmic
            trading systems, AI-powered analytics platforms, and distributed
            backend systems. My goal is to engineer technology that solves
            complex problems and delivers real-world impact.
          </p>

          <p className="text-gray-400 leading-relaxed">
            I actively work on trading infrastructure, quantitative strategy
            research, and intelligent financial systems that integrate machine
            learning with market data analysis.
          </p>
        </motion.div>

        {/* Right Side Skills Cards */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-6"
        >

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-400 text-sm">
              React, Node.js, Supabase, API systems, SaaS platforms.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">AI Engineering</h3>
            <p className="text-gray-400 text-sm">
              Machine learning models, neural networks, predictive systems.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Elixir Systems</h3>
            <p className="text-gray-400 text-sm">
              Distributed systems, real-time backend, BEAM ecosystem.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Quant Trading</h3>
            <p className="text-gray-400 text-sm">
              Statistical models, trading algorithms, market research.
            </p>
          </div>

        </motion.div>

      </div>
    </section>

<div className='px-3'>
<h3 className='lg:text-2xl text-lg opacity-75 my-5 text-gray-200'>Download my CV here!</h3>

<a className='bg-[#021927a0] border rounded-xl text-gray-400 py-2 px-3 my-2' href="/yahoulbo-portfolio/dev-felix.pdf" download>Download CV</a>
</div>
<div className='mt-8'>
<Footer/>
</div>
</div>
</> 
  )
}

export default About
