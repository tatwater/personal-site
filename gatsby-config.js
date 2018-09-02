module.exports = {
  siteMetadata: {
    description: '',
    keywords: '',
    title: 'Teagan Atwater',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
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
  ],
}
