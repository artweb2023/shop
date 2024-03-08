import React from 'react'
import styles from '../../../styles/BurgerButton.module.css'

type BurgerButtonProps = {
  onClick: () => void
  style: React.CSSProperties
}

const BurgerButton = ({ onClick, style }: BurgerButtonProps) => {
  return (
    <div className={styles.nav_bar__mobile} onClick={onClick} style={style}>
      <button className={styles.nav_bar__icon}></button>
    </div>
  )
}

export { BurgerButton }
