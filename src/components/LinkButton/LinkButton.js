import { Link } from 'gatsby'
import React from 'react'

import styles from './LinkButton.module.scss'

const LinkButton = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className={styles.PrimaryButton}>
      {children}
    </div>
  )
}


export default LinkButton
