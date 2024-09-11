/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby Title new`,
    author: `Thierry Santos`,
    email: `thierrypitela@hotmail.com`,
    description: `Gatsby description`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      // gatsby possui o proprio plugin de tipografia, porém precisa ser configurado
      //npm i --save gatsby-plugin-typography react-typography typography typography-theme-fairy-gates
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
