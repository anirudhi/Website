import React from 'react'
import styles from './GradientBackground.module.scss'
import { colors } from '../../theme'

class GradientBackground extends React.Component {
  constructor(props) {
    super(props)
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.paintCanvas = this.paintCanvas.bind(this)
    this.canvasRef = React.createRef()
  }

  paintCanvas(x1, y1, x2, y2) {
    const canvas = this.canvasRef.current
    const ctx = canvas.getContext('2d')
    var grd = ctx.createLinearGradient(x1, y1, x2, y2)
    grd.addColorStop(0, '#ee7752')
    grd.addColorStop(0.4, '#e73c7e')
    grd.addColorStop(0.8, '#23a6d5')
    grd.addColorStop(1, '#23d5ab')

    // Fill with gradient
    ctx.fillStyle = grd
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
  }

  componentDidMount() {
    this.paintCanvas(0, 0, 200, 0)
  }

  handleMouseMove(e) {
    const { screenX, screenY } = e
    const pctx = screenX / window.innerWidth
    const pcty = screenY / window.innerWidth
    this.paintCanvas(screenX, screenY, 0, 200)
  }

  render() {
    return (
      <div
        onMouseMove={this.handleMouseMove}
        className={styles.PrimaryBackground}
      >
        <canvas
          ref={this.canvasRef}
          className={styles.PrimaryCanvas}
          width={window.innerWidth}
          height={window.innerHeight}
        />
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
