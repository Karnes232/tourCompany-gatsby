import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Tour from "./Tour"

import { tourList } from "./TourList"

const Tours = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tabletLandscape: {
      breakpoint: { max: 1280, min: 821 },
      items: 3.3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 821, min: 464 },
      items: 2.3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.2,
      slidesToSlide: 1, // optional, default to 1.
    },
  }
  return (
    <div className="flex flex-col my-10 max-w-6xl mx-auto">
      <h1 className="flex justify-center my-1 text-xl font-bold font-sans mb-8 lg:text-3xl xl:text-5xl">
        Recommended for you!
      </h1>

      <Carousel
        className=""
        swipeable={true}
        draggable={true}
        showDots={false}
        arrows={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "tabletLandscape"]}
        dotListClass="custom-dot-list-style"
        itemClass=""
      >
        {tourList.map(tour => (
          <Tour tour={tour} />
        ))}
      </Carousel>
    </div>
  )
}

export default Tours
