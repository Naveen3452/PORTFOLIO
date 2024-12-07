import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";



const Technologies = () => {
  return (
    <div className='border-b border-neutral-900 pb-24'>
        <h1 className=' my-20 text-center text-4xl font-light'>Technologies</h1>

        <div className='flex flex-wrap items-center justify-center gap-4'>
            < div className=' rounded-2xl border-4 border-neutral-800 p-4'>
                 <RiReactjsLine className=' text-5xl text-cyan-400'/>
            </div>

            <div className=' rounded-2xl border-4 border-neutral-800 p-4'>
                 <RiTailwindCssFill className=' text-5xl text-cyan-400'/>
            </div>

            <div className=' rounded-2xl border-4 border-neutral-800 p-4'>
                 <IoLogoJavascript  className=' text-5xl text-yellow-400'/>
            </div>
            
            <div className=' rounded-2xl border-4 border-neutral-800 p-4'>
                 <FaNode className=' text-5xl text-green-400'/>
            </div>
            
            <div className=' rounded-2xl border-4 border-neutral-800 p-4'>
                 <FaJava className=' text-5xl text-orange-400'/>
            </div>
           
            <div className=' rounded-2xl border-4 border-neutral-800 p-4'>
                 <SiMysql className=' text-5xl text-blue-700'/>
            </div>
            
        </div>

    </div>
  )
}

export default Technologies