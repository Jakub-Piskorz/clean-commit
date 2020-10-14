const path = require('path')
const tailwind = require('tailwindcss')

module.exports = {
  siteMetadata: {
    baseTitle: 'Hotely',
    separator: '|',
    siteUrl: `localhost:8000`,
    title: 'Recruitment task',
    image: '',
    themeColor: '#fff',
    keyword: 'online Hotel finder',
    description: 'Blazing fast Hotel booking'
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: 'uploads'
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src`,
        name: 'images'
      }
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/hotels`,
        name: 'pages'
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          tailwind,
          require('./tailwind.config.js') // Optional: Load custom Tailwind CSS configuration
        ]
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: false, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        ignore: ['react-datepicker/dist/react-datepicker.css']
      }
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: '',
          anonymize: true
        },
        facebookPixel: {
          pixelId: ''
        }
      }
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@': path.join(__dirname, 'src'),
        '~': path.join(__dirname),
        styles: path.join(__dirname, 'src/styles'),
        img: path.join(__dirname, 'static/img')
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        manualInit: true,
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    `gatsby-plugin-advanced-sitemap`,
    'gatsby-plugin-netlify' // make sure to keep it last in the array
  ]
}
