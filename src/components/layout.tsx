import React from 'react'
import {GlobalStyle, styled} from '../styles/theme'

import styles from "./layout.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import {AsideComponent} from "./off-canvas-sidebar/aside"
import {ScrollButton} from "./scoll-button/ScrollButton";

const StyledNav = styled.nav`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 16px;

    a {
      background: none;
    }
  }
`

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
        {/* <StyledNav className="navigation">
          <ul>
            <li>
              <Link to={`/`}>&</Link>
            </li>
            <li>
              <Link to={`/tags`}>Tags</Link>
            </li>
            <li>
              <Link to={`/about`}>About</Link>
            </li>
          </ul>
        </StyledNav> */}
        <main id="main" className="content" role="main">
          {children}
          <ScrollButton />
        </main>
        <StyledFooter className="footer">
          © {new Date().getFullYear()},{` `}
          <a href="https://jeffrafter.com">jeffrafter.com</a>.
          <span>
          <FontAwesomeIcon icon={faHeart} pulse className={styles.withLove}/>
          {/* <FaHeart className={styles.withLove+ " faa-pulse animated"}/> */}
          </span>
          Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </StyledFooter>
      </>
    )
  }
}
