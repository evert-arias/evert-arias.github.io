import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, Projects, Apps } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Apps />
    <Projects />
    <Skills />
    <Contact />
  </Layout>
);
