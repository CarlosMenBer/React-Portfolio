import "./contact.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact1 = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_xbszdxs', 'template_xihpa0p', form.current, {
          publicKey: 'VUuhifWFZcsNEny9p',
        })
        
       e.target.reset()
    };

    return (

        <section className="contact section" id="contact">
          <h2 className="section__title">Contacta conmigo</h2>
          <span className="section__subtitle">Contacta</span>
    
          <div className="contact__container container grid">
            <div className="contact__content">
              <h3 className="contact__title">Habla conmigo</h3>
    
              <div className="contact__info">
                <div className="contact__card">
                  <i className="bx bx-mail-send contact__card-icon"></i>
                  <h3 className="contact__card-title">Email</h3>
                  <span className="contact__card-data">carlosmendozabernal14@gmail.com</span>
                  <a href="mailto:user@gmail.com" className="contact__button">
                    Escríbeme <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                  </a>
                </div>
              </div>
    
              <div className="contact__info">
                <div className="contact__card">
                  <i className="bx bxl-whatsapp contact__card-icon"></i>
                  <h3 className="contact__card-title">WhatsApp</h3>
                  <span className="contact__card-data">665-822-223</span>
                  <a href="https://wa.me/665822223" className="contact__button">
                    Escríbeme <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                  </a>
                </div>
              </div>
            </div>
    
            <div className="contact__content">
              <h3 className="contact__title">Dudas o comentarios</h3>
    
              <form ref={form} onSubmit={sendEmail} className="contact__form">
                <div className="contact__form-div">
                  <label htmlFor="name" className="contact__form-tag">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="contact__form-input"
                    placeholder="Introduce tu nombre"
                    required
                  />
                </div>
    
                <div className="contact__form-div">
                  <label htmlFor="email" className="contact__form-tag">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="contact__form-input"
                    placeholder="Introduce tu email"
                    required
                  />
                </div>
    
                <div className="contact__form-div contact__form-area">
                  <label htmlFor="message" className="contact__form-tag">
                    Opinión
                  </label>
                  <textarea
                    name="message"
                    cols="30"
                    rows="10"
                    className="contact__form-input"
                    placeholder="Escribe tu opinión"
                    required
                  ></textarea>
                </div>
    
                <button className="button button--flex">
                  Enviar Mensaje
                  <svg
                    className="button__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M14.22 21.935c-1.18 0-2.85-.83-4.17-4.8L9.33 14.975l-2.16-.72C3.21 12.935 2.38 11.265 2.38 10.085c0-1.17.83-2.85 4.79-4.18l8.49-2.83c2.12-.71 3.89-.5 4.98.58 1.09 1.08 1.3 2.86.59 4.98l-2.83 8.49c-1.33 3.98-3 4.81-4.18 4.81z"
                      fill="var(--container-color)"
                    ></path>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </section>
      );
    };
    
    export default Contact1;