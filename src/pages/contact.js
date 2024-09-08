import * as React from 'react';
import Header from '../components/header';
import { Link } from 'gatsby';
import Layout from '../layouts/layout';

export default function Contact() {
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

      <Header title="Contact Page" />
      <div>Contact dev</div>
      <address>
        <a href="mailto:example@example.com">jim@example.com</a>
        <br />
        <a href="tel:+14155550132">+1 (415) 555‑0132</a>
      </address>
    </Layout>
  );
}
