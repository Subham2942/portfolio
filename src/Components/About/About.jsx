import React from 'react'
import ME from '../../assets/about_me.png'

import {FaUserGraduate, FaBook} from 'react-icons/fa'
import {AiFillProject} from 'react-icons/ai'

import './About.css'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About me " />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaUserGraduate className="about__icons"/>
              <h4>Education</h4>
              <small>B.Tech</small>
              <small>Electrical Engineering</small>
              <small>NIT Rourkela, 2024</small>
            </article>
            <article className="about__card">
              <AiFillProject className="about__icons"/>
              <h4>Projects</h4>
              <small>5 +</small>
              <small>Frontend & backend</small>
            </article>
            <article className="about__card">
              <FaBook className="about__icons"/>
              <h4>Interships</h4>
              <small>None</small>
            </article>
            
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam maiores atque, 
            suscipit temporibus distinctio quibusdam voluptates nemo repellat neque placeat 
            animi dignissimos officia sunt ipsam dicta commodi aliquid accusantium veritatis!
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About