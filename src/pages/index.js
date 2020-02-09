import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, About, Contact, Projects, Apps } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Apps />
    <Projects />
    <About />
    <Contact />
  </Layout>
);
