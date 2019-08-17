import React from 'react';
import styles from "./scroll.module.css"
import { FaArrowUp } from "react-icons/fa";

export class ScrollButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        intervalId: 0
    };
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }

  render () {
      return (<button className={styles.scroll}
               onClick={ () => { this.scrollToTop(); }}>
                <FaArrowUp />
              </button>)
   }
}
