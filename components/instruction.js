import React, { useState } from 'react';
import { string, node } from 'prop-types';
import styled from 'styled-components';

const Label = styled.label`
  input[type='checkbox']:checked + & {
    text-decoration: line-through;
  }
`;

const PrettySpan = styled('span')`
  color: rebeccapurple;
  font-weight: bold;
  &::after {
    content: ' ';
  }
`;

export const Instruction = ({ id, children, type }) => {
  const [isDone, setIsDone] = useState(false);
  return (
    <li>
      <input
        id={id}
        type="checkbox"
        onChange={() => setIsDone(!isDone)}
        value={isDone}
      />
      <Label htmlFor={id}>
        {type === 'optional' ? <PrettySpan>Optional:</PrettySpan> : null}
        {children}
      </Label>
    </li>
  );
};

Instruction.defaultProps = {
  type: 'mandatory',
};

Instruction.propTypes = {
  id: string.isRequired,
  type: string,
  children: node.isRequired,
};

export default Instruction;
