/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

export const ImgShow = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "furby.png"}) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            originalName
            src
          }
        }
      }
    }
  `)

  const {  } = data.file.childImageSharp.fluid;
  return (
    <div
      style={{
        display: `flex`,
      }}
    >
      <img
        style={{
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        src={data.file.childImageSharp.fluid.src}
        alt={data.file.childImageSharp.fluid.originalName}
      />
      <p>
        {` `}
          You should follow him on Twitter
      </p>
    </div>
  )
}
