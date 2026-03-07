import "./navbar.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faBars, faChevronRight, faClose } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { Link } from "react-router-dom"
function Navbar() {
  const [open,setOpen]=useState(false)
  return (
   <div className="flex justify-center">
    <div className="fixed z-50 top-3 shadow-sm">
     <div className="wrapper flex justify-between items-center rounded-lg">
      <div className="">

        <h2 className=" font-bold text-xl" id="felix">Yahoulbo Felix</h2>
      </div>
      <div>
        <ul className="md:flex gap-12 justify-between text-sm" id={open?"open":"close"}>

        <FontAwesomeIcon icon={faClose} className="absolute right-4 bg-white p-2 text-[#0e4465]" onClick={()=>{
          setOpen(!open)
        }} id="toclo"/>
            <li  className="" onClick={()=>setOpen(!open)}><Link to="/">Home</Link></li>
            <li  className="" onClick={()=>{
              setOpen(!open)
            }}><Link to="/about">About</Link> <FontAwesomeIcon icon={faChevronRight} className="text-sm" id="icon-none"/></li>
            <li  className="" onClick={()=>{
              setOpen(!open)
            }}>
              <Link to="/contact">Contact</Link><FontAwesomeIcon icon={faChevronRight} className="text-sm" id="icon-none"/></li>
            <li  className="" onClick={()=>{
              setOpen(!open)

            }}><Link to="/service">Services</Link><FontAwesomeIcon icon={faChevronRight} className="text-sm" id="icon-none"/></li>
{/* <li><Link to="/service">Service</Link><FontAwesomeIcon icon={faChevronRight} className="text-sm" id="icon-none"/></li> */}


        </ul>
        <h4 className="my-btn text-2xl" onClick={()=>{
          setOpen(!open)

        }}><FontAwesomeIcon icon={faBars}/></h4>
{/* <h4><FontAwesomeIcon icon={faBars} /></h4> */}

      </div>
    </div>
   </div>
   </div>
  )
}

export default Navbar
