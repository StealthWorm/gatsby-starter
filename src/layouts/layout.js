import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { css } from '@emotion/react';
import { rhythm } from '../utils/typography';

export default function Layout({ children }) {
  // usado para definir a consulta do graphql que queremos usar
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <div
      css={css`
        display: flex;
        max-width: 700px;
        margin: 0 auto;
        flex-direction: column;
        width: 100%;
        margin: 0;
        justify-content: center;
        padding: ${rhythm(2)};
      `}
    >
      <header
        css={css`
          display: flex;
          background: #f1f2f3;
          justify-content: space-between;
          align-items: center;
          margin-bottom: ${rhythm(2)};
        `}
      >
        <Link to="/">
          <h3
            css={css`
              display: inline-block;
              align-items: center;
              justify-content: center;
              font-style: normal;
              font-weight: bold;
              width: 100%;
              text-decoration: none;
            `}
          >
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <div
          css={css`
            display: flex;
            gap: 1rem;
            justify-content: flex-end;
            font-style: normal;
          `}
        >
          <Link
            css={css`
              text-decoration: none;
            `}
            to="/about"
          >
            About
          </Link>
          <Link
            css={css`
              text-decoration: none;
            `}
            to="/contact"
          >
            Contact
          </Link>
        </div>
      </header>
      {children}
    </div>
  );
}
