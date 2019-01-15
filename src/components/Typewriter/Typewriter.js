import React from 'react'

import './Typewriter.css'

class Typewriter extends React.Component {
  constructor(props) {
    super(props)
    this.typeWriter = this.typeWriter.bind(this)
    this.backSpace = this.backSpace.bind(this)
    this.state = {
      typeIdx: 0,
      displayText: '',
      backspacing: false,
    }
  }

  async componentDidMount() {
    this.props.forEach(text => {
      await this.typeWriter(0, '')
    })
  }

  typeWriter(i, disp) {
    console.log('typeWriter', this.state.typeIdx)
    if (this.state.typeIdx >= this.props.typeArr.length - 1) {
      return
    } else if (i < this.props.typeArr[this.state.typeIdx].length) {
      disp += this.props.typeArr[this.state.typeIdx][i]
      i++
      this.setState({ displayText: disp })
      setTimeout(this.typeWriter(i, disp), 70)
    } else {
      // this.backSpace(disp)
    }
  }

  async backSpace(disp) {
    console.log('backSpace')
    if (disp.length > 0) {
      disp = disp.substring(0, disp.length - 1)
      this.setState({ displayText: disp })
      setTimeout(this.backSpace(disp), 30)
    } else {
      // await this.setState(state => ({ typeIdx: state.typeIdx + 1 }))
      // this.typeWriter(0, '')
    }
  }

  render() {
    const { typeArr } = this.props

    const blinker = <span className="blinker" />

    return (
      <div>
        {this.state.displayText}
        {blinker}
      </div>
    )
  }
}

export default Typewriter
