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

const defaultProps = {
  burger: BurgerType.Collapse,
  color: '#000',
  hoverOpacity: 1,
  scale: 1,
  marginTop: '25px',
  marginLeft: '25px',
};

 const Burger = (props: BurgerProps) => {
    const { active, onClick, burger, style } = props;

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

export default Burger
