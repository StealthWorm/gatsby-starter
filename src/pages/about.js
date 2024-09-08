import * as React from 'react';
import Header from '../components/header';
import { Link } from 'gatsby';
import Layout from '../layouts/layout';

export default function About() {
  return (
    <Layout>
      <Link
        to="/"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          gap: '1rem',
          width: '100%',
          margin: 'auto',
          padding: '10px',
        }}
      >
        Go Back
      </Link>

      <Header title="About Page" />
      <div>about dev</div>
      <p>Developers Info</p>
    </Layout>
  );
}
