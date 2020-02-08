import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Wrapper } from './styles';

const NavbarLinks = desktop => (
  <Wrapper desktop={desktop}>
    <AnchorLink href="#apps">Apps</AnchorLink>
    <AnchorLink href="#projects">Projects</AnchorLink>
    <a href="https://blog.earias.me">Blog</a>
    <AnchorLink href="#about">About</AnchorLink>
    <AnchorLink href="#contact">Contact</AnchorLink>
  </Wrapper>
);

export default NavbarLinks;
