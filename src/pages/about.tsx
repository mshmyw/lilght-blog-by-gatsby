import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import TypedComponent from '../components/typed'

interface Props {
  readonly data: PageQueryData
}

export default class Tags extends React.Component<Props> {
  render() {
    const {data} = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout title={siteTitle}>
        <Head title="All tags" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
        <article>
          <p id="element">
          About Jeff Rafter...
          </p></article>
          <TypedComponent
            strings={[
              'Some <i>strings</i> are slanted',
              'Some <strong>strings</strong> are bold',
            ]}
          />
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
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
