import HeaderLink from './HeaderLink'
import LinkButton from './LinkButton'
import { Link } from 'gatsby'
import React from 'react'
import { colors, fonts, media } from '../theme'

import logoSvg from '../../static/logo.svg'

const Header = ({ location, handleContact }) => (
  <header
    style={{
      backgroundColor: colors.white,
      color: colors.dark,
      position: 'fixed',
      zIndex: 1,
      marginLeft: '2.5rem',
      marginRight: '2.5rem',
      width: '100%',
      top: 0,
      left: 0,
    }}
  >
    <div
      style={{
        display: 'grid',
        alignItems: 'center',
        gridTemplateColumns: '7fr 3fr',
        height: 60,
        [media.between('small', 'large')]: {
          height: 50,
        },
        [media.lessThan('small')]: {
          height: 40,
        },
      }}
    >
      <nav
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto auto auto auto',
          alignItems: 'center',
          overflowX: 'auto',
          overflowY: 'hidden',
          WebkitOverflowScrolling: 'touch',
          height: '100%',
          width: '60%',

          [media.size('xsmall')]: {
            flexGrow: '1',
            width: 'auto',
          },
          [media.greaterThan('xlarge')]: {
            width: null,
          },
          [media.lessThan('small')]: {
            maskImage:
              'linear-gradient(to right, transparent, black 20px, black 90%, transparent)',
          },
        }}
      >
        <Link
          style={{
            height: '100%',
            ':focus': {
              outline: 0,
              color: colors.white,
            },

            [media.greaterThan('small')]: {
              width: 'calc(100% / 6)',
            },
            [media.lessThan('small')]: {
              flex: '0 0 auto',
            },
          }}
          to="/"
        >
          <img src={logoSvg} alt="" height="50" />
        </Link>
        <HeaderLink
          isActive={location.pathname.includes('/about/')}
          title="About"
          to="/about"
        />
        <HeaderLink
          isActive={location.pathname.includes('/projects/')}
          title="Projects"
          to="/projects"
        />
        <HeaderLink
          isActive={location.pathname.includes('/blog/')}
          title="Blog"
          to="/blog"
        />
      </nav>
      <LinkButton color={colors.primary} onClick={handleContact}>
        <div>Get in touch</div>
      </LinkButton>
    </div>
  </header>
)

export default Header
