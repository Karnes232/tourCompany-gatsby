import React from "react"

import HamburgerMenu from "./HamburgerMenu"
import Links from "./Links"

const Nav = () => {
  return (
    <div className="flex justify-end items-center space-x-8">
      <Links />
      <HamburgerMenu />
    </div>
  )
}

export default Nav
