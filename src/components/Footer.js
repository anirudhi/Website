import HeaderLink from './HeaderLink'
import LinkButton from './LinkButton'
import { Link } from 'gatsby'
import React from 'react'
import { colors, fonts, media } from 'theme'

import logoSvg from '../../static/logo.svg'

const Footer = ({ location }) => (
  <header
    css={{
      backgroundColor: colors.darker,
      color: colors.white,
      position: 'fixed',
      zIndex: 1,
      width: '100%',
      top: 0,
      left: 0,
    }}
  >
    <div
      css={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        [media.between('small', 'large')]: {
          height: 50,
        },
        [media.lessThan('small')]: {
          height: 40,
        },
      }}
    >
      <Link
        css={{
          display: 'flex',
          marginRight: 10,
          height: '100%',
          alignItems: 'center',
          color: colors.brand,

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
        <img src={logoSvg} alt="" height="20" />
        <span
          css={{
            color: 'inherit',
            marginLeft: 10,
            fontWeight: 700,
            fontSize: 20,
            lineHeight: '20px',
            [media.lessThan('large')]: {
              fontSize: 16,
              marginTop: 1,
            },
            [media.lessThan('small')]: {
              // Visually hidden
              position: 'absolute',
              overflow: 'hidden',
              clip: 'rect(0 0 0 0)',
              height: 1,
              width: 1,
              margin: -1,
              padding: 0,
              border: 0,
            },
          }}
        >
          React
        </span>
      </Link>

      <nav
        css={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'stretch',
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
      <LinkButton color={colors.primary} onClick={this.props.handleContact}>
        <div>Get in touch</div>
      </LinkButton>
    </div>
  </header>
)

export default Footer