import React from 'react'
import{BsLinkedin, BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkdin.com" taget='blank'> <BsLinkedin/> </a>
        <a href="https://github.com" target='blank'> <BsGithub/> </a>

    </div>
  )
}

export default HeaderSocials