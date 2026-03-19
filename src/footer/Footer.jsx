import { faGithub, faLinkedin, faSpotify, faWhatsapp, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import "../navbar/navbar.scss"
function Footer() {
  const date = new Date().getFullYear()
  return (
    <div>
    <div className="bg-black py-1 px-2 rounded-xl flex items-center" id="myborder">
    <FontAwesomeIcon icon={faSpotify} className="text-green-500 text-3xl"/>
    <div className="text-white mx-3 ">
    <h2>Am listening</h2>
    <span className="text-gray-400 ">Spotify <span className="text-green-300">Premium</span></span>
    </div>
    </div>
    <div className="text-white md:flex justify-between items-center lg:flex my-6">
    <div className="md:w-96 w-full">
        <h2 className=" font-bold text-md w-36" id="felixe">Professional
        </h2>
        <h3 className="text-gray-400 pe-16 py-1 ">Hi, i`m kalibe felix, a <b>software engineer</b> who loves intuitive, clean and modern software from user interface to cutting edge technology</h3>
    </div>
    <div className="md:flex justify-around w-full items-center">
        <div className="me-6">
     <h3 className="text-md font-medium underline">Check about my work</h3>
    <h3  className="text-gray-400 md:py-2 py-1">1- Accessibility</h3>
     <h3 className="text-gray-400 md:py-2 py-1">2- My Blog</h3>
     <h3 className="text-gray-400 md:py-2 py-1">3- My Project</h3>
  
        </div>
        <div className="md:ms-6 my-2">
     <h3 className="text-md font-medium underline">What is my service</h3>
     <h3 className="text-gray-400 md:py-2 py-1">1- Quantitative Research</h3>
     <h3 className="text-gray-400 md:py-2 py-1">2- Web Development</h3>
     <h3 className="text-gray-400 md:py-2 py-1">3- AI Engineering</h3>
    </div>
    </div>
   
   
      </div>
      <hr className="borde my-3"/>
    <hr/>
    <div className="flex justify-between items-center my-6 text-white">
        <p className="flex justify-between items-center gap-2">&copy;{date} <span className="text-[#e80b24]">  <a href="https://kalibegroup.lovable.app" className="block relative z-50 cursor-pointer">Kalibe Group Inc</a></span> </p>
        <div className="flex gap-3 justify-between text-xl">
          <a href="https://wa.me/+2349132021995" className="block relative z-50 cursor-pointer">  <FontAwesomeIcon icon={faWhatsapp} className="text-green-600"/></a>
            <a href="https://github.com/kal1be" className="block relative z-50 cursor-pointer"><FontAwesomeIcon icon={faGithub}/></a>
           <Link> <FontAwesomeIcon icon={faXTwitter} className="text-black"/></Link>
          <Link>  <FontAwesomeIcon icon={faLinkedin} className="text-blue-900"/></Link>
        </div>
    </div>
    </div>
  )
}

export default Footer
