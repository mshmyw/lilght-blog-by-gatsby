import React, {useState, useEffect, useRef} from 'react'
import Typed from "typed.js"
import styles from "./typed.module.css"

interface TypedComponentProps {
  strings: string[];
}

const TypedComponent = (props: TypedComponentProps) => {
  const { strings } = props;
  const inputEl = useRef(null);
  const [typed, setTyped] = useState(null);
  useEffect(()=> {
  	// If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
    	strings,
      typeSpeed: 50,
      backSpeed: 50
    };
    // this.el refers to the <span> in the render() method
    const typedObj = new Typed(inputEl.current, options);
    setTyped(typedObj);
    return () => {
  	// Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    typed && typed.destroy();
    }
  }, [strings]);


    return (
      <div className="wrap">
        <div className="type-wrap">
        <div className={styles.textEditorWrap}>
            <div className={styles.titleBar}>
              <span className="title">typed.js — bash — 80x<span className="terminal-height">10</span></span></div>
            <div className={styles.textBody}>
              $ <span
                  style={{ whiteSpace: 'pre' }}
                  ref={inputEl}
                />
            </div>
        </div>
        </div>
      </div>
    );
  }

export default TypedComponent
