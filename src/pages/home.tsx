import React from 'react';

import { Seo } from '@/components/atoms';
import { Layout } from '@/components/layouts';
import { HomeHero } from '@/components/pages/Home/HomeHero';

import { useSeo } from '@/hooks';

interface Props {}

function Home(props: Props): JSX.Element {
  const {} = props;

  return (
    <Layout>
      <HomeHero />
    </Layout>
  );
}

export function Head(props: Props) {
  const {} = props;

  const seo = useSeo();

  return <Seo {...seo} />;
}

export default Home;
