import styled from 'styled-components'

export const AsideNavbar = styled.div`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 8;
  top: 0;
  right: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;

  a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }

  a:hover {
    color: #f1f1f1;
  }

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
`

export interface AsideProps {
  showNav: boolean;
}

export const NavBarOverLayWrap = styled("div")<AsideProps>`
left: 0px;
top: 0px;
width: 100%;
height: 100%;
position: fixed;
overflow: hidden;
z-index: 8;
pointer-events: ${props => props.showNav ? `auto` : `none`};

a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

a:hover {
  color: #f1f1f1;
}

@media screen and (max-height: 450px) {
.sidenav {padding-top: 15px;}
.sidenav a {font-size: 18px;}
}
`

export const OverLayWrap = styled("div")<AsideProps>`
position : absolute;
width    : 100%;
height   : 100%;
top      : 0;
left     : 0;
opacity  : ${props => props.showNav ? 1 : 0};
background : rgba(0,0,0,0.4);
transition : opacity 0.3s cubic-bezier(0, 0, 0.3, 1);
will-change: opacity;
`

export const Nav = styled("div")<AsideProps>`
    position   : relative;
    width      : 90%;
    max-width   : 400px;
    height     : 100%;
    background : #fff;
    box-shadow  : 2px 0 12px rgba(0,0,0,0.4);
    transform  : ${props => props.showNav ? `none`: `translateX(102%)`};
    transition : transform 0.22s cubic-bezier(0,0,0.3,1);
    display    : flex;
    will-change : transform;
    flex-direction: column;
    float: right;
`
