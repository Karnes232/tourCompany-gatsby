import React from "react"
import { Link } from "gatsby"
import StarRatings from "react-star-ratings"

const Tour = ({ tour }) => {
  return (
    <Link to={`/${tour.id}`} className="no-underline">
      <div className="w-[70vw] md:w-[35vw] lg:w-[30vw] xl:w-[14rem] h-[45vh] flex flex-col relative m-4 ml-[9.5rem] md:-ml-44 xl:m-0">
        <div className="w-[70vw] md:w-[35vw] lg:w-[25vw] xl:w-[14rem] h-[25vh] relative">
          <img src={tour.image} alt="hero3" className="rounded-2xl" />
        </div>

        <h5 className="font-semibold text-lg capitalize truncate mt-3">
          {tour.tourName}
        </h5>

        <div className="m-1 flex items-center">
          <StarRatings
            rating={tour.rating}
            starDimension="16px"
            starSpacing="4px"
            starRatedColor="#FDCC0D"
          />
          <p className="ml-2 text-gray-500 text-sm">{tour.ratingCount}</p>
        </div>

        <p className="my-2">
          From <span className="text-lg font-semibold">${tour.price}</span>
        </p>
      </div>
    </Link>
  )
}

export default Tour
