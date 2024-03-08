import React from 'react'
import Image from 'next/image'
import img from '../../../public/Image/logo.png'
import tg from '../../../public/Image/Icons/tg.svg'
import vk from '../../../public/Image/Icons/vk.svg'
import whatssup from '../../../public/Image/Icons/whatsap.svg'
import instagram from '../../../public/Image/Icons/instagram.svg'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='subscription'>
        <div className='subscription-info'>
          <div className='frame'>
            <p className='frame__text'>Подписка</p>
          </div>
          <div className='subscription-form'>
            <p className='subscription-form__text'>
              Получайте эксклюзивные специальные предложения и информацию о
              наших акциях первыми.
            </p>
            <form className='form'>
              <input
                className='form__input'
                type='text'
                name='email'
                placeholder='Email address'
              />
              <button className='form__button'>Подписаться</button>
            </form>
          </div>
        </div>
      </div>
      <div className='footer-content'>
        <div className='footer-about'>
          <h3 className='footer__title'>О нас</h3>
          <a className='footer-about__link' href='#'>
            <Image className='footer-about__logo' src={img} alt='Логотип' />
            Доставляем свежее мясо прямо к вам.
          </a>
          <p className='footer-about__text'>
            Мы с гордостью предоставляем услугу доставки свежего мяса прямо к
            вашей двери. Наслаждайтесь высоким качеством без дополнительных
            хлопот.
          </p>
          <div className='footer-icons'>
            <a href='#'>
              <Image className='footer-icons__social' src={vk} alt='VK' />
            </a>
            <a href='#'>
              <Image
                className='footer-icons__social'
                src={instagram}
                alt='Instagram'
              />
            </a>
            <a href='#'>
              <Image className='footer-icons__social' src={tg} alt='Telegram' />
            </a>
            <a href='#'>
              <Image
                className='footer-icons__social'
                src={whatssup}
                alt='WhatsApp'
              />
            </a>
          </div>
        </div>
        <div className='footer-menu'>
          <h3 className='footer__title'>Меню</h3>
          <a className='footer-menu__link' href='#'>
            Главная
          </a>
          <a className='footer-menu__link' href='#'>
            Магазин
          </a>
          <a className='footer-menu__link' href='#'>
            О нашей Комании
          </a>
          <a className='footer-menu__link' href='#'>
            Информация о Доставки
          </a>
          <a className='footer-menu__link' href='#'>
            Отзывы
          </a>
          <a className='footer-menu__link' href='#'>
            Личный кабинет
          </a>
        </div>
        <div className='footer-contact'>
          <h3 className='footer__title'>Адресс</h3>
          <p className='footer-contact__text'>
            р.Марий Эл пос.Оршанка Ленинский проспект 12б
          </p>
          <p className='footer-contact__text'>Телефон: +7 927 438 38 48</p>
          <p className='footer-contact__text'>Email : costomer@meets.ru</p>
        </div>
      </div>
      <div className='footer-official'>
        <p className='footer-official__text'>
          © 2024 Все пррава защишены ООО "Фермерское мясо "
        </p>
        <a className='footer-official__link' href='#'>
          Политика конфиденциальности
        </a>
        <a className='footer-official__link' href='#'>
          Политика обработки данных
        </a>
      </div>
    </footer>
  )
}

export { Footer }
