import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import styles from "./ToggleWrapper.module.css"
import { useTheme } from "../../context/theme-context"

const Container = styled.header`
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.bgDark};
  margin-bottom: 1.45rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color};
  }
`

export const ToggleWrapper = ({ siteTitle }) => {
  const { theme, toggleTheme } = useTheme()
  return (
    <Container>
      <div
        className={styles.themeContainer}
      >
        <h1 style={{ margin: 0  }}>
          <Link to="/" style={{color: `#03a9f4`}}>{siteTitle}</Link>
        </h1>
        <div
          className={styles.btnWrapper}
          onClick={toggleTheme}
        >
          {theme === "dark" ? "🌙" : "🌞"}
        </div>
      </div>
    </Container>
  )
}
