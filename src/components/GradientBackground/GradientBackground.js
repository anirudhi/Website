import React from 'react'
import styles from './GradientBackground.module.scss'
import { colors } from '../../theme'

const GradientBackground = props => (
  <div className={styles.PrimaryBackground}>
    {props.primaryText}
    <div style={arrowStyle} />
  </div>
)

const arrowStyle = {
  boxSizing: 'border-box',
  height: '5vw',
  width: '5vw',
  borderStyle: 'solid',
  borderColor: colors.white,
  borderWidth: '0px 1px 1px 0px',
  transform: 'rotate(45deg)',
  transition: 'border-width 150ms ease-in-out',

  ':hover': {
    borderBottomWidth: '4px',
    borderRightWidth: '4px',
  },
}

export default GradientBackground
