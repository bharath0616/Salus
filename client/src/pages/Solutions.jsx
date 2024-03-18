import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Solutions() {
  useEffect(() => {
    AOS.init({ duration: 1000 })},[]);
  return (
    <div className='mr-32 ml-32' >
    <div className='mt-28 border-transparent p-10 bg-black rounded-2xl ml-80 mr-80 glass1-ui'>
      <div className='flex gap-2 justify-around align-middle '>
        <div className='flex flex-col gap-4 justify-center align-middle'>
          <div data-aos="fade-right" className='p-8 border-transparent bg-gray-900 rounded-2xl
          transition-all duration-300 delay-50 hover:border-gray-500 hover:bg-purple-950 '>
          <h className="text-slate-200 ">Video Analysis.</h>
          </div>
          <div data-aos="fade-right"   className='p-8 border-transparent bg-gray-900 rounded-2xl transition-all duration-300 delay-50 hover:border-gray-500 hover:bg-purple-950 '>
          <h className="text-slate-200 ">Real-Time Monitoring.</h>
          </div>
          <div data-aos="fade-right" className='p-8 border-transparent bg-gray-900 rounded-2xl transition-all duration-300 delay-50 hover:border-gray-500 hover:bg-purple-950 '> 
          <h className="text-slate-200 ">Risk tracking.</h>
          </div>
          <div data-aos="fade-right" className='p-8 border-transparent bg-gray-900 rounded-2xl transition-all duration-300 delay-50 hover:border-gray-500 hover:bg-purple-950 '>
          <h className="text-slate-200 ">Comprehensive Coverage.</h>
          </div>
          <div data-aos="fade-right" className='p-8 border-transparent bg-gray-900 rounded-2xl transition-all duration-300 delay-50 hover:border-gray-500 hover:bg-purple-950 '>
          <h className="text-slate-200 ">Customizable Alerts.</h>
          </div>
          <div data-aos="fade-right" className='p-8 border-transparent bg-gray-900 rounded-2xl transition-all duration-300 delay-50 hover:border-gray-500 hover:bg-purple-950 '>
          <h className="text-slate-200 ">Multi-camera Support.</h>
          </div>
          
        
        </div>
        <div  className='flex flex-col gap-4 justify-center align-middle'>
        <div data-aos="fade-left" className='p-8 border-transparent bg-gray-900 rounded-2xl transition-all duration-300 delay-50 hover:border-gray-500 hover:bg-purple-950 '>
          <h className="text-slate-200">Historical Analysis.</h>
          </div>
        <div data-aos="fade-left" className='p-8 border-transparent bg-gray-900 rounded-2xl transition-all duration-300 delay-50 hover:border-gray-500 hover:bg-purple-950 ' >
          <h className="text-slate-200">User Friendly Interface.</h>
          </div>
        <div data-aos="fade-left" className='p-8 border-transparent bg-gray-900 rounded-2xl transition-all duration-300 delay-50 hover:border-gray-500 hover:bg-purple-950 '>
          <h className="text-slate-200">Scalable Solutions.</h>
          </div>
        <div data-aos="fade-left" className='p-8 border-transparent bg-gray-900 rounded-2xl transition-all duration-300 delay-50 hover:border-gray-500 hover:bg-purple-950 '>
          <h className="text-slate-200">Cloud based Storage.</h>
          </div>
        <div data-aos="fade-left" className='p-8 border-transparent bg-gray-900 rounded-2xl transition-all duration-300 delay-50 hover:border-gray-500 hover:bg-purple-950 '>
          <h className="text-slate-200">Remote Access.</h>
          </div>
        <div data-aos="fade-left"className='p-8 border-transparent bg-gray-900 rounded-2xl transition-all duration-300 delay-50 hover:border-gray-500 hover:bg-purple-950 '>
          <h className="text-slate-200">Compliance Ready.</h>
          </div>
          
        </div>
      </div>
    </div>
</div>
  
  )
}
