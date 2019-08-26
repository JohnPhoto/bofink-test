import React from 'react';
import { number } from 'prop-types';

export const Counter = ({ value }) => {
  return (
    <div>
      <h2>Counter</h2>
      <b>{value}</b>
    </div>
  );
};

Counter.propTypes = {
  value: number.isRequired,
};

export default Counter;
