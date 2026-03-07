import { motion } from "framer-motion"
import "./build.scss"
function Body1() {
    return (
      <div className="lg:flex justify-between px-2 relative mt-20 items-center">
       <div>
          <motion.img
          whileHover={{scale:1}}
          initial={{rotate:2,opacity:0,scale:.2}} transition={{duration:2}} animate={{rotate:360,opacity:1,scale:.9}}
 src="/yahoulbo-portfolio/kal.png" className="my-image h-full w-full mt-8 lg:mt-0"/>

        </div>
  <div className="my-4 p-4 max-h-96 overflow-y-auto shadow-sm">
      <h2 className="font-bold text-xl text-white my-1">Yahoulbo Felix </h2>
      <p className="text-xl font-medium text-gray-500">Software Engineer</p>
      <p className="lg:pe-5 text-gray-300 text-md my-2">
      Hi, I’m Yahoulbo Felix, a highly motivated Computer Scientist and Software Engineer with a passion for creating fast, responsive, and visually engaging web experiences.

I specialize in building modern web applications using React.js, Next.js, TypeScript, Node.js, and MongoDB, combining clean design with solid engineering principles to deliver smooth and scalable solutions.

My curiosity extends beyond the frontend: I’ve developed a facial recognition system using Python, built backend services in Elixir, and engineered MQL5 trading automation systems for financial analysis and AI-driven decision making.

I love solving complex problems, experimenting with new technologies, and transforming ideas into reliable, high-impact software products. When I’m not coding, I’m usually exploring AI innovations, optimizing trading algorithms, or refining user experiences.
</p>
  </div>
  
      </div>
    )
  }
  
  export default Body1