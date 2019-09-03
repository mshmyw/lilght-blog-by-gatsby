import React from 'react'
import {GlobalStyle, styled} from '../styles/GlobalStyle'
import "./layout.css"

import {AsideComponent} from "./off-canvas-sidebar/aside"
import {ScrollButton} from "./scoll-button/ScrollButton";
import SvgComponent from "./icons/heart"


const StyledFooter = styled.footer`
  padding-bottom: 36px;
`

export default class Layout extends React.Component {
  state = {showNav: false};

  render() {
    const {children} = this.props

    return (
      <>
        <GlobalStyle />
        {/* showNav 这里的作用是采用不同的navbar关闭方式，为false则可点击空白蒙板关闭 */}
        <AsideComponent showNav = {false} />
        <main id="main" className="content" role="main">
          {children}
          <ScrollButton />
        </main>
        <StyledFooter className="footer">
          © {new Date().getFullYear()},{` `}
          {/* https://jeffrafter.com */}
          <a href="https://blog.angelxiang.com">blog.angelxiang.com</a>.
          <span>
          <SvgComponent/>
          </span>
          Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>.
          {` `} analytics
          <a href="https://tracking.eksma.xyz"> 用户分析</a>
          <span>
          <img src="http://39.108.57.183:8020/api/v1/count/tag.svg?url=http%3A%2F%2Fblog.angelxiang.com" alt="Hits"/>
          </span>
        </StyledFooter>
      </>
    )
  }
}
