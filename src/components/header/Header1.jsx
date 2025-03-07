import React, { useState } from 'react'
import "./header.css"

const Header1 = () => {
    /* Toggles */ 
    const [Toggle, showMenu] = useState(false);

    return (
        <header className='header'>
            <nav className='nav container'>
                <a href='index.html' className='nav__logo'>
                    Carlos
                </a>
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className='nav__list grid'>

                        <li className='nav__item'>
                            <a href='#home' className='nav__link active-link'>
                                <i className='uil uil-estate nav__icon'></i> Home
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href='#about' className='nav__link'>
                                <i className='uil uil-user nav__icon'></i> Sobre mi
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href='#skills' className='nav__link'>
                                <i className='uil-ruler-combined nav__icon'></i> Skills
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href='#Api' className='nav__link'>
                                <i className=' uil-cloud-sun nav__icon'></i> Tiempo
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href='#contact' className='nav__link'>
                                <i className='uil uil-message nav__icon'></i> Contacto
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>
                
                <div className='nav__toggle' onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header1
