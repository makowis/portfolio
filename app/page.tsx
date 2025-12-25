import React from 'react';
import Hero from './_components/organisms/hero';
import Skills from './_components/organisms/skills';
import Links from './_components/organisms/links';
import Contributions from './_components/organisms/contributions';
import Instagram from './_components/organisms/instagram';

export default function Page() {
  return (
    <>
      <Hero />
      <Links />
      <Skills />
      <Contributions />
      <Instagram />
    </>
  );
}
