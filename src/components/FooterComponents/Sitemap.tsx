import React from "react"

import { Link } from "gatsby"

const Sitemap = () => {
  return (
    <div className="border-b border-gray-500">
      <div className="flex flex-col py-4 justify-between mx-8 md:flex-row md:max-w-2xl md:mx-auto">
        <Link to="/about">
          <p className="footerSitemap">About Us</p>
        </Link>
        <Link to="/fishing">
          <p className="footerSitemap">Fishing</p>
        </Link>
        <Link to="/saona">
          <p className="footerSitemap">Saona</p>
        </Link>
        <Link to="/contact">
          <p className="footerSitemap">Contact Us</p>
        </Link>
      </div>
    </div>
  )
}

export default Sitemap
