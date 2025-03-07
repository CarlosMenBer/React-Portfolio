import React from 'react';
import "./footer.css";


const Footer1 = () => {
  return (
    <footer className='footer'>
        <div className='footer__container container'>
            <h1 className='footer__title'>Carlos</h1>

            <ul className='footer__list'>
                <li>
                    <a href='#about' className='footer__link'>Sobre mi</a>
                </li>   
            </ul>
        
            <div className="footer__social">
                 <a href='https://www.instagram.com/carlos._mdz/' className='footer__social-icon' target='_blank'>
                    <i class="bx bxl-instagram"></i>
                </a>

                 <a href='https://www.linkedin.com/in/carlos-mendoza-bernal-82817428b/' className='footer__social-icon' target='_blank'>
                        <i class="uil uil-book-open"></i>
                  </a>

                  <a href='https://github.com/CarlosMenBer' className='footer__social-icon' target='_blank'>
                         <i class="uil uil-github-alt"></i>
                </a>
            </div>

            <span className='footer__copy' >
                &#169; Crypticalcoder. All rigths reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer1