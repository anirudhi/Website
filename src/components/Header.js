import React from 'react'
import { Link } from 'gatsby'

class Header extends React.Component {
  render() {
    const links = this.props.children

    return (
      <div>
        <Link to="#about/">About</Link>
        <Link to="#projects/">Projects</Link>
        <Link to="/blog/">Blog</Link>
      </div>
    )
  }
}

export default Header
