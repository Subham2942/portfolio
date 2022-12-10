import React from 'react'
import {FaHome,FaUserAlt,FaBook} from 'react-icons/fa'
import {HiCollection} from 'react-icons/hi'
import {BsFillChatRightTextFill} from 'react-icons/bs'


const Nav = () => {
  return (
    <nav>
      <a href="#"><FaHome/></a>
      <a href="#about"><FaUserAlt/></a>
      <a href="#experience"><FaBook/></a>
      <a href="#portfolio"><HiCollection/></a>
      <a href="#contact"><BsFillChatRightTextFill/></a>
    </nav>
  )
}

export default Nav