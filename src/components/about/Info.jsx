import React from 'react'

const Info = () => {
  return (
    <div className='about__info grid'>
        <div className='about__box'>
        <i class='bx bx-award about__icon'></i>
            <h3 className='about__title'>Estudios</h3>
            <span className='about__subtitle'>Grado de DAM</span>
        </div>

        <div className='about__box'>
        <i class='bx bx-code-block about__icon' ></i>
            <h3 className='about__title'>Lenguajes</h3>
            <span className='about__subtitle'>Java </span>
            <span className='about__subtitle'>Python </span>
            <span className='about__subtitle'>MySQL </span>
            <span className='about__subtitle'>HTML </span>
            <span className='about__subtitle'>CSS </span>
          </div>

        <div className='about__box'>
        <i class='bx bx-code-block about__icon' ></i> 
            <h3 className='about__title'>Horarios</h3>
            <span className='about__subtitle'>24/7</span>
        </div>
    </div>
  )
}

export default Info