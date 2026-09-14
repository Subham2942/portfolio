import React from "react";
import { FaHome, FaUserAlt, FaBook } from "react-icons/fa";
import { HiCollection } from "react-icons/hi";
import { BsFillChatRightTextFill } from "react-icons/bs";
// import { useEffect } from "react";

import "./Nav.css";

import { useState } from "react";



const Nav = () => {
  const [activeNav, setActiveNav] = useState("home");

  /* Currently using normal javascript way to change navbar, since I don't know how to properly use userefs and useEffect */

//   useEffect(() => {
//     const changeNav = ()=>{
//       const scrlPos = window.scrollY;
//       const wHeight = window.innerHeight;
//       if(scrlPos < wHeight )
//       {
//         setActiveNav('home');
//       }
//       else if(scrlPos >= 1.1*wHeight-10 && scrlPos < 2.2*wHeight - 10)
//       {
//         setActiveNav('about');
//       }
//       else if(scrlPos >= 2.2*wHeight-10 && scrlPos < 3.3*wHeight - 10)
//       {
//         setActiveNav('exp');
//       }
//       else if(scrlPos >= 3.3*wHeight-10 && scrlPos < 4.4*wHeight - 10)
//       {
//         setActiveNav('portfolio');
//       }
//       else if(scrlPos >= 4.4*wHeight-10 && scrlPos < 5.5*wHeight)
//       {
//         setActiveNav('contact');
//       }
//     }
      
//     window.addEventListener('scroll', changeNav);
    
//     return () => {
//       window.removeEventListener('scroll', changeNav);
//     }
//   }, []);

  return (
    <nav>
      {/* HOME */}
      <a
        href="#home"
        onClick={() => {
          setActiveNav("home");
        }}
        className={activeNav === "home" ? "active" : ""}
      >
        <FaHome />
      </a>

      {/* ABOUT */}
      <a
        href="#about"
        onClick={() => {
          setActiveNav("about");
        }}
        className={activeNav === "about" ? "active" : ""}
      >
        <FaUserAlt />
      </a>

      {/* EXPERIENCE */}
      <a
        href="#experience"
        onClick={() => {
          setActiveNav("exp");
        }}
        className={activeNav === "exp" ? "active" : ""}
      >
        <FaBook />
      </a>

      {/* PORTFOLIO */}
      <a
        href="#portfolio"
        onClick={() => {
          setActiveNav("portfolio");
        }}
        className={activeNav === "portfolio" ? "active" : ""}
      >
        <HiCollection />
      </a>

      {/* CONTACT */}
      <a
        href="#contact"
        onClick={() => {
          setActiveNav("contact");
        }}
        className={activeNav === "contact" ? "active" : ""}
      >
        <BsFillChatRightTextFill />
      </a>
    </nav>
  );
};

export default Nav;
