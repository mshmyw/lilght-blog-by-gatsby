import React, { useState } from 'react';

import Burger from './burger';

const BurgerWrapper = (props: any) => {
  const [active, setActive] = useState(false)

  return (
    <Burger
      onClick={() => setActive(!active)}
      active={active}
      {...props}
    />
  );
}

export default BurgerWrapper
