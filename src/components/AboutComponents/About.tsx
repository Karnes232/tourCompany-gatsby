import React from "react"

import InformationComponent from "./InformationComponent"
import GroupPng from "../../images/svg/group.png"
import StarPng from "../../images/svg/star.png"
import GuidePng from "../../images/svg/signpost.png"

const About = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-3 py-16">
      <div className="mb-12 text-center">
        <h2 className="text-4xl text-gray-900 font-bold">Dominican Tours</h2>
        <div className="mt-4 text-xl md:px-20 text-gray-600">
          Dominican Republic is a country in the Caribbean. It is known for its
          beaches, volcanoes, and rainforests.
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between">
        <InformationComponent
          image={GroupPng}
          title={"SMALL GROUPS"}
          description={
            "With a maximum of 16 people, our small group tours make for a far better travel experience."
          }
        />
        <InformationComponent
          image={StarPng}
          title={"FLEXI-BOOKINGS"}
          description={
            "Change your mind? No problem! We offer flexible booking options. You can book a day or a week in advance."
          }
        />

        <InformationComponent
          image={GuidePng}
          title={"100% DOMINICAN"}
          description={
            "We're the DR experts and our guides promise a 100% authentic experience."
          }
        />
      </div>
    </div>
  )
}

export default About
