import React from 'react'
import {Link, graphql} from 'gatsby'
import styled from 'styled-components'

import {Layout} from '../components/layout'
import {Header} from '../components/header'
import { Identicon } from "../components/identicons/identicon"

interface Props {
  readonly data: PageQueryData
  readonly pageContext: {
    previous?: any
    next?: any
  }
}

const StyledDiv = styled('div')`
  font-size: 1.4rem;
  line-height: 2rem;
  display: flex;
  justify-content: space-between;
`

export default class PostTemplate extends React.Component<Props> {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const {previous, next} = this.props.pageContext

    return (
      <Layout title={siteTitle}>
        <Header title={post.frontmatter.title} description={post.excerpt} />
        <article>
          <header>
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <div style={{fontSize: 48}}>
                {post.frontmatter.title}
              </div>
              <div>
                <Identicon
                  bg="#F78DA7"
                  fg="#00D084"
                  message={post.frontmatter.title}/>
              </div>
            </div>
            <p>{post.frontmatter.date} -
            {post.fields.readingTime.text} - {post.fields.readingTime.words}</p>
          </header>
          <div className={`page-content`}>
            <div dangerouslySetInnerHTML={{__html: post.html}} />
            <StyledDiv>
              {previous && (
                <span>
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                </span>
              )}
              {next && (
                <span>
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                </span>
              )}
            </StyledDiv>
          </div>
        </article>
      </Layout>
    )
  }
}

interface PageQueryData {
  site: {
    siteMetadata: {
      title: string
    }
  }
  markdownRemark: {
    id?: string
    excerpt?: string
    html: string
    frontmatter: {
      title: string
      date: string
    }
    fields: {
      readingTime: {
        text: string
        words: string
      }
    }
  }
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      fields {
        readingTime {
          text
          words
        }
      }
    }
  }
`
