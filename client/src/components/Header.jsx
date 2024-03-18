// eslint-disable-next-line no-unused-vars
import React from 'react'
import { NavLink } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useEffect, useState } from 'react';
import bg1 from  '../assets/sign/salus_logo.png'
export default function Header() {
  const {currentUser}= useSelector(state=>state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
   <header className='bg-transparent  absolute top-0 left-0 w-full'>
   <div className='flex justify-between items-center max-w-6xl mx-auto '>
   <div className='flex '>
   <Link to="/">
  <img src={bg1} alt="Logo" className="h-20 w-25 " /> 
</Link>
<Link to='/' className='flex items-center'>
    <h1 className='font-bold absolute sm:text-2xl flex flex-wrap cursor-pointer'>
      <span className='text-slate-100'>Sal</span>
      <span className='text-slate-400'>us</span>
    </h1>
    </Link>
</div>

  
    <ul className='flex gap-4 '>
    <Link to='/'>
       <li className='hidden sm:inline text-lg text-gray-400 hover:text-xl hover:text-white cursor-pointer'>
         Home
       </li>
    </Link>
   {/*  <Link to='about'>
       <li className='hidden sm:inline text-gray-700 hover:text-black cursor-pointer'>
         About
       </li>
    </Link> */}
 
   

    <Link to='solutions'>
    {currentUser ? (
      <li className='hidden sm:inline text-lg text-gray-400 hover:text-xl hover:text-white cursor-pointer'>
         Solutions
       </li>
    ):
     <li className=' text-gray-100 text-lg hover:text-black cursor-pointer'>
    
  </li>
    }  
    </Link>

    <Link to='alerts'>
    {currentUser ? (
      <li className='hidden sm:inline text-lg text-gray-400 hover:text-xl hover:text-white cursor-pointer'>
      Alert
       </li>
    ):
     <li className=' text-gray-100 text-lg hover:text-black cursor-pointer'>
    
  </li>
    }  
    </Link>
    <Link to='profile'>
    {currentUser ? (
        <img src={currentUser.avatar} alt='profile' className='rounded-full h-8 w-8 mb-4 object-cover' />
    ):
     <li className='hidden sm:inline text-lg text-gray-400 hover:text-xl hover:text-white cursor-pointer'>
    Sign In
  </li>
    }  
    </Link>
    </ul>
    </div>
   </header>
  )
}
