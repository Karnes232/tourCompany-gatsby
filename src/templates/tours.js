import React, { useState, useEffect } from "react"
import axios from "axios"
import { PayPalButton } from "react-paypal-button-v2"
import HeroTour from "../components/IndividualTour/HeroTour"
import TourCarousel from "../components/IndividualTour/TourCarousel"
import TourDescription from "../components/IndividualTour/TourDescription"
import TourItinerary from "../components/IndividualTour/TourItinerary"
import Layout from "../components/layout"

export default function TourPage({ pageContext }) {
  const [paidFor, setPaidFor] = useState(false)
  const [name, setName] = useState("")

  const sendMail = async data => {
    setName(`${data.payer.name.given_name} ${data.payer.name.surname} `)
    axios
      .post("/api/email", {
        payer: data.payer,
        amount: data.purchase_units[0].amount.value,
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <HeroTour
          image={"https://source.unsplash.com/random/800x600"}
          title={pageContext.tour.tourName}
        />
        <div className="my-6 mx-3 lg:mx-0 md:flex md:flex-row-reverse">
          <TourDescription
            tourDescription={pageContext.tour.tourDescription1}
          />
          <TourCarousel tour={pageContext.tour} />
        </div>
        <div className="my-6 mx-3 lg:mx-0 md:flex">
          <div className="mb-5">
            <TourDescription
              tourDescription={pageContext.tour.tourDescription2}
            />
            <TourItinerary tour={pageContext.tour} />
          </div>
          <div className="flex flex-col justify-center items-center">
            {paidFor ? (
              <div className="w-80  flex flex-col items-center">
                <h6 className="mb-3 text-lg font-semibold">
                  Thanks {name} for choosing us!
                </h6>
              </div>
            ) : (
              <div className="w-80 flex flex-col items-center">
                <h6 className="mb-3 text-lg text-center font-semibold">
                  Reserve Now
                </h6>
                <div className="w-52">
                  <PayPalButton
                    amount={pageContext.tour.price}
                    shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                    onSuccess={(details, data) => {
                      setPaidFor(true)
                      sendMail(details)

                      // OPTIONAL: Call your server to save the transaction
                      return fetch("/paypal-transaction-complete", {
                        method: "post",
                        body: JSON.stringify({
                          orderId: data.orderID,
                        }),
                      })
                    }}
                    options={{
                      clientId:
                        "ATyo0QdaaI3Kxm1TaxC-i_RHGTzwdw23bI4dNdjQ-v_bGu0CuKT54AzYFsOYJcXr_ZjO1bvqrHWBhG-c",
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}
