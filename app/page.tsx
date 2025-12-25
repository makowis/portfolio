import React, { FC } from 'react';
import Hero from './_components/organisms/hero';
import Skills from './_components/organisms/skills';
import Links from './_components/organisms/links';
import Contributions from './_components/organisms/contributions';

const Page: FC = () => (
  <>
    <Hero />
    <Links />
    <Skills />
    <Contributions />
  </>
);

export default Page;
