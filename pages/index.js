import React, { useState } from 'react';

import { Title, Instructions, Counter } from '../components';

export default () => {
  const [value /* , setValue */] = useState(0);
  return (
    <>
      <Title />
      <Instructions />
      <Counter value={value} />
    </>
  );
};
