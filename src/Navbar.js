import React, { useEffect } from 'react'
import './navbar.css'
import axios from "axios";
import { Link } from 'react-router-dom'
import { BiTask } from 'react-icons/bi';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { BsCalculator } from 'react-icons/bs';



function Navbar() {

  useEffect(() => {
    const response = axios.get('https://picsum.photos/id/77/info');
    console.log(response);
  }, [])

  return (

    <header className='navbar'>

      <Link to='/' className='links'>
        <BiTask />
        Task</Link>
      <Link to='/page' className='links'>
        <TiWeatherPartlySunny />
        Weather</Link>
      <Link to='/calculator' className='links'>
        <BsCalculator />
        Calculator</Link>
       

    </header>
  )
}


export default Navbar