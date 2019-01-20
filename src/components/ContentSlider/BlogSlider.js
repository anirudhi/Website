import React from 'react'
import { Link } from 'gatsby'
import Typing from 'react-typing-animation'
import { rhythm } from '../../utils/typography'
import styles from './ContentSlider.css'

class BlogSlider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSlide: 0,
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment() {
    const { currentSlide } = this.state
    if (currentSlide !== this.props.posts.length - 1) {
      this.setState(state => {
        currentSlide: state.currentSlide++
      })
    }
  }

  decrement() {
    const { currentSlide } = this.state
    if (currentSlide !== 0) {
      this.setState(state => {
        currentSlide: state.currentSlide--
      })
    }
  }

  render() {
    const { posts, colorInversed } = this.props

    const dots = posts.forEach((post, index) => {
      const active = index === this.state.currentSlide ? styles.Active : ''
      return <div className={styles.Dot`${' ' + active}`} />
    })

    const inversed = colorInversed ? styles.Inversed : ''

    const left =
      currentSlide !== 0 ? (
        <div className={styles.Left} onClick={this.decrement} />
      ) : null

    const right =
      currentSlide !== posts.length - 1 ? (
        <div className={styles.Right} onClick={this.increment} />
      ) : null

    const post = posts[this.state.currentSlide]
    const slide = (
      <div className={styles.Slide}>
        <h3
          style={{
            marginBottom: rhythm(1 / 4),
          }}
        >
          <Link style={{ boxShadow: `none` }} to={post.fields.slug}>
            <Typing speed={50}>
              <span className={styles.Title}>
                {post.frontmatter.title || post.fields.slug}
              </span>
              <span className={styles.Excerpt}>{post.excerpt}</span>
            </Typing>
          </Link>
        </h3>
        <small>{post.frontmatter.date}</small>
      </div>
    )

    return (
      <div className={styles.Container`${' ' + inversed}`}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div className={styles.Dots}>{dots}</div>
        {left}
        {right}
        {slide}
      </div>
    )
  }
}

export default BlogSlider
