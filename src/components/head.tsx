import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import styles from "./head.module.css"

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

interface HeadProps {
title: string
description?: string
keywords?: string[]
}

export const Head = (props: HeadProps) => {
  const data: StaticQueryData = useStaticQuery(graphql`
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
    }`);
  const {title, keywords, description} = props
  const metaDescription = description || data.site.siteMetadata.description
  const lang = 'en'

  return (
    <Helmet
      htmlAttributes={{ lang, }}
      title={title}
      titleTemplate={`%s | ${title}`}
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
      ].concat(
        keywords && keywords.length > 0
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
                // fathom('set', 'siteId', 'CSMTR');  // localhost:8000
                fathom('set', 'siteId', 'PTHSA'); // blog.angelxiang.com
                fathom('trackPageview');`
        }
      </script>
    </Helmet>
  )
}
