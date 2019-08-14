import React from 'react'
import {AsideNavbar} from "./navbar-theme"
import {Link} from 'gatsby'
import { FaBars, FaDoorClosed } from 'react-icons/fa';

export default class AsideComponent extends React.Component {

  openBar() {
    document.querySelector(".sidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

  closeBar() {
    document.querySelector(".sidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  }

  render() {
    return (
      <>
      <AsideNavbar>
        <div className="sidenav">
        <a className="closebtn" onClick={this.closeBar}><FaDoorClosed/></a>
          <Link to={`/`}>&</Link>
          <Link to={`/tags`}>Tags</Link>
          <Link to={`/about`}>About</Link>
        </div>
`      </AsideNavbar>
      <div onClick={this.openBar}>
        <FaBars />
      </div>
      </>
    );
  }
}
