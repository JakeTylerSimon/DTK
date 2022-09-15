require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`, 
})
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // https://css-tricks.com/meta-theme-color-and-trickery/
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `5fcdg4jebvca`,
        accessToken: `MBhZCAPTKGe4GI_z54g5PEVPUSnGbcTVRDy8Am6lelc`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-firebase`,
    //   options: {
    //     credentials: {
    //       apiKey: process.env.apiKey,
    //       authDomain: process.env.authDomain,
    //       projectId: process.env.projectId,
    //       storageBucket: process.env.storageBucket,
    //       messagingSenderId: process.env.messagingSenderId,
    //       appId: process.env.appId,
    //       measurementId: process.env.measurementId,
    //     }
    //   },
    // },
  ],
}
