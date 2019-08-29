import React from 'react'
import Helmet from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'

type StaticQueryData = {
  site: {
    siteMetadata: {
      title: string
      description: string
      author: {
        name: string
      }
    }
  }
}

interface Props {
  readonly title: string
  readonly description?: string
  readonly lang?: string
  readonly keywords?: string[]
}

export default class Head extends React.Component<Props> {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
                description
                author {
                  name
                }
              }
            }
          }
        `}
        render={(data: StaticQueryData) => {
          const metaDescription = this.props.description || data.site.siteMetadata.description
          const lang = this.props.lang || 'en'
          const title = this.props.title
          const keywords = this.props.keywords || []
          return (
            <Helmet
              htmlAttributes={{
                lang,
              }}
              title={title}
              titleTemplate={`%s | ${data.site.siteMetadata.title}`}
              meta={[
                {
                  name: `description`,
                  content: metaDescription,
                },
                {
                  property: `og:title`,
                  content: title,
                },
                {
                  property: `og:description`,
                  content: metaDescription,
                },
                {
                  property: `og:type`,
                  content: `website`,
                },
                {
                  name: `twitter:card`,
                  content: `summary`,
                },
                {
                  name: `twitter:creator`,
                  content: data.site.siteMetadata.author.name,
                },
                {
                  name: `twitter:title`,
                  content: title,
                },
                {
                  name: `twitter:description`,
                  content: metaDescription,
                },
              ].concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : [],
              )}
            >
              <script>
              {
                  `(function(f, a, t, h, o, m){
                  a[h]=a[h]||function(){
                    (a[h].q=a[h].q||[]).push(arguments)
                  };
                  o=f.createElement('script'),
                  m=f.getElementsByTagName('script')[0];
                  o.async=1; o.src=t; o.id='fathom-script';
                  m.parentNode.insertBefore(o,m)
                })(document, window, '//tracking.eksma.xyz/tracker.js', 'fathom');
                fathom('set', 'siteId', 'OSSHM');
                fathom('trackPageview');`
              }
              </script>
            </Helmet>
          )
        }}
      />
    )
  }
}
