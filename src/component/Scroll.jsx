import { useState } from "react"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import {faWhatsapp } from "@fortawesome/free-brands-svg-icons"
function Scroll() {
    const [visible,setVisible] = useState(false)
    const toggleVisible = () => { 
        const scrolled = document.documentElement.scrollTop; 
        if (scrolled > 300){ 
          setVisible(true) 
        }  
        else if (scrolled <= 300){ 
          setVisible(false) 
        } 
      }; 
      
      const scrollToTop = () =>{ 
        window.scrollTo({ 
          top: 0,  
          behavior: 'smooth'
          /* you can also use 'auto' behaviour 
             in place of 'smooth' */
        }); 
      }; 
      
      window.addEventListener('scroll', toggleVisible); 
  return (
    <div>
      <p style={{display: visible ? 'inline' : 'none'}} className="fixed bottom-16 md:right-6 right-4 py-2 px-3 text-white">
        <a href="https://wa.me/+2349132021995" className="block relative z-50 cursor-pointer"  target='_blank ' rel='noopener noreferrer'>  <FontAwesomeIcon icon={faWhatsapp} className="text-green-700 text-2xl"/></a>
        </p>
       <p onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} className="fixed bg-[#021927a0] bottom-4 md:right-6 right-4 py-2 px-3 text-white">
        <FontAwesomeIcon icon={faChevronUp}/>
        </p>
    </div>
  )
}

export default Scroll