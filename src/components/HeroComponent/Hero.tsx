import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <div className="grid h-[90vh] md:h-[50vh]">
      <StaticImage
        className="-z-10 opacity-90 brightness-75 md:h-[50vh]"
        style={{
          gridArea: "1/1",
          // You can set a maximum height for the image, if you wish.
          // maxHeight: 600,
        }}
        layout="fullWidth"
        alt=""
        src="../../images/sean-oulashin-KMn4VEeEPR8-unsplash.jpg"
        formats={["auto", "webp", "avif"]}
      />

      <header
        className="text-center p-12 md:h-[50vh]"
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}
      >
        <h1 className="text-5xl md:text-4xl lg:text-6xl text-gray-900 font-extrabold whitespace-pre-line leading-[4.5rem] md:leading-[4.5rem] lg:leading-[5.5rem] w-72 md:w-96 lg:w-[45rem]">
          {"Get to Know the Real\n"}
          <span className="text-sky-500">Dominican Republic</span>
        </h1>
        <div className="text-xl lg:text-2xl mt-4 mb-12 lg:mb-8 text-yellow-300 max-w-md xl:max-w-4xl leading-9">
          Dominican Republic is a country in the Caribbean. It is known for its
          beaches.
        </div>

        <Link to="/contact">
          <button className="inline-block rounded-md text-center font-bold text-xl py-2 px-4 mb-20 text-white bg-sky-500 hover:bg-blue-600">
            Book Now
          </button>
        </Link>
      </header>
    </div>
  )
}

export default Hero
