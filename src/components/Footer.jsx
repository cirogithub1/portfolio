import React from 'react'
import './Footer.css'
import footerImg from '../assets/img/logo-5.png'

const Footer = () => {
  return (
    <div className="footer d__flex align__items__center justify__content_space__between pz-10">
      <img src={footerImg} alt="" className="footer__img" />
      <span className='copyright'>Copyright @ 2022. All Rigths Reserved.</span>
    </div>
  )
}

export default Footer