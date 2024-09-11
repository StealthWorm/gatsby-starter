import * as React from 'react';
import Header from '../components/header';
import Layout from '../layouts/layout';

export default function Home() {
  return (
    <Layout>
      <Header title="Homepage" />
      <div>
        <img src="https://picsum.photos/400" alt="" />
      </div>
    </Layout>
  );
}
