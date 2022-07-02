import React from "react"

const TourItinerary = ({ tour }) => {
  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-center text-xl font-semibold mb-3">
        {tour.tourName} Itinerary
      </h2>
      <div className="">
        <ul className="text-sm mx-auto sm:max-w-lg">
          {tour.itinerary.map((item, index) => {
            return (
              <li
                className="grid grid-cols-[18%_3%_79%] md:grid-cols-[35%_3%_70%] mb-1"
                key={index}
              >
                <h6 className="font-semibold md:text-right">{item.time}</h6>{" "}
                <p> -</p> <p>{item.description}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default TourItinerary
