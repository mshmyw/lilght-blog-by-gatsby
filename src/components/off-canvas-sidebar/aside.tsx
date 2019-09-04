// from https://github.com/gauravchl/react-simple-sidenav

import React, {useState} from 'react'
import {AsideNavbar, NavBarOverLayWrap, Nav, OverLayWrap} from "./navbar-theme"
import {Link, graphql} from 'gatsby'
import styles from "./aside.module.css"
import Burger from "../burger/BurgerWrapper";
import { ImgShow } from "./img";

export interface AsideProps {
  showNav: boolean;
  onHideNav?(): any;
  readonly data?: PageQueryData
}

export const AsideComponent = (props: AsideProps) => {
  const [active, setActive] = useState(false);

  const hideNav = () => {
    setActive(!active);
  }

    const {showNav} = props;
    const burger = "spin";
    const width = active ? 250 : 0;  // sidebar width

    return (
      <>
      {showNav ?
      <AsideNavbar style = {{width}}>
            <Link to={`/`}>&</Link>
            <Link to={`/tags`}>Tags</Link>
            <Link to={`/about`}>About</Link>
      </AsideNavbar>
      :
      <NavBarOverLayWrap
          showNav = {active}
        >
          <OverLayWrap
            showNav = {active}
            onClick={hideNav}></OverLayWrap>
          <Nav showNav = {active}>
            <ImgShow/>
            <Link to={`/`}>&</Link>
            <Link to={`/tags`}>Tags</Link>
            <Link to={`/about`}>About</Link>
          </Nav>
        </NavBarOverLayWrap>
      }

      <div className={styles.navBarWrap} onClick={() => {setActive(!active)}}>
        {/* <FaBars /> */}
        <Burger
          burger={burger}
          color="#0FAFFF"
          hoverOpacity={0.8}
          scale={1}
          marginTop="0"
          marginLeft="0"
        />
      </div>
      </>
    );
}

interface PageQueryData {
  file: {
    childImageSharp: {
      fluid:  {
        originalName: string
      }
    }
  }
}

export const pageQuery = graphql`
query {
  file(relativePath: {eq: "furby.png"}) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        originalName
      }
    }
  }
}
`;
