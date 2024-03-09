import React from 'react'
import Image from 'next/image'
import img from '../../../public/Image/veterinarian.png'

const AboutUs = () => {
  return (
    <section className='content'>
      <div className='frame'>
        <p className='content_frame frame__text'>О нас</p>
      </div>
      <h2 className='content_about__title'>О нашей Комании</h2>
      <Image className='content__image' src={img} alt='Vet' />
      <div className='content_about'>
        <h4 className='content_about__subtitle'>
          Мы гордится тем, что мы исключаем использование гормонов роста при
          выращивании наших животных.
        </h4>
        <p className='content_about__text'>
          Наши клиенты могут быть уверены, что каждый кусок говядины и каждый
          полуфабрикат, приготовленный из нашего мяса, несет в себе
          непревзойденный вкус и полезные свойства. Мы гордится своей
          ответственностью перед потребителями и стремится предоставить им
          только лучшие продукты, произведенные с любовью к природе и вниманием
          к качеству.
        </p>
        <button className='content_about__button'>Узнать</button>
      </div>
    </section>
  )
}

export { AboutUs }
