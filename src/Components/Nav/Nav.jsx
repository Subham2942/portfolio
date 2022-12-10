import React from "react";
import { FaHome, FaUserAlt, FaBook } from "react-icons/fa";
import { HiCollection } from "react-icons/hi";
import { BsFillChatRightTextFill } from "react-icons/bs";

import "./Nav.css";

import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("home");
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
