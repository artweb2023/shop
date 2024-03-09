import React from 'react'
import styles from '../../../styles/HeaderContent.module.css'

const HeaderContent = () => {
  return (
    <div className={styles.header_content}>
      <div className='frame'>
        <p className='frame__text'>Фермерское Мясо</p>
      </div>
      <h1 className={styles.header_content__title}>
        Мы Доставим Говядину И Полуфабрикаты Высшего Качества
      </h1>
      <p className={styles.header_content__text}>
        Кормите свою семью с уверенностью: мы упрощаем понимание того, откуда
        берется ваша еда.
      </p>
      <div className={styles.content_button}>
        <button
          className={`${styles.header_content_button} ${styles.button_backgrpund_accent}`}
        >
          Магазин
        </button>
        <button
          className={`${styles.header_content_button} ${styles.button_backgrpund_transporent}`}
        >
          Контакты
        </button>
      </div>
    </div>
  )
}

export { HeaderContent }
