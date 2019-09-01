import React from 'react'
import Typed from "typed.js"
import styles from "./typed.module.css"

export default class TypedComponent extends React.Component {
  componentDidMount() {
  	// If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const { strings } = this.props;
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
    	strings: strings,
      typeSpeed: 50,
      backSpeed: 50
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
  	// Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    return (
      <div className="wrap">
        <div className="type-wrap">
        <div className={styles.textEditorWrap}>
            <div className={styles.titleBar}>
              <span className="title">typed.js — bash — 80x<span className="terminal-height">10</span></span></div>
            <div className={styles.textBody}>
              $ <span
                  style={{ whiteSpace: 'pre' }}
                  ref={(el) => { this.el = el; }}
                />
            </div>
        </div>
        </div>
        <button onClick={() => this.typed.toggle()}>Toggle</button>
        <button onClick={() => this.typed.reset()}>Reset</button>
      </div>
    );
  }
}
