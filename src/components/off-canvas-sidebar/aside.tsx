import React from 'react'
import {AsideNavbar} from "./navbar-theme"
import {Link} from 'gatsby'
import { FaBars } from 'react-icons/fa';

export default class AsideComponent extends React.Component {

  openBar() {
    document.querySelector(".sidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

  render() {
    return (
      <>
      <AsideNavbar>
        <div id="" className="sidenav">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
        </div>
`      </AsideNavbar>
      <div onClick={this.openBar}>
        <FaBars />
      </div>
      </>
    );
  }
}
