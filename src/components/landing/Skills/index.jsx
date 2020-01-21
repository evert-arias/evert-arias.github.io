import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
      </Thumbnail>
      <Details>
        <h1>Open Source Solutions</h1>
        <p>
          I'm focused on helping the open source community with the development and maintenance of existing projects, as
          well as innovating and creating new components and tools to contribute to the IoT world and web development.
          If you or your company use any of my projects or like what I’m doing, please consider backing me so I can
          continue maintaining and evolving all my projects and new ones. Thank you for your support!
        </p>
        <Button as={AnchorLink} href="#contact">
          Donate
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
