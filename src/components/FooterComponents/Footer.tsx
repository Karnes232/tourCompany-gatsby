import React from "react"

import Copyright from "./Copyright"
import Sitemap from "./Sitemap"
import SocialMedia from "./SocialMedia"

const Footer = () => {
  return (
    <footer className="shadow-sm border-b bg-gray-800 relative pt-12">
      <div className="flex flex-col justify-between max-w-6xl mx-5 xl:mx-auto">
        <SocialMedia />
        <Sitemap />
        <Copyright />
      </div>
    </footer>
  )
}

export default Footer
