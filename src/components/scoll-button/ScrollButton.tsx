import React from 'react'
import styled from 'styled-components'
import { FaArrowUp } from "react-icons/fa";

export class ScrollButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hasScrolled: false }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
  }

  onScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    this.setState({ hasScrolled: scrollTop > 200 });  // 距离视图顶部200时，出现”back Top“ 按钮
  }

  scrollToTop = () => {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox
  }

  render() {
    return (
      <>
        {this.state.hasScrolled && (
          <ScrollToTopIconContainer onClick={this.scrollToTop}>
            <Button><FaArrowUp/></Button>
          </ScrollToTopIconContainer>
        )}
      </>
    )
  }
}

const ScrollToTopIconContainer = styled.div`
  position: fixed;
  bottom: 25px;
  right: 25px;
  margin-left: -50px;
  z-index: 2;
  cursor: pointer;
  opacity: 0.4;
  text-align: center;
  &:hover {
    opacity: 1;
    animation: wiggle 1s ease;
    animation-iteration-count: 1;
  }
  @keyframes wiggle {
    20% { transform: translateY(6px); }
    40% { transform: translateY(-6px); }
    60% { transform: translateY(4px); }
    80% { transform: translateY(-2px); }
    100% { transform: translateY(0); }
  }
`

const Button = styled.div`
  background: black;
  color: white;
  font-family: Teko;
  font-size: 16px;
  line-height: 30px;
  border-radius: 50%;
  width: 40px;
  padding-top: 4px;
`
