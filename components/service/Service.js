import React from 'react';
import "./Service.css"
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

const data = [
  {
    id:1,
    image: Image1,
    title:"UI/UX design",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, veniam ratione aliquam impedit voluptatem saepe.",
  },
  {
    id:2,
    image: Image2,
    title:"Web development",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, veniam ratione aliquam impedit voluptatem saepe.",

  },
  {
    id:3,
    image: Image3,
    title:"Photography",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, veniam ratione aliquam impedit voluptatem saepe.",

  }
]
const Service = () => {
  return (
    <section className="services container section" id='services'>

      <h2 className='section__title'>Services</h2>

      <div className="services__container grid">
        {data.map(({id,image,title,description})=>{
          return (
            <div className="services__card"key={id}>
              <img src={image}alt="" className='services__img'/>
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Service


