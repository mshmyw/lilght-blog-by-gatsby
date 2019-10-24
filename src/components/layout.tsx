import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import "./layout.css"
import styles from "./head.module.css"

import { useStaticQuery, graphql } from "gatsby";

import { AsideComponent } from "./off-canvas-sidebar/aside"
import { ScrollButton } from "./scoll-button/ScrollButton";
import { Footer } from "./footer/Footer";
import { ToggleWrapper } from "./toggle/ToggleWrapper";
import { css, randomColor } from "./utils";
import { ClapButton } from "./clap-button/clap-button";

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
    `;

  const hearts = [];
  const [heart, setHeart] = useState([]);
  const requestRef = React.useRef(0);

  const createHeart = (event) => {
    if (!event) {
      return;
    }
    if(typeof document !== 'undefined') {
      const d = document.createElement("div");
      d.className = "heart";
      heart.push({
        el: d,
        x: event.clientX - 5,
        y: event.clientY - 5,
        scale: 1,
        alpha: 1,
        color: randomColor()
      });
      document.body.appendChild(d);
    }
  }

  const attachEvent = () => {
    if(typeof window !== 'undefined') {
      const old = typeof window.onclick === "function" && window.onclick;
      window.onclick = function (event) {
        old && old();
        createHeart(event);
      }
    }
  }

  const gameloop = () => {
    for (let i = 0; i < hearts.length; i++) {
      if (hearts[i].alpha <= 0) {
        (typeof document !== undefined) && document.body.removeChild(hearts[i].el);
        hearts.splice(i, 1);
        continue;
      }
      hearts[i].y--;
      hearts[i].scale += 0.004;
      hearts[i].alpha -= 0.013;
      hearts[i].el.style.cssText = "left:" + hearts[i].x + "px;top:" + hearts[i].y + "px;opacity:" + hearts[i].alpha + ";transform:scale(" + hearts[i].scale + "," + hearts[i].scale + ") rotate(45deg);background:" + hearts[i].color;
    }
    setHeart(hearts);
    requestAnimationFrame(gameloop);
  }

  css(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}");
  attachEvent();

  useEffect(() => {
    requestRef.current = requestAnimationFrame(gameloop);
    return () => cancelAnimationFrame(requestRef.current);
  }, []); // Make sure the effect runs only once


  return (
    <>
      {/* showNav 这里的作用是采用不同的navbar关闭方式，为false则可点击空白蒙板关闭 */}
      <AsideComponent showNav={false} />
      <Container>
        <ToggleWrapper siteTitle={data.site.siteMetadata.title} />
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
            <ClapButton/>
            <ScrollButton />
          </main>
          <Footer />
        </div>
      </Container>
    </>
  )
}
