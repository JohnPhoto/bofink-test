import React from 'react';
import styled from 'styled-components';
import { string, node } from 'prop-types';
import NextLink from 'next/link';

const A = styled.a`
  text-decoration: none;
`;

export const Link = ({ href, children }) => (
  <NextLink passHref href={href}>
    <A>{children}</A>
  </NextLink>
);

Link.propTypes = {
  children: node.isRequired,
  href: string.isRequired,
};

export default Link;
