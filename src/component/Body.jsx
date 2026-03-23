import { motion } from "framer-motion"
import "./build.scss"
function Body() {
  return (
    <div className="w-full flex relative mt-36 items-center">
   
<motion.div className="w-[800px]"
initial={{opacity:0,y:20}}
transition={{duration:1}}
whileInView={{opacity:1,y:0}}>

    <h2 className="text-xl text-white my-1 mx-3">Yahoulbo Felix</h2>
    <p className="text-md text-gray-300 mx-3">Software Engineer</p>
   <div className="p-4 shadow-sm max-h-80 overflow-y-auto scroll-m-3 my-2">
     <p className="my-p lg:pe-1 text-gray-300 text-lg my-1 font-sans  ">
   Hi, I’m Yahoulbo Felix,  I am a software developer and quantitative researcher focused on building
                      intelligent systems for finance, trading, and scalable software
                      platforms. My work combines software engineering, artificial
                      intelligence, and quantitative modeling to create powerful tools
                      for data-driven decision making.
                        I specialize in building modern web applications, algorithmic
                                  trading systems, AI-powered analytics platforms, and distributed
                                  backend systems. My goal is to engineer technology that solves
                                  complex problems and delivers real-world impact.
                                    I actively work on trading infrastructure, quantitative strategy
                                              research,automated system, and intelligent financial systems that integrate machine
                                              learning with market data analysis.
</p>
   </div>
</motion.div>
  <div className="">
        <motion.img 
whileHover={{scale:1}}
initial={{rotate:2,opacity:0,scale:1}} transition={{duration:2}} animate={{rotate:360,opacity:1,scale:1}}
 src="/kal.png" className="my-image h-96 object-cover max-h-96 max-w-96 w-full lg:mt-0"/>

      </div>
     
    </div>
  )
}

export default Body
