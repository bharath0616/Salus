import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const solutionData = [
  { aosAnimation: "fade-right", title: "Video Analysis", description: "Detailed video analysis for enhanced surveillance." },
  { aosAnimation: "fade-right", title: "Real-Time Monitoring", description: "Monitor environments in real-time with state-of-the-art technology." },
  { aosAnimation: "fade-right", title: "Risk Tracking", description: "Track and analyze risks efficiently with advanced algorithms." },
  { aosAnimation: "fade-right", title: "Comprehensive Coverage", description: "Full coverage ensuring no blind spots in surveillance." },
  { aosAnimation: "fade-left", title: "Customizable Alerts", description: "Get customized alerts for different security situations." },
  { aosAnimation: "fade-left", title: "Multi-camera Support", description: "Support for multiple cameras to maximize monitoring capability." },
  { title: "Historical Analysis", description: "Analyze past footage to improve future security measures." },
  {  title: "User Friendly Interface", description: "Easy to use interface for all levels of technical skill." },
  {  title: "Scalable Solutions", description: "Solutions that grow with your security needs." },
  {  title: "Cloud based Storage", description: "Secure and scalable cloud storage for footage." },
  { title: "Remote Access", description: "Access your surveillance system from anywhere, anytime." },
  { title: "Compliance Ready", description: "Ensure compliance with local and international security standards." }
];

const SolutionItem = ({ aosAnimation, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-aos={aosAnimation}
      className='relative flex items-center bg-gray-900 rounded-2xl overflow-hidden'
      style={{ height: '150px', margin: '10px 0', width: '48%' }} // Adjust width for two columns
    >
      <div className='p-8 w-full h-full flex justify-between items-center transition-all duration-300'>
        <h2 className={`text-slate-200 flex-shrink-0 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
          {title}
        </h2>
        <div className={`flex-grow transition-all duration-300 ${isHovered ? 'ml-4' : 'ml-0'}`} />
        <p className={`text-slate-200 absolute right-0 p-4 w-full h-full flex items-center justify-center transition-transform duration-300 ${isHovered ? 'translate-x-0' : 'translate-x-full'}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default function Solutions() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
   
    <div className='flex justify-center items-center w-full mt-24 oer'>
    
      <div className='p-10 bg-black rounded-2xl glass1-ui' style={{ maxWidth: '1200px', width: '100%' }}>
        <div className='flex flex-wrap font-bold justify-around items-center' style={{ gap: '20px' }}>
          {solutionData.map((item, index) => (
            <SolutionItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
