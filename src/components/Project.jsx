import React from 'react'
import './Project.css'
import adventure1 from '../assets/img/adventure1.jpg'
import adventure2 from '../assets/img/adventure2.jpg'
import adventure3 from '../assets/img/adventure3.jpg'

const Project = () => {
  return (
    <div className='project component__space' id='Project'>
      <div className='heading'>
        <h1 className="heading">Last Adventures</h1>
        <p className="heading p__color">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        <p className="heading p__color">But they are better in real life!
        </p>
      </div>
      <div className="container">
        <div className="row">

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">

                <div className="project__img__box">
                  <img src={adventure1} alt="" className="project__img" />

                </div>
                <div className="mask__effect"></div>
                <div className="project__meta absolute">
                  <h5 className="project__text">TeamWork</h5>
                  <h4 className="project__text">Big show at the table</h4>
                </div>

              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">

                <div className="project__img__box">
                  <img src={adventure2} alt="" className="project__img" />

                </div>
                <div className="mask__effect"></div>
                <div className="project__meta absolute">
                  <h5 className="project__text">Summer</h5>
                  <h4 className="project__text">International fienrdship</h4>
                </div>

              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">

                <div className="project__img__box">
                  <img src={adventure3} alt="" className="project__img" />

                </div>
                <div className="mask__effect"></div>
                <div className="project__meta absolute">
                  <h5 className="project__text">Nature</h5>
                  <h4 className="project__text">Language and Nature</h4>
                </div>

              </div>
            </div>
          </div>

          <div className="view__more__btn d__flex align__items_center justify__content_center pxy__30">
            <button className='view__more pointer btn'>View More</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Project