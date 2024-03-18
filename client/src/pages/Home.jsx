import React, { useEffect } from "react";
import robotHand from '../assets/robotHand.jpg'
import robo from '../assets/robo.jpg'
import gol from '../assets/vector.png'
import light from '../assets/light.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import mid from '../assets/mid.png'
import lives from '../assets/lives.png'
import danger from '../assets/danger.png';
import location from '../assets/location.png'
import analytics from '../assets/analytics.png'
import { Link } from "react-router-dom";
import alerts from '../assets/alerts.png'

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000 
    });
  }, []);
  return (
    <div className="mt-20 mr-4  ml-4 overflow-y-hidden" >
      <div className="flex gap-28 mt-16 justify-center align-middle overflow-y-hidden" data-aos="fade-right">
        <div className="mt-20 p-20  mr-10 align-middle justify-center">
        <img src={light} className="w-80 h-80  mb-10 ml-0 mr-80 -z-10 absolute  "data-aos="fade-up"></img>
        <h className='w-3/4 text-slate-200 font-poppins font-semibold text-4xl'>
        <span >Vigilance in every Frame: </span> <br/><br/>
       
        <span className="text-transparent ml-80 text-7xl bg-clip-text bg-gradient-to-r from-[#33bbcf] to-[#def9fa]">SALUS</span>
        </h>
        </div>
        
        <div className="p-16 flex  flex-col relative   overflow-y-hidden">
<div className="flex absolute gap-6 overflow-y-hidden">
        <img src={gol} className="w-7  h-7  mb-10" data-aos="fade-left"></img>
        <img src={gol} className="w-10 h-10 ml-94 mt-60 mb-10" data-aos="fade-left"></img>
        <img src={gol} className="w-8 h-8 ml-80 mt-30 mb-10" data-aos="fade-right"></img>
        </div>
        <img src={robo} className="w-sm h-sm mb-10 " data-aos="fade-down"></img>
        <img src={light} className="w-80 h-80  mb-10 ml-22 -z-10 absolute"data-aos="fade-up"></img>
        <img src={robotHand} className="w-sm h-sm mt-10 absolute"data-aos="fade-up"></img>
        </div>
       
      </div>
     
      <div className="p-10 ml-40 mr-80 border-transparent rounded-lg 
      shadow-5xl bg-gradient-to-b from-slate-600 to-gray-800"
    data-aos="fade-up">
        <p className="text-xl font-sans text-white round-lg">
            Revolutionizing Safety Through Video Analysis. Dive into a world where cutting-edge technology meets proactive risk management. With Salus, every frame tells a story of enhanced security and peace of mind.
        </p> 
</div>

<div className="ml-40 mr-40 mt-20" >
<img src={mid} className="w-full h-full"></img>
</div>

   <div className="flex justify-center items-center mx-10 gap-20 mt-20 mb-20
    border-transparent rounded-xl bg-black p-20
    bg-gradient-to-b from-slate-700 to-gray-900  shadow-5xl" >
     <div className="flex flex-col justify-between space-y-4 max-w-lg ">
        <h2 className="text-slate-200 text-3xl">
          Everything you need by Salus
        </h2>
        
        <p className="text-slate-200 text-md">Salus offers a comprehensive solution for risk management and surveillance, integrating powerful features into one platform. Monitor, analyze, and respond to threats seamlessly with Salus. From tracking unforeseen circumstances to real-time security, it provides peace of mind in one unified platform.</p>
        
        <Link to="/solutions" className='bg-gray-950  bg-opacity-50 text-center
        backdrop-blur hover:bg-gray-700 disabled:bg-gray-500
         text-white p-2.5 rounded-lg shadow-2xl hover:shadow-inner'>
  Solutions
</Link>

     </div>
     
     <div className="flex flex-col gap-4">
        

        <div className="flex items-center gap-3 border-transparent
     hover:bg-gray-950 rounded-lg p-3 transition duration-300 delay-50">
          <img src={analytics} className="w-8 h-8 mb-12 "></img>
          <div>
            <h2 className="text-white font-bold text-xl"> Video Analysis</h2>
            <p className="text-slate-300">Salus employs cutting-edge video analysis technology to enhance surveillance capabilities.</p>
          </div>
        </div>

        <div className="flex items-center gap-3 border-transparent
     hover:bg-gray-950 rounded-lg p-3 transition duration-300 delay-50">
          <img src={location} className="w-8 h-8 mb-16"></img>
          <div>
            <h2 className="text-white font-bold text-xl">Real-Time Monitoring</h2>
            <p className="text-slate-300">With Salus, real-time monitoring is a standard feature, ensuring prompt detection and response to potential threats.</p>
          </div>
        </div>
        <div className="flex items-center gap-3 border-transparent
     hover:bg-gray-950 rounded-lg p-3 transition duration-300 delay-50 ">
          <img src={danger} className="w-8 h-8 mb-16" ></img>
          <div>
            <h2 className="text-white font-bold text-xl">Risk Tracking</h2>
            <p className="text-slate-300">Salus offers robust risk tracking tools, 
            allowing users to identify and mitigate risks effectively throughout 
            their environment.</p>
          </div>
        </div>
     </div>
</div>

<div className="flex justify-around items-center gap-5 ml-10 mr-10 mb-20">
  <div className="flex-1">
    <img src={lives} className="w-3/4 h-auto"></img>
  </div>

  <div className="flex-1">
    <h2 className="text-slate-200 text-3xl mb-4">Enhancing Public Safety</h2>
    <p className="text-slate-200 text-lg">Salus's innovative surveillance tech revolutionizes public safety, saving lives with swift emergency responses and crime prevention. Integrated seamlessly in law enforcement, it detects crime and offers timely assistance, empowering proactive policing for safer streets and improved well-being.</p>
  </div>
</div>

<div className="flex justify-between items-center gap-12 ml-12 mr-1 mb-20">
  <div className="flex-1 overflow-y-hidden">
    <h2 className="text-slate-200 text-3xl mb-4">Efficient Operations: Department Sorting and Alert Analysis in Salus Project</h2>
    <p className="text-slate-200 text-lg mb-6">Salus simplifies surveillance data management with smart sorting and timestamp analysis. Detailed reports empower informed decision-making for enhanced security protocols.</p>
    <Link to="/alerts" className="inline-block w-full md:w-auto px-6 py-2.5 bg-gray-950 bg-opacity-50 text-white text-center backdrop-blur hover:bg-gray-700 disabled:bg-gray-500 rounded-lg shadow-2xl hover:shadow-inner transition duration-300 ease-in-out">
      Alerts
    </Link>
  </div>

  <div className="flex-1">
  <img src={alerts} className="w-3/4 h-auto"></img>
  </div>
</div>



    </div>
  )
}

