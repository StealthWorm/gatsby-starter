import * as React from 'react';
import Header from '../components/header';
import { Link } from 'gatsby';

export default function Contact() {
  return (
    <div>
      <Link to="/">Go Back</Link>

      <Header title="Contact Page" />
      <div>Contact dev</div>
      <address>
        <a href="mailto:example@example.com">jim@example.com</a>
        <br />
        <a href="tel:+14155550132">+1 (415) 555‑0132</a>
      </address>
    </div>
  );
}
