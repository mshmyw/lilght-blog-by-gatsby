import React from 'react'
import {AsideNavbar} from "./navbar-theme"
import {Link} from 'gatsby'
import { FaBars } from 'react-icons/fa';
import styles from "./aside.module.css"
import Burger from "../burger/BurgerWrapper";
export default class AsideComponent extends React.Component {
  state = {
    active: false,
  };

  openBar() {
    if(document.querySelector(".sidenav")) {
      document.querySelector(".sidenav").style.width = "250px";
      document.getElementById("main").style.marginRight = "250px";
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
  }

  closeBar() {
    if(document.querySelector(".sidenav")) {
      document.querySelector(".sidenav").style.width = "0";
      document.getElementById("main").style.marginRight= "0";
      document.body.style.backgroundColor = "white";
    }
  }

  render() {
    const burger = "spin";
    // TODO 这里的实现感觉是有问题的
    if(this.state.active) {
      this.openBar();
    }
    if(!this.state.active) {
      this.closeBar();
    }

    return (
      <>
      <AsideNavbar>
        <div className="sidenav">
          {/* <a className="closebtn" onClick={this.closeBar}>
            &times;
            <Burger
              burger={burger}
              color="#0FAFFF"
              hoverOpacity={0.8}
              scale={1}
              marginTop="0"
              marginLeft="0"
            />
            </a> */}
          <Link to={`/`}>&</Link>
          <Link to={`/tags`}>Tags</Link>
          <Link to={`/about`}>About</Link>
        </div>
`      </AsideNavbar>
      <div className={styles.navBarWrap} onClick={() => this.setState({active: !this.state.active})}>
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
}
