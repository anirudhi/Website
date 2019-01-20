import { Link } from 'gatsby'
import React from 'react'
import { colors, media } from '../theme'

const HeaderLink = ({ title, to }) => (
  <Link style={style} to={to}>
    {title}
  </Link>
)

const style = {
  fontFamily: 'Roboto',
  fontWeight: 800,
  textTransform: 'Uppercase',
  alignItems: 'center',
  color: colors.dark,
  transition: 'color 0.2s ease-out',
  paddingLeft: 15,
  paddingRight: 15,
  fontSize: 12,

  ':focus': {
    outline: 0,
    backgroundColor: colors.lighter,
    color: colors.white,
  },

  [media.size('xsmall')]: {
    paddingLeft: 8,
    paddingRight: 8,
  },

  [media.between('small', 'medium')]: {
    paddingLeft: 10,
    paddingRight: 10,
  },

  [media.greaterThan('xlarge')]: {
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 18,

    ':hover:not(:focus)': {
      color: colors.brand,
    },
  },
}
export default HeaderLink
