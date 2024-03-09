import React from 'react'
import styles from '../../../styles/BurgerButton.module.css'

type BurgerButtonProps = {
  onClick: () => void
  classname: string
}

const BurgerButton = ({ onClick, classname }: BurgerButtonProps) => {
  return (
    <div className={`${styles.nav_bar__mobile} ${classname}`} onClick={onClick}>
      <button className={styles.nav_bar__icon}></button>
    </div>
  )
}

export { BurgerButton }
