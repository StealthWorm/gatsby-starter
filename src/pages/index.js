import * as React from 'react';
import Header from '../components/header';
import { Link } from 'gatsby';
import Layout from '../layouts/layout';

export default function Home() {
  return (
    <Layout>
      <Header title="Homepage" />
      <div>Hello world Modified!</div>
      <p>Paragraph</p>
    </Layout>
  );
}
