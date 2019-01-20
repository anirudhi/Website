import Bio from './Bio'
import React from 'react'
import { colors, fonts, media } from '../theme'

const Footer = ({ location }) => (
  <footer>
    © {new Date().getFullYear()} Anirudh Iyer
    <Bio />
  </footer>
)

export default Footer
