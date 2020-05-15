module.exports = {
  siteMetadata: {
    title: `Animal Facts`,
    description: `A site to provide random animal facts`,
    author: `Joshua Taguicana`,
    keywords: [
      "Animals",
      "Facts",
      "Animal Facts",
      "Orca",
      "Giraffe",
      "Blue Whales",
      "Gorillas",
      "Turtle",
      "Platypus",
      "Lion",
      "Tiger",
      "Octopus",
      "Elephants",
      "Narwhals",
      "Panda",
      "Penguin",
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `animals`,
        path: `${__dirname}/data`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
