import * as React from 'react';
import Header from '../components/header';
import Layout from '../layouts/layout';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';

export default function Home({ data }) {
  console.log(data);

  return (
    <Layout>
      <Header title="Homepage" />

      <p>{data.allMarkdownRemark.totalCount} posts</p>

      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div
          key={node.id}
          css={css`
            border: 1px solid black;
            padding: 10px;
            margin: 10px;
          `}
        >
          <h3>{node.frontmatter.title}</h3>
          <small>{node.frontmatter.date}</small>
          <p>{node.excerpt}</p>
        </div>
      ))}

      <div>
        <img src="https://picsum.photos/400" alt="" />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          timeToRead
        }
      }
      totalCount
    }
  }
`;
