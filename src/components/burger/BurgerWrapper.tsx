import React, { useState, useEffect } from 'react';

import Burger from './burger';

interface BurgerWrapperProps {
  hide: boolean;
  burger:string;
  color: string;
  hoverOpacity: number;
  scale: number;
  marginTop: string;
  marginLeft: string;
}

const BurgerWrapper = (props: BurgerWrapperProps) => {
  const { hide } = props;
  const [active, setActive] = useState(hide)

  useEffect(()=>{
    if(!hide) {
      setActive(false);
    }
  }, [hide]);
  return (
    <Burger
      onClick={() => setActive(!active)}
      active={active}
      {...props}
    />
  );
}

export default BurgerWrapper
