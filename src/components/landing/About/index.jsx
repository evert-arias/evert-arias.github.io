import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, AboutWrapper, Details, Thumbnail } from './styles';

export const About = () => (
  <Wrapper id="about">
    <AboutWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
      </Thumbnail>
      <Details>
        <h1>About</h1>
        <p>
          Software Developer. Learner, thinker and a motivated maker. Co-founder of{' '}
          <a href="https://iotbits.net">IOTBITS</a>, an startup company located in Tampa, Florida. On my spare time, I
          collaborate with the open source community with new developments and maintenance of existing projects, in
          addition to innovating and creating new components and tools to contribute to the IoT community and web
          development.
        </p>
        <Button as={AnchorLink}> Download resume (PDF)</Button>
      </Details>
    </AboutWrapper>
  </Wrapper>
);
