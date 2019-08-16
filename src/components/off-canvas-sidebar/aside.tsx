import React from 'react'
import {AsideNavbar, NavBarOverLayWrap, Nav, OverLayWrap} from "./navbar-theme"
import {Link} from 'gatsby'
import styles from "./aside.module.css"
import Burger from "../burger/BurgerWrapper";

export interface AsideProps {
  showNav: boolean;
  onHideNav(): any;
}

export interface AsideState {
  active: boolean;
}

export default class AsideComponent extends React.Component<AsideProps, AsideState> {
  constructor(props) {
    super(props);
    this.hideNav = this.hideNav.bind(this);
    this.state = {
      active: false,
    };
  }


  openBar() {
      // document.getElementById("main").style.marginRight = "250px";
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

  closeBar() {
      // document.getElementById("main").style.marginRight= "0";
      document.body.style.backgroundColor = "white";
  }

  hideNav() {
    this.setState({active: !this.state.active})
  }

  render() {
    const {showNav} = this.props;
    const burger = "spin";
    const width = this.state.active ? 250 : 0;  // sidebar width

    // TODO 这里的实现感觉是有问题的
    if(this.state.active) {
      this.openBar();
    }
    if(!this.state.active) {
      this.closeBar();
    }

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
          showNav = {this.state.active}
        >
          <OverLayWrap
            showNav = {this.state.active}
            onClick={this.hideNav}></OverLayWrap>
          <Nav showNav = {this.state.active}>
            <Link to={`/`}>&</Link>
            <Link to={`/tags`}>Tags</Link>
            <Link to={`/about`}>About</Link>
          </Nav>
        </NavBarOverLayWrap>
      }

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
