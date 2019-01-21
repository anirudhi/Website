import LinkButton from '../LinkButton'
import Contact from '../Contact'
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
    const contact = this.state.showContact ? (
      <Contact handleContact={this.closeContact} />
    ) : null

    return (
      <div className={styles.ContactContainer}>
        <header className={styles.Header}>
          <nav className={styles.PrimaryNav}>
            <Link className={styles.ImgContainer} to="/">
              <img src={logoSvg} alt="Anirudh Iyer Personal Website" />
            </Link>
            <Link title="About" to="/about">
              <span className={styles.HeaderLink}>About</span>
            </Link>
            <Link title="Projects" to="/projects">
              <span className={styles.HeaderLink}>Projects</span>
            </Link>
            <Link title="Blog" to="/blog">
              <span className={styles.HeaderLink}>Blog</span>
            </Link>
          </nav>
          <LinkButton className={styles.Contact} onClick={this.toggleContact}>
            <div>Get in touch</div>
          </LinkButton>
        </header>
        {contact}
      </div>
    )
  }
}

export default Header
