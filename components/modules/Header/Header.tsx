import React from 'react'
import { HeaderMenu } from '../../elements/Header/HeaderMenu'
import { HeaderContent } from '../../elements/Header/HeaderContent'

const Header = () => {
  return (
    <header className='header'>
      <div className='header-promo'>
        <p className='promo_text'>
          Получите скидку 500 RUB на свой первый заказ от 3000 RUB
        </p>
        <button className='header-promo__button promo_text'>Получить</button>
      </div>
      <HeaderMenu></HeaderMenu>
      <HeaderContent></HeaderContent>
    </header>
  )
}

export { Header }
