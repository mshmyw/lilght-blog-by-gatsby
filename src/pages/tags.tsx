import React from 'react'
import {Link, graphql} from 'gatsby'

import {Layout} from '../components/layout'
import {Head} from '../components/Head'

interface Props {
  readonly data: PageQueryData
}

export default (props: Props) => {
    const {data} = props
    const siteTitle = data.site.siteMetadata.title
    const group = data.allMarkdownRemark.group

    return (
      <Layout title={siteTitle}>
        <Head title="All tags" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
        <article>
          <h1>All tags</h1>
          <div className={`page-content`}>
            {group.map(
              tag =>
                tag && (
                  <div key={tag.fieldValue}>
                    <h3>
                      <Link to={`/tags/${tag.fieldValue}/`}>{tag.fieldValue}</Link>
                    </h3>
                    <small>
                      {tag.totalCount} post
                      {tag.totalCount === 1 ? '' : 's'}
                    </small>
                  </div>
                ),
            )}
          </div>
        </article>
      </Layout>
    )
  }

interface PageQueryData {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    group: {
      fieldValue: string
      totalCount: number
    }[]
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: {frontmatter: {published: {ne: false}}}) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
