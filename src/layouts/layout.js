import React from 'react';
import './styles.css';
import { Link } from 'gatsby';

export default function Layout({ children }) {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          padding: '10px',
        }}
      >
        <h3
          style={{
            margin: 0,
            display: 'flex',
            backgroundColor: 'lightblue',
            flex: '0 0 70%',
          }}
        >
          <Link to="/about">My Site</Link>
        </h3>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flex: '0 0 30%',
            justifyContent: 'flex-end',
            gap: '1rem',
            backgroundColor: 'lightcoral',
          }}
        >
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      {children}
    </div>
  );
}
