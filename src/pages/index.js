import React from 'react'
import { Link, graphql } from 'gatsby'

import {
  Bio,
  Header,
  Footer,
  Layout,
  SEO,
  GradientBackground,
  ProjectSlider,
  BlogSlider,
  LinkButton,
} from '../components'

import { colors } from '../theme'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showContact: false,
    }
    this.closeContact = this.closeContact.bind(this)
  }

  openContact() {
    this.setState({ showContact: true })
  }

  closeContact() {
    this.setState({ showContact: false })
  }

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

    const contact = this.state.showContact ? (
      <Contact handleContact={this.closeContact} />
    ) : null

    return (
      <Layout location={this.props.location} title={''}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        {contact}
        <Header handleContact={this.openContact} />
        <GradientBackground primaryText="Hey, I'm Anirudh" />
        <BlogSlider posts={data.allMarkdownRemark.edges} />
        {aboutBox}
        <ProjectSlider posts={data.allMarkdownRemark.edges} colorInversed />
        <Footer />
      </Layout>
    )
  }
}

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
