import dotenv from 'dotenv';

import type { GatsbyConfig } from 'gatsby';

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `YOUR_TITLE`,
    description: `YOUR_DESCRIPTION`,
    siteUrl: process.env.GATSBY_SITE_URL,
  },
  plugins: [
    `@chakra-ui/gatsby-plugin`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        output: `/robots.txt`,
        resolveEnv: () =>
          process.env.GATSBY_IS_PROD ? `production` : `development`,
        env: {
          development: {
            policy: [{ userAgent: `*`, disallow: [`/`] }],
          },
          production: {
            policy: [
              {
                userAgent: `*`,
                allow: [`/`],
                disallow: [`/404`],
              },
            ],
          },
        },
      },
    },
  ],
};

export default config;
