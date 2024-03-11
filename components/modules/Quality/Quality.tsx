import React from 'react'
import Image from 'next/image'
import vet from '../../../public/Image/veterinar.png'
import but from '../../../public/Image/thebucher.png'
import assort from '../../../public/Image/buf-offer.png'
const Quality = () => {
  return (
    <section className='quality'>
      <div className='quality-content'>
        <div className='frame'>
          <p className='frame__text'>Наше Качество</p>
        </div>
        <h2 className='quality-row__title'>
          Качество, которому можно доверять
        </h2>
        <Image className='quality__image' src={vet} alt='Farm' />
        <div className='quality-row'>
          <h4 className='quality-row__subtitle'>
            Наше мясо - Вершина Вкуса и Безопасности
          </h4>
          <p className='quality-row__text'>
            Мы строго контролируем каждый этап производства, чтобы обеспечить
            вам продукт, полный натурального вкуса, полезных свойств и
            безопасности. Мы верим, что вы заслуживаете только лучшее, и именно
            это мы предлагаем - мясо, которое сочетает в себе выдающийся вкус и
            надежность происхождения.
          </p>
          <button className='quality-row__button'>Узнать</button>
        </div>
      </div>
      <div className='quality-standart'>
        <div className='quality-wrap'>
          <div className='frame frame_quality_position'>
            <p className='frame__text'>Наш Стандарт</p>
          </div>
          <Image className='quality-standart__bucher' src={but} alt='Butcher' />
          <h2 className='quality-standart__title'>Наш Стандарт</h2>
          <Image
            className='quality-standart__buf'
            src={assort}
            alt='Assortment'
          />
          <p className='quality-standart__text'>
            Наша компания строго соблюдает высочайшие стандарты качества во всех
            аспектах производства, чтобы гарантировать нашим клиентам надежность
            и безупречный вкус наших продуктов
          </p>
          <h4 className='quality-standart__subtitle'>Что мы предлагаем:</h4>
          <ul className='quality-standart__list'>
            <li>Говядину высшего качества</li>
            <li>Мясо Лося и Кабана</li>
            <li>Полуфабрикаты</li>
          </ul>
          <button className='quality-standart__button'>Контакты</button>
        </div>
      </div>
    </section>
  )
}

export { Quality }
