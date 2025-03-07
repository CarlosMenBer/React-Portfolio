import React from 'react';

const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Frontend</h3>
        <div className='skills__box'>
            <div className='skills__group'>
                {[
                    { name: "HTML", level: "Intermedio" },
                    { name: "CSS", level: "Intermedio" },
                    { name: "JavaScript", level: "Intermedio" },
                    { name: "React", level: "Básico" }
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

export default Frontend;
