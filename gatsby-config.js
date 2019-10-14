const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'unixMiB',
    description: 'Linux User Group, Università Milano Bicocca',
    keywords: 'unixMiB, Linux, Bicocca, Università, LUG, Open Source',
    author: 'unixMiB', // Fix for some sites
    //'Cristian Baldi <bld.cris.96@gmail.com>, Kowalski7cc <kowalski.7cc@gmail.com>',
    theme: '#ffffff',
    navbarVariant: 'light',
    siteUrl: 'https://unixmib.com/',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-dark-mode',
    'gatsby-plugin-remove-trailing-slashes',
    {
      resolve: 'gatsby-plugin-brotli',
      options: {
        extensions: ['css', 'html', 'js', 'svg'],
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'unixMiB',
        short_name: 'unixMiB',
        start_url: '/',
        lang: 'it',
        icon_options: {
          purpose: 'maskable',
        },
        description: 'Linux User Group, Università Milano Bicocca',
        background_color: '#fffffa',
        theme_color: '#343a40',
        display: 'standalone',
        icon: './src/assets/favicon.png',
      },
    },
    // {
    //   resolve: 'gatsby-plugin-favicon',
    //   options: {
    //     appName: 'unixMiB',
    //     appDescription: 'Gruppo Utenti Linux, Università Milano Bicocca',
    //     developerName: 'Kowalski7cc',
    //     developerURL: 'https://kowalski7cc.xyz',
    //     dir: 'auto',
    //     lang: 'it-IT',
    //     background: '#fffffa',
    //     theme_color: '#343a40',
    //     display: 'standalone',
    //     orientation: 'any',
    //     start_url: '/',
    //     version: '1.0',
    //     logo: './src/assets/favicon.png',
    //     icons: {
    //       android: true,
    //       appleIcon: true,
    //       appleStartup: true,
    //       coast: true,
    //       favicons: true,
    //       firefox: true,
    //       opengraph: true,
    //       twitter: true,
    //       yandex: true,
    //       windows: true,
    //     },
    //   },
    // },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [
          {
            userAgent: '*',
            allow: '/',
          },
        ],
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-svg',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 70,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'attachments',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: true,
              sizeByPixelDensity: true,
              quality: 70,
              withWebp: true,
            },
          },
        ],
      },
    },
    'gatsby-image',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/sw.js': ['Cache-Control: no-cache'],
        },
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: 'gray',
        showSpinner: false,
      },
    },
  ],
}
