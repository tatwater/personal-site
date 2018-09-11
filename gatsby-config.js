module.exports = {
  siteMetadata: {
    description: '',
    keywords: '',
    title: 'Teagan Atwater',
  },
  plugins: [
    {
      resolve: `@wapps/gatsby-plugin-fonts`,
      options: {
        googleFonts: {
          families: [
            'Roboto:400,500',
            'Roboto Mono:400,500',
            'Poppins:300,500,700',
            'Open Sans:400,500,700',
          ],
          subsets: [
            'latin',
          ]
        },
      },
    },
    `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/_cms`,
        name: "markdown-files",
      },
    },
    `gatsby-transformer-remark`,
  ],
}
