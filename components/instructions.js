import React from 'react';
import styled from 'styled-components';
import { node } from 'prop-types';
import { Link } from './link';
import { Instruction } from './instruction';

const Emoji = ({ value }) => (
  <span role="img" aria-label="emoji">
    {value}
  </span>
);

Emoji.propTypes = {
  value: node.isRequired,
};

const Em = styled.em`
  &:before,
  &:after {
    content: ' ';
  }
`;

export const Instructions = () => {
  return (
    <ol>
      <Instruction id="i1">Create 2 buttons: + and -</Instruction>
      <Instruction id="i2">
        Make them change the value of the
        <Em>Counter</Em>
        component below.
      </Instruction>
      <Instruction id="i3.1">
        Let the user set the value of the counter to any integer.
      </Instruction>
      <Instruction id="i3.2">
        ... Remember input validation with feedback to the user.
      </Instruction>
      <Instruction id="o1" type="optional">
        Make it all look pretty and sparkling!
        <Link href="/advanced/Super">
          <Emoji value="💅" />
        </Link>
        <Emoji value="🎉" />
      </Instruction>
    </ol>
  );
};

export default Instructions;
