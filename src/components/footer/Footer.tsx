import React from "react"
import SvgComponent from "../icons/heart"
import styles from "./Footer.module.css"

export const Footer = () => {

  return (<footer className={styles.footerWrapper}
      style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <div style={{marginBottom: 10}}>
      Built with
        <a className={styles.aWrapper} href="https://www.gatsbyjs.org" target="_blank">Gatsby</a>
      </div>

      <div style={{marginBottom: 10}}>
        © {new Date().getFullYear() + ' '}
        <SvgComponent />
        <a className={styles.aWrapper} href="https://blog.angelxiang.com" target="_blank">blog.angelxiang.com</a>
      </div>

      <div className={styles.imgWrapper}>
        <div>
          <a className={styles.aWrapper} href="https://tracking.eksma.xyz" target="_blank"> 用户分析</a>
        </div>
        <div style={{marginLeft: 10, marginTop: -3}}>
          <img src="http://39.108.57.183:8020/api/v1/count/tag.svg?url=http%3A%2F%2Fblog.angelxiang.com" alt="Hits" />
        </div>
    </div>
  </footer>
  )
}
