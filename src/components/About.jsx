import React from "react";
import aboutimg from "../assets/about.jpg";
import {ABOUT_TEXT} from "../constants/index.js";
import { FaGithub} from "react-icons/fa";

const About = () =>{
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className=" my-20 text-center text-4xl font-light">About  <span className=" text-neutral-600">Me</span></h2>

             <div className="flex flex-wrap">
                <div className="w-full flex items-center justify-center lg:w-1/2 lg:items-start">
                    <img className="rounded-2xl" src={aboutimg} alt="" />
                </div>


                <div className="w-full my-2 lg:px-10 text-md text-justify flex flex-col items-center gap-4 lg:w-1/2 lg:items-start ">
                     <p className="">{ABOUT_TEXT}</p>
                      <a href="https://github.com/Naveen3452"><button  className=" flex items-center gap-3 px-4 py-2 bg-slate-700 rounded-lg hover:bg-slate-900 ">
                                        Github  <span><FaGithub/></span>
                       </button></a>
                </div>

            </div>

        </div>
    )
}

export default About;