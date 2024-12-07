import React from "react";
import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const Navbar = () =>{
    return (
      <nav className="mb-10  flex items-center justify-between py-6 lg:px-10">
        <div className="flex flex-shrink-0 items-center text-4xl px-3"> NK</div>
        <div className="m-8 flex items-center justify-center gap-5 text-2xl">
          <a href="https://www.linkedin.com/in/naveen-k-learner?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin/></a>
          <a href="https://github.com/Naveen3452"><FaGithub/></a>
          <FaInstagram/>
          </div>
      </nav>
    )
}

export default Navbar;