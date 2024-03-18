import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import OAuth from '../components/OAuth';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bg1 from '../assets/sign/bg-1.png'; // Ensure these paths are correct
import bg2 from '../assets/sign/bg-2.png';

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1000 })});
  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    if (!formData.username || formData.username.length < 5) {
      errors.username = 'Username must be at least 5 characters long.';
      formIsValid = false;
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid.';
      formIsValid = false;
    }

    if (!formData.password || formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long.';
      formIsValid = false;
    }

    setErrors(errors);
    return formIsValid;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setLoading(true);

    // Here you would place your actual sign-up logic, e.g., making an API call
    // For the sake of this example, we'll simulate a successful sign-up process
    setTimeout(() => {
      setLoading(false);
      // navigate('/sign-in'); // Uncomment this to navigate to the sign-in page on success
      console.log('Sign-up successful!', formData);
    }, 2000);
  };

  return (
    <div className='flex min-h-screen gap-7 items-center justify-center bg-cover bg-no-repeat'>
      <div className='flex justify-center mr-16 items-center w-1/2 space-y-4' data-aos="fade-right" >
        <Link to="/">
          <img src={bg1} alt="Background 1" className="" /> 
        </Link>
        <Link to="/">
          <img src={bg2} alt="Background 2" className="" /> 
        </Link>
      </div>
      <div id='form' className='p-6 mt-10 max-w-2xl bg-gray-900 
      bg-opacity-50 backdrop-filter backdrop-blur-lg border-2 border-transparent 
      rounded-xl shadow-2xl transition duration-500 ease-in-out glass-ui
       hover:bg-[#1E1E1E] hover:bg-opacity-80' data-aos="fade-left" >
        <h1 className='text-3xl text-center text-slate-200 font-bold my-8'>Sign Up</h1>
        <form className='flex flex-col gap-5 p-6'>
          <div className='flex relative'>
            <FontAwesomeIcon icon={faUser} className="text-gray-400 h-6 mt-4 ml-3 absolute" />
            <input type="text" placeholder='Username' className='border p-4 shadow-md rounded-lg focus:bg-gray-200 w-full pl-10' id='username' value={formData.username} onChange={handleChange} />
            {errors.username && <p className='text-red-700 text-sm'>{errors.username}</p>}
          </div>

          <div className='flex relative'>
            <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 h-6 mt-4 ml-3 absolute" />
            <input type="email" placeholder='Email' className='border p-4 shadow-md rounded-lg focus:bg-gray-200 w-full pl-10' id='email' value={formData.email} onChange={handleChange} />
            {errors.email && <p className='text-red-700 text-sm'>{errors.email}</p>}
          </div>

          <div className='flex relative'>
            <FontAwesomeIcon icon={faLock} className="text-gray-400 h-6 mt-4 ml-3 absolute" />
            <input type="password" placeholder='Password' className='border p-4 shadow-md rounded-lg focus:bg-gray-200 w-full pl-10' id='password' value={formData.password} onChange={handleChange} />
            {errors.password && <p className='text-red-700 text-sm'>{errors.password}</p>}
          </div>

          <button disabled={loading} className='bg-gray-900 text-white p-2.5 rounded-lg hover:bg-gray-700 disabled:bg-gray-500' onClick={handleSubmit}>
            {loading ? 'LOADING...' : 'SIGN UP'}
          </button>

          <OAuth/>
          
        </form>
        <div className='flex gap-2 mt-3 mb-3 ml-6'> 
          <p className='text-gray-200'>Have an account?</p>
          <Link to={"/sign-in"}>
            <span className='text-blue-800'>Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
