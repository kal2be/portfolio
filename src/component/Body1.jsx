import { motion } from "framer-motion"
import "./build.scss"
function Body1() {
    return (
      <div className="lg:flex justify-between px-2 relative mt-20 items-center">
       <div>
          <motion.img
          whileHover={{scale:1}}
          initial={{rotate:2,opacity:0,scale:.2}} transition={{duration:2}} animate={{rotate:360,opacity:1,scale:.9}}
 src="/kal.png" className="my-image h-full w-full mt-8 lg:mt-0"/>

        </div>
      <div className="px-4 my-2">
           <h2 className="font-bold text-xl text-white my-1">Yahoulbo Felix </h2>
      <p className="text-xl font-medium text-gray-500">Software Engineer</p>
      </div>
  <div className="my-2 p-4 max-h-96 overflow-y-auto shadow-sm">
     
      <p className="lg:pe-5 text-gray-300 text-md my-2">
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
  
      </div>
    )
  }
  
  export default Body1