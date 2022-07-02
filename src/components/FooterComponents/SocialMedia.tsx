import React from "react"

import { Link } from "gatsby"
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa"

const SocialMedia = () => {
  return (
    <div className="border-b border-gray-500 md:border-none">
      <div className="flex py-4 justify-between mx-8 md:max-w-md md:mx-auto">
        <a href="https://www.facebook.com/">
          <FaFacebookF className="footerIcons" />
        </a>
        <a href="https://twitter.com/">
          <FaTwitter className="footerIcons" />
        </a>
        <a href="https://www.pinterest.com/">
          <FaPinterestP className="footerIcons" />
        </a>
        <a href="https://instagram.com/">
          <FaInstagram className="footerIcons" />
        </a>
        <a href="https://youtube.com/">
          <FaYoutube className="footerIcons" />
        </a>
        <a href="https://www.tiktok.com/">
          <FaTiktok className="footerIcons" />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
