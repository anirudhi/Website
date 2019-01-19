import React from 'react'
import { Link, graphql } from 'gatsby'

import { Bio, Header, Layout, SEO, Typewriter } from '../components'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props

    const typeArr = ['Fullstack Developer', 'Artist', 'Anirudh Iyer']

    return (
      <Layout location={this.props.location} title={''}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Header />
        <div className="Typewriter">Anirudh Iyer</div>
      </Layout>
      <Footer/>
    )
  }
}

export default BlogIndex

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
