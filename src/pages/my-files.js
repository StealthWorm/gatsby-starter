import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout';
import { css } from '@emotion/react';

export default function MyFiles({ data }) {
  console.log(data);

  return (
    <Layout>
      <table>
        <thead
          css={css`
            border: 1px solid black;
            border-collapse: collapse;
            th {
              border: 1px solid black;
            }
            td {
              border: 1px solid black;
            }
            tr {
              border: 1px solid black;
            }
            th,
            td {
              padding: 10px;
            }
          `}
        >
          <tr>
            <th>Relative Path</th>
            <th>File Size</th>
            <th>Extension</th>
            <th>Birth Time</th>
          </tr>
        </thead>
        <tbody>
          {data.allFile.edges.map(({ node }, index) => (
            <tr key={index}>
              <td>{node.relativePath}</td>
              <td>{node.prettySize}</td>
              <td>{node.extension}</td>
              <td>{node.birthTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}

export const query = graphql`
  query MyQuery {
    allFile {
      edges {
        node {
          extension
          prettySize
          relativePath
          birthTime(fromNow: true)
        }
      }
    }
  }
`;
