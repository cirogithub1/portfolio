import React from 'react'
import './About.css'
import aboutImg from '../assets/img/about.jpg'
import { BsChevronDoubleUp } from "react-icons/bs"
import { useEffect } from 'react'

const About = () => {
  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 100) {
        document.querySelector('.bottom__to__top').classList.add('active')
        } else {
        document.querySelector('.bottom__to__top').classList.remove('active')
      }
    }

    document.addEventListener('scroll', listener)
    
    return () => {
      document.removeEventListener('scroll', listener)
    }
  }, [])

  return (
    <div className='about component__space' id='About'>
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">
              About Me
            </h1>
            <div className="about__meta">
              <p className="about__text p__color">
                More than one thousend students satisfied
              </p>
              <p className="about__text p__color">
                Number one in total inmersion courses
              </p>
              <p className="about__text p__color">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sit facere eveniet saepe aspernatur porro voluptatum! Et quo animi necessitatibus neque, maiores autem vel, rem, expedita a quia inventore. Ipsum?
              </p>
              <div className="about__button d__flex align__items__center" >
                <a href="/#">
                  <button className='about btn pointer'>My CV
                  </button>
                  <button className='about btn pointer'>Contact Me
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BTN TO GO TOP PAGE */}
      <div className="up__to__top__btn">
        <a href="/#" className='bottom__to__top'>
          <BsChevronDoubleUp />
        </a>
      </div>
    </div>
  )
}

export default About