import LinkButton from '../LinkButton/LinkButton'
import { Link } from 'gatsby'
import React from 'react'

import logoSvg from '../../../static/logo.svg'

import styles from './Header.module.scss'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showContact: false,
    }
    this.toggleContact = this.toggleContact.bind(this)
  }

  toggleContact() {
    this.setState(state => {
      return {
        showContact: !state.showContact,
      }
    })
  }

  render() {
    return (
      <div className={styles.ContactContainer}>
        <header className={styles.Header}>
          <nav className={styles.PrimaryNav}>
            <Link className={styles.ImgContainer} to="/">
              <img src={logoSvg} alt="Anirudh Iyer Personal Website" />
            </Link>
            <Link title="About" to="/about">
              About
            </Link>
            <Link title="Projects" to="/projects">
              Projects
            </Link>
            <Link title="Blog" to="/blog">
              Blog
            </Link>
          </nav>
          <Link to={'/contact'}>
            <div className={styles.Contact}>Get in touch</div>
          </Link>
        </header>
      </div>
    )
  }
}

export default Header
