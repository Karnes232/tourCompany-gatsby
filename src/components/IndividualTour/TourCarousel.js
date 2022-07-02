import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { Image } from "react-image-and-background-image-fade"

const TourCarousel = ({ tour }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tabletLandscape: {
      breakpoint: { max: 1280, min: 821 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 821, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  }
  return (
    <div className="flex flex-col max-w-md lg:max-w-lg mx-auto lg:mr-6">
      <h1 className="opacity-0">.</h1>
      <Carousel
        className=""
        swipeable={true}
        draggable={true}
        showDots={true}
        arrows={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "tabletLandscape"]}
        dotListClass="custom-dot-list-style"
        itemClass=""
      >
        {tour.photos.map(url => (
          <div key={url} className="mx-3">
            <Image
              src={url}
              width="100%"
              height="100%"
              className="rounded-lg"
            />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default TourCarousel
