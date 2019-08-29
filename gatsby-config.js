/*
 * @Description: In User Settings Edit
 * @Author: ximenchuixue
 * @Date: 2019-08-10 18:24:40
 * @LastEditTime: 2019-08-14 00:16:45
 * @LastEditors: Please set LastEditors
 */
'use strict'

module.exports = {
  siteMetadata: {
    title: '道法自然 万物皆在时空',
    description: 'blog for xiang and me',
    siteUrl: 'https://blog.angelxiang.com',
    author: {
      name: 'chuixue ximen',
      url: 'https://blog.angelxiang.com',
      email: 'mshmayoushi@gmail.com',
    },
    social: {
      zhihu: 'https://zhihu.com/ximenchuixue',
      github: 'https://github.com/mshmyw',
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-less`,
      options: {
        strictMath: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1280,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-plugin-sass`,
            options: {
              includePaths: [
                require('path').resolve(__dirname, 'node_modules')
              ]
            }
          },
          {
            resolve: `gatsby-plugin-react-css-modules`,
            options: {
              // *.css files are included by default.
              // To support another syntax (e.g. SCSS),
              // add `postcss-scss` to your project's devDependencies
              // and add the following option here:
              filetypes: {
                ".scss": { syntax: `postcss-scss` },
              },

              // Exclude global styles from the plugin using a RegExp:
              exclude: `\/global\/`,
              // For all the options check babel-plugin-react-css-modules README link provided above
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `http://blog.angelxiang.com`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `chuixue ximen`,
        short_name: `blog.angelxiang.com`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/logo.png`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     // trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-fathom',
    //   options: {
    //     // Fathom server URL. Defaults to `cdn.usefathom.com`
    //     trackingUrl: 'tracking.eksma.xyz',
    //     // trackingUrl: 'localhost:8080',
    //     // Unique site id
    //     siteId: 'FATHOM_SITE_ID'
    //   }
    // },
    `gatsby-remark-reading-time`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
  ],
}
