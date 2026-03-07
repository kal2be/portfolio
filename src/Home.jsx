import Body from './component/Body';
import Body1 from './component/Body1';
import Build from './component/Build';
import Scroll from './component/Scroll';
import Footer from './footer/Footer';
import { motion } from 'framer-motion';
function Home() {
  return (
    
    <div   className="relative text-white overflow-hidden">
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
       <div className='wrap '>
  <div className='laptop'>
  <Body/>
  </div>
  <div className='phone'>
    <Body1/>
  </div>
  <Build/>
  <Scroll/>
  <Footer/>
   </div>
    </div>
  )
}

export default Home
