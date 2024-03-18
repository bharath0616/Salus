import React from "react";
import img from '../assets/logo.png'
export default function Home() {
  return (
    <div className="mt-24 mr-6 ml-6">
      <div className="flex gap-8 justify-center align-middle">
        <div className="p-12">
        <h className='text-slate-200'>
          Welcome to SALUS !
        </h>
        </div >
        <img src={img}></img>
        <div className="p-12">

        </div>
      </div>
    </div>
  )
}

