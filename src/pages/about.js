import * as React from 'react';
import Header from '../components/header';
import { Link } from 'gatsby';

export default function About() {
  return (
    <div>
      <Link to="/">Go Back</Link>

      <Header title="About Page" />
      <div>about dev</div>
      <p>Developers Info</p>
    </div>
  );
}
