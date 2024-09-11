import * as React from 'react';
import Header from '../components/header';
import Layout from '../layouts/layout';

export default function About() {
  return (
    <Layout>
      <Header title="About Page" />
      <div>About Me</div>
      <p>Developer's Info</p>
      {/* <span>Name: {data.site.siteMetadata.author}</span>
      <span>Email: {data.site.siteMetadata.email}</span> */}
    </Layout>
  );
}
