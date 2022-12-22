const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'unixMiB',
    description: 'Linux User Group, Università Milano Bicocca',
    keywords: 'unixMiB, Linux, Bicocca, Università, LUG, Open Source',
    author: 'unixMiB', // Fix title for some sites
    //'Cristian Baldi <bld.cris.96@gmail.com>, Kowalski7cc <kowalski.7cc@gmail.com>',
    theme: '#ffffff',
    navbarVariant: 'light',
    siteUrl: 'https://unixmib.org/',
  },
  flags: {
    FAST_DEV: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PARALLEL_SOURCING: true,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-brotli',
      options: {
        extensions: ['css', 'html', 'js', 'svg'],
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://unixmib.org/',
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'unixMiB',
        short_name: 'unixMiB',
        start_url: '/',
        lang: 'it',
        description: 'Linux User Group, Università Milano Bicocca',
        background_color: '#fffffa',
        theme_color: '#343a40',
        display: 'minimal-ui',
        icon: './src/assets/favicon.png',
      },
    },
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
              maxWidth: 1920,
              linkImagesToOriginal: true,
              sizeByPixelDensity: true,
              quality: 70,
              withWebp: true,
            },
          },
        ],
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-catch-links',
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        headers: {
          "/sw.js": ["Cache-Control: no-cache"],
          "/*": [
            "Permissions-Policy: autoplay=(),camera=(),fullscreen=(),geolocation=(),microphone=(),payment=()",
            "Strict-Transport-Security: max-age=63072000; includeSubdomains; preload",
            "X-Frame-Options: DENY",
            "X-Content-Type-Options: nosniff",
            "Referrer-Policy: no-referrer",
          ],
        },
        mergeSecurityHeaders: true,
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
