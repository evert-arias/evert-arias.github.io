import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, AboutWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <AboutWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
      </Thumbnail>
      <Details>
        <h1>About</h1>
        <p>
          I'm focused on helping the open source community with new developments and maintenance of existing projects,
          as well as innovating and creating new components and tools to contribute to the IoT world and web development.
        </p>
        <Button as={AnchorLink}> Download resume (PDF)</Button>
      </Details>
    </AboutWrapper>
  </Wrapper>
);
