import React from 'react'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import WeatherDetails from './components/weatherDetails/WeatherDetails'
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from './components/about/About';
import Contact from './components/contact/Contact';



const App = () => {
  return (
    <>
    <Navbar/>
    <WeatherDetails/>
    
    <About/>
    <Contact/>
    <Footer/>
    <ToastContainer autoClose={3000} theme="colored" newestOnTop={true} />
    </>
  )
}

export default App