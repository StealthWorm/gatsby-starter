import * as React from 'react';
import Header from '../components/header';
import { Link } from 'gatsby';

export default function Home() {
  return (
    <div style={{ fontWeight: 'bold' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          width: '100%',
          margin: 'auto',
          padding: '10px',
        }}
      >
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <Header title="Homepage" />
      <div>Hello world Modified!</div>
      <p>Paragraph</p>
    </div>
  );
}
