import React from "react"
import { Link } from "gatsby"
import { BackgroundImage } from "react-image-and-background-image-fade"

const HeroTour = ({ image, title }) => {
  return (
    <div className="grid h-[50vh]">
      <BackgroundImage
        src={image}
        width="100%"
        height="100%"
        className="bg-cover bg-center flex flex-col justify-center items-center -z-10 opacity-90 brightness-75 rounded-lg"
      >
        <div className="mb-16">
          <h1 className="text-5xl text-gray-900 text-center">{title}</h1>
        </div>
        <Link to="/contact">
          <button className="inline-block rounded-md text-center font-bold text-xl py-2 px-4 mb-12 text-white bg-sky-500 hover:bg-blue-600">
            Book Now
          </button>
        </Link>
      </BackgroundImage>
    </div>
  )
}

export default HeroTour
