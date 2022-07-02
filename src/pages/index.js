import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/HeroComponent/Hero"
import About from "../components/AboutComponents/About"
import Tours from "../components/ToursComponents/Tours"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <About />
    <Tours />
  </Layout>
)

export default IndexPage
