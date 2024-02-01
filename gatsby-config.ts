import type { GatsbyConfig, PluginRef } from "gatsby"
import "dotenv/config"

const config: GatsbyConfig = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-cara/gatsby-config.mjs
    siteTitleAlt: `Antonio Luna`,
    siteHeadline: `Antonio Luna - Portfolio`,
    siteUrl: `https://xantonioluna.github.io/`,
    siteDescription: `Portfolio site for Antonio Luna. Software Engineer with a passion for product engineering and growth.`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    author: `@XAntonioLuna`,
  },
  trailingSlash: `always`,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Antonio Luna - Portfolio`,
        short_name: `Antonio Luna`,
        description: `Portfolio site for Antonio Luna. Software Engineer with a passion for product engineering and growth.`,
        start_url: `/`,
        background_color: `#141821`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
}

export default config
