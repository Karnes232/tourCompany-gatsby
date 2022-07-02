import React from "react"

const TourDescription = ({ tourDescription }) => {
  return (
    <div className="flex flex-col justify-center items-center mb-5 md:mx-5 lg:mx-0">
      <h1 className="text-2xl font-semibold mb-4 md:text-3xl text-center">
        {tourDescription.title}
      </h1>
      <p className="text-sm">{tourDescription.description}</p>
    </div>
  )
}

export default TourDescription
