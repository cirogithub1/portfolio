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
                Tones of expirience in total inmersion courses
              </p>
              <p className="about__text p__color">
                Francophone passionnée de langues étrangères, elle peut communiquer librement en anglais, russe, espagnol et allemand. Elle comprend aussi un peu de polonais, d'italien et de langue des signes.
              </p>
              <div className="about__container">
                <div className="row">
                  <div className="about__col__2">
                    <div className="about__box pointer">

                      <div className="about__meta">
                        <h1 className="about__text">Cours de langues adaptés pour les enfants</h1>
                        {/* <p className="about__text about__p__color">
                          Cours de langues adaptés pour les enfants
                        </p> */}
                      </div>

                    </div>
                  </div>

                  <div className="about__col__2">
                    <div className="about__box pointer">

                      <div className="about__meta">
                        <h1 className="about__text">Cours adolescents et adultes (français)</h1>
                        {/* <p className="about__text about__p__color">
                          Découverte de la France Excursions culturelles et linguistiques.
                        </p> */}
                      </div>

                    </div>
                  </div>

                  <div className="about__col__2">
                    <div className="about__box pointer">

                      <div className="about__meta">
                        <h1 className="about__text">Cours pour élèves à besoins pédagogiques particuliers</h1>
                        {/* <p className="about__text about__p__color">
                          stages-vacances por tout le monde.
                        </p> */}
                      </div>

                    </div>
                  </div>

                  <div className="about__col__2">
                    <div className="about__box pointer">

                      <div className="about__meta">
                        <h1 className="about__text">Cours adolescents et adultes (anglais)</h1>
                        {/* <p className="service__text about__p__color">
                          Des bons plans adaptés à tous les budgets.
                        </p> */}
                      </div>

                    </div>
                  </div>

                  <div className="about__col__2">
                    <div className="about__box pointer">

                      <div className="about__meta">
                        <h1 className="about__text">Cours en immersion</h1>
                        {/* <p className="service__text about__p__color">
                          Des bons plans adaptés à tous les budgets.
                        </p> */}
                      </div>

                    </div>
                  </div>

                </div>
              </div>
              <div className="about__button d__flex align__items__center" >
                <a href="/#">
                  <button className='about btn pointer'>My CV</button>
                  <button className='about btn pointer'>Contact Me</button>
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