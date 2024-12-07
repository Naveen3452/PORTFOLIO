import React from "react";
import {HERO_CONTENT} from "../constants";
import profilepic from "../assets/kevinRushProfile.png";
import { motion } from "framer-motion";


         const container = (delay) => ( {
            hidden: {x:-100, opacity:0},
            visible: {x:0, opacity:1, transition:{duration:0.5 ,delay:delay}}
         })
            
const Hero = () =>{
     

    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35 ">
            <div className="flex flex-wrap ">
                    <div className="w-full lg:w-1/2 ">
                        <div className="flex flex-col items-center lg:px-10 lg:items-start">
                            <motion.h1 
                            variants={container(0)} initial="hidden" animate="visible"
                            className="pb-16 text-4xl font-thin tracking-tight lg:mt-20 lg:text-6xl">NAVEEN K</motion.h1>

                            <motion.span 
                            variants={container(.5)} initial="hidden" animate="visible"
                            className=" bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500  bg-clip-text tracking-tight text-transparent">
                            FULL STACK DEVELOPER</motion.span>

                            <motion.p  
                            variants={container(1)} initial="hidden" animate="visible"
                            className="my-2 py-6 max-w-xl font-light tracking-tight">{HERO_CONTENT}</motion.p >
                        </div>
                       </div>   


                     <div className="w-full lg:w-1/2 ">
                                <div className="flex justify-center " ><motion.img 
                                initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:.5,delay:.5}}
                                src={profilepic} alt="" /></div>
                    </div>
            </div>
        </div>
    )
}

export default Hero;