import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import WeatherDetail from './components/WeatherDetail'
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from './components/About';
import Contact from './components/Contact';



const App = () => {
  return (
    <>
    <Navbar/>
    <WeatherDetail/>
    
    <About/>
    <Contact/>
    <Footer/>
    <ToastContainer autoClose={3000} theme="colored" newestOnTop={true} />
    </>
  )
}

export default App