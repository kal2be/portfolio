// import Test from './Test';
import Home from './Home';
import About from './about/About';
import './app.scss'
import Navbar from './navbar/Navbar';
import {useState,useEffect} from "react"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Footer from './footer/Footer';
import Contact from './contact/Contact';
import Blog from './blog/Blog';
import Service from './service/Service';

const App = () => {
  const [isloaded,setIsloaded]=useState(false);
  useEffect(()=>{
      setTimeout(() => {
          setIsloaded(true)
      },4000);
  },[])
  if(!isloaded){
     return(
      <div className='preloader bg-gray-100'>
       <span className='animation1'>D</span>
        <span className='animation2'>E</span>
        <span className='animation3'>V</span>
       </div>
     )
  }
  return( 
   <BrowserRouter>
      <Navbar/>
   <Routes>
  <Route path='/' base element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/blog' element={<Blog/>}/>
  <Route path='/service' element={<Service/>}/>
   </Routes>
   </BrowserRouter>
  )
};

export default App;
