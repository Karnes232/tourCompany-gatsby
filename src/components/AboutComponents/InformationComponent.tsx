import React from "react"

const InformationComponent = ({ image, title, description }) => {
  return (
    <>
      <div className="flex items-center justify-center mx-2 my-2 md:w-52 lg:w-96">
        <div className="h-[40px] w-[40px] rounded-full border-2 border-slate-800 mr-7 flex justify-center items-center">
          <img
            src={image}
            className="w-6 h-6 rounded-full opacity-70"
            alt=""
          ></img>
        </div>

        <div className="text-gray-600 flex flex-col justify-center w-2/3">
          <h6 className="mb-2 font-semibold text-sm">{title}</h6>
          <p className="text-xs">{description}</p>
        </div>
      </div>
    </>
  )
}

export default InformationComponent
