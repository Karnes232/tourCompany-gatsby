import React from "react"

import { Link } from "gatsby"

const Links = () => {
  return (
    <>
      <Link to="/about" className="no-underline">
        <button className="navLinks">About Us</button>
      </Link>
      <Link to="/fishing" className="no-underline">
        <button className="navLinks">Fishing</button>
      </Link>
      <Link to="/saona" className="no-underline">
        <button className="navLinks">Saona</button>
      </Link>
      <Link to="/contact" className="no-underline">
        <button className="navLinks">Contact Us</button>
      </Link>
    </>
  )
}

export default Links
