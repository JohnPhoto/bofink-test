import React from 'react';
import { useRouter } from 'next/router';
import { Link, Instruction } from '../../components';

export default () => {
  const router = useRouter();
  return (
    <div>
      <p>
        <em>OOOH you found the...</em>
      </p>
      <h1>
        <span>{router.query.word}</span>
        <span>advanced bonus Level</span>
      </h1>
      <ol>
        <Instruction id="a1">
          Make the first counter autoincrement every 5 seconds.
        </Instruction>
        <Instruction id="a2">Create another counter on a new page.</Instruction>
        <Instruction id="a3">
          Make it possible to start the new counter at any value based on url
          parameters.
        </Instruction>
        <Instruction id="a4">
          Seed a few appropriate links to let the user start the new counter at
          (e.g. 0, 5, 10, 1000).
        </Instruction>
      </ol>
      <h2>Code will be evaluated base on:</h2>
      <ul>
        <Instruction id="e1">DRY</Instruction>
        <Instruction id="e2">KISS</Instruction>
        <Instruction id="e3">linting & code formatting</Instruction>
        <Instruction id="e4">commit messages</Instruction>
      </ul>
      <Link href="/">Take me home again!</Link>
    </div>
  );
};
