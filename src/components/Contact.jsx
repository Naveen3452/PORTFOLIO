import React from 'react';
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";


const Contact = () => {
  return (
    <div className='text-center mb-10 '>
        <h2 className='my-8 text-center text-4xl font-light'>Contact </h2>

        <div className='flex flex-col items-center justify-center gap-2'>
        <h5 className='flex gap-3 items-center '><span className='text-neutral-400'>Email :</span> <a href="naveenofficial288@gmail.com">naveenofficial@gmail.com</a> <a href=""><SiGmail className='text-red-500'/></a></h5>
        <h5 className='flex gap-3 items-center'><span className='text-neutral-400'>Linkedin :</span> <a href="https://www.linkedin.com/in/naveen-k-learner?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Naveen K</a> <a href="https://www.linkedin.com/in/naveen-k-learner?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin className='text-blue-800'/></a></h5>
        </div>
    </div>
  )
}

export default Contact