import React from 'react'
import './Contact.css'
import contactImg from '../assets/img/front-photo-2.jpg'
import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const initialValues = { from_name: '', from_mail: '', subject: '', message: '' }
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const form = useRef()

  let logUseEffect = true
  useEffect(() => {
    if (logUseEffect) {
      // console.log('formErrors :', formErrors)
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        sendEmail()

        setFormValues(initialValues)
        setIsSubmit(false)    
      }
    }
    logUseEffect = false
  }, [formErrors])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
    console.log('form :', formValues);
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setFormErrors(validate(formValues))
    setIsSubmit(true)
  }

  const validate = (values) => {
    const errors = {}
    const regex = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/
    if (!values.from_name) {
      errors.from_name = 'Name is required'
    }
    if (!values.from_mail) {
      errors.from_mail = 'email is required'
    } else {
      if (!regex.test(values.from_mail)) {
        errors.from_mail = 'This is not a valid mail format'
      }
    }
    if (!values.subject) {
      errors.subject = 'Subject is required'
    }
    if (!values.message) {
      errors.message = 'Message is required'
    }

    return errors
  }

  const sendEmail = () => {
    console.log('====================================');
    console.log(form.current);
    console.log('====================================');
    emailjs.sendForm(
      'service_hfhi88u',
      'template_3zpft0b',
      form.current,
      'uBcgHjJLSC1CPZdrp')
    .then((result) => {
        console.log('result.text', result.text);
    }, (error) => {
        console.log('result.text', error.text);
    });

  }
  
  return (
    <div className='contact component__space' id='Contact'>
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              {/* <pre style={{ 'color': 'white' }}>{JSON.stringify(formValues, undefined, 2)}</pre> */}
              <h1 className="hire__text">
                Contact Me
              </h1>
              <p className="hire__text white">Contact me by phone:<strong> +33 618083370</strong></p>
              <p className="hire__text white">or mail: <strong>sbaltazard@sfr.fr</strong></p>
            </div>

            <form className="input__box" ref={form} onSubmit={handleSubmit}>
              <div className="entry">
                <input
                  autoComplete='off'
                  value={formValues.from_name}
                  name='from_name'
                  type="text"
                  className="contact name"
                  placeholder='Your name'
                  onChange={handleChange} />
              </div>
              <p className="error__message">{formErrors.from_name}</p>
              <div className="entry">
                <input
                  autoComplete='off'
                  value={formValues.from_mail}
                  name='from_mail'
                  type="email"
                  className="contact mail"
                  placeholder='email@address'
                  onChange={handleChange} />
                <p className="error__message">{formErrors.from_mail}</p>
              </div>
              <div className="entry">
                <input
                  autoComplete='off'
                  value={formValues.subject}
                  name='subject'
                  type="text"
                  className="contact subject"
                  placeholder='Write a subject'
                  onChange={handleChange} />
              </div>
              <p className="error__message">{formErrors.subject}</p>
              <div className="entry">
                <textarea
                  value={formValues.message}
                  name="message"
                  id="message"
                  placeholder='Write your message'
                  onChange={handleChange}></textarea>
              </div>
              <p className="error__message">{formErrors.message}</p>
              <div className='submit__btn'>
                {(Object.keys(formErrors).length === 0 && isSubmit) ? (
                  <div>
                    <span className='message__submit'>
                      Message submited
                    </span>
                  </div>) : ''
                }
                <button
                  className="btn contact pointer" type='submit' onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </form>

          </div>
        </div>
        <div className="col__2">
          <img src={contactImg} alt="" className="contact__img" />
        </div>
      </div>
    </div>
  )
}

export default Contact