import { motion } from "framer-motion"
import "./build.scss"
function Body() {
  return (
    <div className="w-full flex relative mt-36 items-center">
   
<motion.div className="w-[800px]"
initial={{opacity:0,y:20}}
transition={{duration:1}}
whileInView={{opacity:1,y:0}}>

    <h2 className="text-xl text-white my-1 mx-2">Yahoulbo Felix</h2>
    <p className="text-md text-gray-300 mx-2">Software Engineer</p>
   <div className="p-4 shadow-sm max-h-80 overflow-y-auto scroll-m-3 my-2">
     <p className="my-p lg:pe-7 text-gray-300 text-lg my-1 font-sans  ">
    Hi, I’m Yahoulbo Felix, a highly motivated Computer Scientist and Software Engineer with a passion for creating fast, responsive, and visually engaging web experiences.

I specialize in building modern web applications using React.js, Next.js, TypeScript, Node.js, and MongoDB, combining clean design with solid engineering principles to deliver smooth and scalable solutions.

My curiosity extends beyond the frontend: I’ve developed a facial recognition system using Python, built backend services in Elixir, and engineered MQL5 trading automation systems for financial analysis and AI-driven decision making.

I love solving complex problems, experimenting with new technologies, and transforming ideas into reliable, high-impact software products. When I’m not coding, I’m usually exploring AI innovations, optimizing trading algorithms, or refining user experiences.
</p>
   </div>
</motion.div>
  <div className="">
        <motion.img 
whileHover={{scale:1}}
initial={{rotate:2,opacity:0,scale:1}} transition={{duration:2}} animate={{rotate:360,opacity:1,scale:1}}
 src="/yahoulbo-portfolio/kal.png" className="my-image h-96 object-cover max-h-96 max-w-96 w-full lg:mt-0"/>

      </div>
     
    </div>
  )
}

export default Body
