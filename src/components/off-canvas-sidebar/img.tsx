/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./img.module.css";
import { Identicon } from "../identicons/identicon"
export const ImgShow = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "furby.png"}) {
        childImageSharp {
          fluid(maxWidth: 50) {
            originalName
            src
          }
        }
      }
    }
  `)

  const {  } = data.file.childImageSharp.fluid;
  return (
    <>
      {/* <img
        className={styles.imgWrap}
        src={data.file.childImageSharp.fluid.src}
        alt={data.file.childImageSharp.fluid.originalName}
      /> */}
      <Identicon
      className={styles.imgWrap}
      bg="#F78DA7"
      fg="#00D084"
      message={"ximenchuixue"}/>
      <p style = {{textAlign: 'center', marginTop: 0}}>
        ximenchuixue
      </p>

      </>
  )
}
