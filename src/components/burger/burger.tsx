// from https://github.com/mattvox/react-css-burger

import React from 'react';
import styles from "./burger.module.css"

enum BurgerType {
  Collapse = "Collapse",
  Spin="Spin",
  Spring="Spring"
}

export interface BurgerProps {
  active?: boolean;
  onClick?: () => any;
  burger?: string,  // BurgerType's value
  color?: string,
  hoverOpacity?: number,
  scale?: number,
  marginTop?: string,
  marginLeft?: string,
  style?: object,
}

export default class Burger extends React.Component<BurgerProps> {

  public static defaultProps = {
    burger: BurgerType.Collapse,
    color: '#000',
    hoverOpacity: 1,
    scale: 1,
    marginTop: '25px',
    marginLeft: '25px',
  };

  render() {
    // https://www.gatsbyjs.org/docs/debugging-html-builds/
    // const root = document.documentElement;
    const {
      active,
      onClick,
      burger,
      color,
      hoverOpacity,
      scale,
      marginTop,
      marginLeft,
      style,
    } = this.props;

    // root.style.setProperty('--burger-color', color);
    // root.style.setProperty('--burger-opacity-hover', hoverOpacity);
    // root.style.setProperty('--burger-scale', scale as any);
    // root.style.setProperty('--burger-margin-top', marginTop);
    // root.style.setProperty('--burger-margin-left', marginLeft);
    const convertDict = {
      spin: styles.hamburgerSpin,
      spring: styles.hamburgerSpring,
    }
    const classes = {
      burger: `${convertDict[burger]} ${styles.hamburgerSpin}`,
      active: `${active ? styles.isActive:''}`,
    };

      return (
        <div
          className={`${classes.burger}-r ${classes.active}`}
          onClick={onClick}
          style={style}
        >
          <span className={styles.hamburgerBox}>
            <span className={styles.hamburgerInner}></span>
          </span>
        </div>
      );
    }
}
