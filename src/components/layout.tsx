import React from 'react'
import styled  from 'styled-components'
import "./layout.css"

import { useStaticQuery, graphql } from "gatsby";

import { AsideComponent } from "./off-canvas-sidebar/aside"
import { ScrollButton } from "./scoll-button/ScrollButton";
import { Footer } from "./footer/Footer";
import {Header} from "./toggle/header";

export const Layout = (props: any) => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`)

  const { children } = props;
  const Container = styled.div`
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.bg};
    min-height: 100vh;
    `

  return (
    <>
      {/* showNav 这里的作用是采用不同的navbar关闭方式，为false则可点击空白蒙板关闭 */}
      <AsideComponent showNav={false} />
      <Container>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main id="main" role="main">
            {children}
            <ScrollButton />
          </main>
          <Footer />
        </div>
      </Container>
    </>
  )
}
