

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


import './Portfolio.css'

const projects = [
  {
    id: 1,
    image: IMG1,
    title: "project 1",
    github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id: 2,
    image: IMG2,
    title: "project 2",
    github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id: 3,
    image: IMG3,
    title: "project 3",
    github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id: 4,
    image: IMG4,
    title: "project 4",
    github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id: 5,
    image: IMG5,
    title: "project 5",
    github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id: 6,
    image: IMG6,
    title: "project 6",
    github: "https://github.com",
    demo: "https://github.com"
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
{/* 
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      > */}
        {
          projects.map((project)=>{
            return( 
              // <SwiperSlide>
                <article className="portfolio__item" key={project.id}>
                  <div className="portfolio__item-image">
                    <img src={project.image} alt="project" />
                  </div>
                
                  <h3>{project.title}</h3>
        
                  <div className='portfolio__item-cta'>
                    <a href={project.github} target='blank' className='btn' >GitHub</a>
                    <a href={project.demo} target='blank' className='btn btn-primary'> Live Demo </a>
                  </div>         
                </article>
              // </SwiperSlide> 
            )
          })
        }
        {/* </Swiper> */}


       

        
      </div>
        
    </section>
  )
}

export default Portfolio