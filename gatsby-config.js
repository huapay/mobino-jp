require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    description: `電気自動車（EV）、自動運転、バッテリーっといった自動車革命（Mobility Innovation）に関する中国の情報をいち早く分かりやすくご紹介します。`,
    siteUrl: "https://mobino.jp",
    title: "Mobino",
  },
  plugins: [
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          `G-RBD0FL0K5K`,
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-helmet`,
     {
      resolve: `gatsby-plugin-sass`,
      options: {
        additionalData: `
          @import "${__dirname}/src/styles/colors";
          @import "${__dirname}/src/styles/variables";
        `,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
  ],
};
