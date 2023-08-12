import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon icon-fire"></i>
            <div>
                <h3 className="about__title">88</h3>
                <span className="about__subtitle">Projext Completed</span>
            </div>
        </div>
        <div className="about__box">
            <i className="about__icon icon-cup"></i>
            <div>
                <h3 className="about__title">167</h3>
                <span className="about__subtitle">Cup of Coffee</span>
            </div>
        </div>
        <div className="about__box">
            <i className="about__icon icon-people"></i>
            <div>
                <h3 className="about__title">21</h3>
                <span className="about__subtitle">Satisfied clients</span>
            </div>
        </div>
        <div className="about__box">
            <i className="about__icon icon-badge"></i>

            <div>
                <h3 className="about__title">8</h3>
                <span className="about__subtitle">Nominees winner</span>
            </div>
        </div>
    </div>
  )
}

export default AboutBox
