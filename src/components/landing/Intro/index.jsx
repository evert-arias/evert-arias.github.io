import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { defaultDescription } from 'data/config';

import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>Welcome!</h1>
        <h4>{defaultDescription}</h4>
        <Button as={AnchorLink} href="#contact">
          Contact
        </Button>
      </Details>
      <Thumbnail>
        <img src={dev} alt={defaultDescription} />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
);
