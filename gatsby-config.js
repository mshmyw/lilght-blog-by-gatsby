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
    title: 'MxM',
    description: '道法自然 万物皆在时空',
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
        name: `images`,
        path: `${__dirname}/src/images`,
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
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
            // Class prefix for <pre> tags containing syntax highlighting;
            // defaults to 'language-' (eg <pre class="language-js">).
            // If your site loads Prism into the browser at runtime,
            // (eg for use with libraries like react-live),
            // you may use this to prevent Prism from re-processing syntax.
            // This is an uncommon use-case though;
            // If you're unsure, it's best to use the default value.
            classPrefix: "language-",
            // This is used to allow setting a language for inline code
            // (i.e. single backticks) by creating a separator.
            // This separator is a string and will do no white-space
            // stripping.
            // A suggested value for English speakers is the non-ascii
            // character '›'.
            inlineCodeMarker: null,
            // This lets you set up language aliases.  For example,
            // setting this to '{ sh: "bash" }' will let you use
            // the language "sh" which will highlight using the
            // bash highlighter.
            aliases: {},
            // This toggles the display of line numbers globally alongside the code.
            // To use it, add the following line in src/layouts/index.js
            // right after importing the prism color scheme:
            //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
            // Defaults to false.
            // If you wish to only show line numbers on certain code blocks,
            // leave false and use the {numberLines: true} syntax below
            showLineNumbers: true,
            // If setting this to true, the parser won't handle and highlight inline
            // code used in markdown i.e. single backtick code like `this`.
            noInlineHighlight: false,
            }
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://blog.angelxiang.com`,
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
    {
      resolve: 'gatsby-plugin-use-dark-mode',
      options: {
        classNameDark: 'dark-mode',
        classNameLight: 'light-mode',
        storageKey: 'darkMode',
        minify: true,
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     // trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    `gatsby-remark-reading-time`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
  ],
}
