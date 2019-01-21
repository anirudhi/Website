import React from 'react'
import styles from './GradientBackground.module.scss'
import { colors } from '../../theme'

class GradientBackground extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 0,
      y: 0,
    }
    this.handleMouseOver = this.handleMouseOver.bind(this)
  }

  handleMouseOver(e) {
    const { screenX, screenY } = e
    this.setState({ x: screenX, y: screenY })
  }

  render() {
    const pct = (360 * this.state.x) / window.innerWidth
    return (
      <div
        className={styles.PrimaryBackground}
        onMouseOver={this.handleMouseOver}
        style={{
          background: `${'linear-gradient('}${pct}${'deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)'}`,
        }}
      >
        <div className={styles.PrimaryText}>{this.props.primaryText}</div>
        <div style={arrowStyle} />
      </div>
    )
  }
}

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
