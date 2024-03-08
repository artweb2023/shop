'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../../../public/Image/logo.png'
import style from '../../../styles/HeaderMenu.module.css'
import { BurgerButton } from './BurgerButton'

const HeaderMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prevState) => !prevState)
  }

  return (
    <div className={style.header_nav}>
      <button
        onClick={handleMobileMenuToggle}
        className={style.btn_close}
        style={{ display: isMobileMenuOpen ? 'block' : 'none' }}
      ></button>
      <nav className={`${style.nav_bar} ${isMobileMenuOpen ? style.show : ''}`}>
        <a href='#' className={style.nav_bar__link}>
          Главная
        </a>
        <a href='#' className={style.nav_bar__link}>
          Магазин
        </a>
        <a href='#' className={style.nav_bar__link}>
          О нас
        </a>
        <a href='#' className={style.nav_bar__link}>
          Акции
        </a>
        <a href='#' className={style.nav_bar__link}>
          Контакты
        </a>
      </nav>
      <div className={style.header_user}>
        <BurgerButton
          onClick={handleMobileMenuToggle}
          style={{ display: isMobileMenuOpen ? 'none' : 'block' }}
        ></BurgerButton>
        <a className={style.header_logo} href='#'>
          <Image className={style.header_logo__icons} src={logo} alt='Logo' />
        </a>
        <div className={style.header_cart}>
          <p className={style.header_cart__sum}>
            <span className={style.header_cart__currency}></span>0
          </p>
          <a className={style.header_cart__link} href='#'>
            <div className={style.header_cart__icons}>
              <span className={style.header_cart__count}>0</span>
            </div>
          </a>
        </div>
        <a className={style.header_user__login} href='#'></a>
      </div>
    </div>
  )
}

export { HeaderMenu }
