import React from 'react'
import { Link, graphql } from 'gatsby'
import WebFont from 'webfontloader'

import {
  Bio,
  Header,
  Footer,
  Layout,
  SEO,
  GradientBackground,
  ContentSlider,
  LinkButton,
} from '../components'

import { colors } from '../theme'

class Index extends React.Component {
  render() {
    const { data } = this.props

    const aboutBox = (
      <div>
        <div>Designer</div>
        <div>Creator</div>
        <div>Programmer</div>
        <LinkButton color={colors.secondary} to={'/about'}>
          <div>About Me</div>
        </LinkButton>
      </div>
    )

    return (
      <Layout location={this.props.location} title={''}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Header
          handleContact={this.openContact}
          location={this.props.location}
        />
        <GradientBackground primaryText="Hey, I'm Anirudh" />
        <ContentSlider type="blog" posts={data.allMarkdownRemark.edges} />
        {aboutBox}
        <ContentSlider
          type="projects"
          posts={data.allMarkdownRemark.edges}
          colorInversed
        />
        <Footer />
      </Layout>
    )
  }
}

WebFont.load({
  google: {
    families: ['Tinos', 'Roboto', 'sans-serif'],
  },
})

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
