import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">

        {/* FRONTEND */}
        <div className="experience__frontend">
          <h3>Frontend Development </h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>HTML</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>CSS</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>JavaScript</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Tailwind</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>React Js</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* BACKEND */}
        <div className="experience__backend">
        <h3>Backend Development </h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Node Js</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Express Js</h4>
                <small>Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>MongoDb</h4>
                <small>Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>SQL</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>REST API</h4>
                <small>Beginner</small>
              </div>
          </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience