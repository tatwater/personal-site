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
        path: `${__dirname}/_posts`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`,
  ],
}
