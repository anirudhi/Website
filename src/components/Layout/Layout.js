import React from 'react'
import { Link } from 'gatsby'

import styles from './Layout.module.scss'

class Layout extends React.Component {
  render() {
    const { children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return <div className={styles.Layout}>{children} </div>
  }
}

export default Layout
