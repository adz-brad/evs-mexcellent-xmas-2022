
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Ev's Mexcellent Xmas`,
    description: ``,
    author: ``,
    siteUrl: `https://evsmexcellentxmas.netlify.app`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-postcss',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
