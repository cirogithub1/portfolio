import React from 'react'
import './Service.css'
import { HiOutlineViewGridAdd, HiMap, HiOutlineShieldCheck } from 'react-icons/hi'
import { IoIosImages } from 'react-icons/io'

const Service = () => {
  return (
    <div className="service component__space" id='Service'>
      <div className='heading'>
        <h1 className="heading">My Best Services</h1>
        <p className="heading p__color">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto nisi ea vero ipsa eaque accusamus eveniet ratione commodi praesentium  </p>
        <p className="heading p__color">But the majority has suffered alterations</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col__2">
            <div className="service__box pointer">

              <div className="icon">
                <HiOutlineViewGridAdd />
              </div>
              <div className="service__meta">
                <h1 className="service__text">Inmersion Total</h1>
                <p className="service__text p__color">
                  Découvrez l'environnement d'hébergement et sa région.
                </p>
              </div>

            </div>
          </div>

          <div className="col__2">
            <div className="service__box pointer">

              <div className="icon">
                <HiMap />
              </div>
              <div className="service__meta">
                <h1 className="service__text">École d'expérience</h1>
                <p className="service__text p__color">
                  Découverte de la France Excursions culturelles et linguistiques.
                </p>
              </div>

            </div>
          </div>

          <div className="col__2">
            <div className="service__box pointer">

              <div className="icon">
                <IoIosImages />
              </div>
              <div className="service__meta">
                <h1 className="service__text">Album</h1>
                <p className="service__text p__color">
                  stages-vacances por tout le monde.
                </p>
              </div>

            </div>
          </div>

          <div className="col__2">
            <div className="service__box pointer">

              <div className="icon">
                <HiOutlineShieldCheck />
              </div>
              <div className="service__meta">
                <h1 className="service__text">Bons Plans</h1>
                <p className="service__text p__color">
                  Des bons plans adaptés à tous les budgets.
                </p>
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Service