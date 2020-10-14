import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import DefaultSEO from '@/components/DefaultSEO'

import { siteMetadata } from '~/gatsby-config'

import '@/styles/main.scss'

import SEO from '@/helpers/SEOHelper'

const TemplateWrapper = ({ children, hideNav }) => {
  return (
    <div>
      <DefaultSEO />
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default TemplateWrapper
