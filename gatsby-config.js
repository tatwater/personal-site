module.exports = {
  siteMetadata: {
    title: `Teagan Atwater`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-41735344-1',
        anonymize: true
      },
    },
  ],
}
