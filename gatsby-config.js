require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Jamie Robertson`,
    description: `Frontend developer based in Edinburgh, Scotland. Currently focusing on React based projects.`,
    author: `@jamie-l-robertson`,
    siteUrl: `https://www.jamie-robertson.uk`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_TRACKING_ID,
        head: true,
        anonymize: true,
        exclude: ["/preview/**"],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.jamie-robertson.uk',
        sitemap: 'https://www.jamie-robertson.uk/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    `gatsby-plugin-typescript`,
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
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jamie Robertson - portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#B6C649`,
        theme_color: `#B6C649`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_CMS_TOKEN,
        previewMode: false,
        disableLiveReload: false
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto`,
          `Solway`,
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [],
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-plugin-csp`,
    //   options: {
    //     disableOnDev: true,
    //     reportOnly: false, // Changes header to Content-Security-Policy-Report-Only for csp testing purposes
    //     mergeScriptHashes: true, // you can disable scripts sha256 hashes
    //     mergeStyleHashes: false, // you can disable styles sha256 hashes
    //     mergeDefaultDirectives: true,
    //     directives: {
    //       "script-src": "'self' www.google-analytics.com",
    //       "style-src": "'self' 'unsafe-inline' fonts.googleapis.com",
    //       "img-src": "'self' data: www.google-analytics.com",
    //       "font-src": "'self' fonts.gstatic.com",
    //       "connect-src": "'self' www.google-analytics.com"
    //       // you can add your directives or override defaults
    //     }
    //   }
    // }
  ]
}
