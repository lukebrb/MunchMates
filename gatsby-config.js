require(`dotenv`).config({
  path: `.env`
});

module.exports = {
  siteMetadata: {
    siteTitle: `Munchmates`,
    siteTitleAlt: `Munchmates`,
    siteHeadline: `Munchmates`,
    siteUrl: `https://www.munchmates.club`,
    siteDescription: `Munchmates`,
    siteLanguage: `English`,
    siteImage: ``,
    author: `Munchmates`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      options: {}
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Munchmates`,
        short_name: `Munchmates`,
        description: `Munchmates | The next best way to network.`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 10,
              showCaptions: true
            }
          }
        ]
      }
    }
  ]
};
