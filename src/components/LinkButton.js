import { Link } from 'gatsby'
import React from 'react'
import { colors, media } from 'theme'

const LinkButton = ({ to, color, children }) => {
  const style = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: colors.white,
    transition: 'color 0.2s ease-out',
    paddingLeft: 15,
    paddingRight: 15,
    fontWeight: 300,

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
  return (
    <Link css={style} to={to}>
      {children}
    </Link>
  )
}

export default LinkButton
