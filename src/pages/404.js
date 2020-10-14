import React from 'react'

import Layout from '@/components/Layout'

const NotFoundPage = () => (
  <Layout>
    <section>
      <div className="container px-8 mx-auto h-screen flex justify-center items-center text-center">
        <div>
          <h1 className="text-h3 md:text-h1">404: Page Not Found</h1>
          <div className="mt-6 text-md">
            We can’t seem to find the page you’re looking for. Try going back to
            the previous page.
          </div>
          <a href="/" className="btn-send max-w-md mx-auto mt-6">
            Back to Home
          </a>
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
