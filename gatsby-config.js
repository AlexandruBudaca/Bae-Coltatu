const activeEnv = process.env.NODE_ENV || "development"

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: `BAE`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logoColtatu.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-mongodb",
      options: {
        dbName: "coltatu",
        collection: [`concepte`, `concursuri`, `proiecte`],
        server: {
          address: "alex-shard-00-00.njtpl.mongodb.net",
          port: 27017,
        },
        auth: {
          user: `${process.env.USER}`,
          password: `${process.env.KEY}`,
        },
        extraParams: {
          replicaSet: "atlas-nq7h79-shard-0",
          ssl: true,
          authSource: "admin",
          retryWrites: true,
        },
        preserveObjectIds: true,
      },
    },
  ],
}
