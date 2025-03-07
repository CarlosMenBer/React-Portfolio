import React from 'react';

const Backend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Backend</h3>
        <div className='skills__box'>
            <div className='skills__group'>
                {[
                    { name: "Java", level: "Avanzado" },
                    { name: "Android Studio/Kotlin", level: "Intermedio" },
                    { name: "SQL", level: "Avanzado" },
                    { name: "Python", level: "Básico" }
                ].map((skill, index) => (
                    <div className='skills__data' key={index}>
                        <i className='bx bx-badge-check'></i>
                        <div>
                            <h3 className='skills__name'>{skill.name}</h3>
                            <span className='skills__level'>{skill.level}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default Backend;
