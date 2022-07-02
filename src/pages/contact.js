import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { useState, useEffect } from "react"

const Contact = () => {
  const [message, setMessage] = useState(false)
  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setMessage(true)
    }
  }, [])
  return (
    <Layout>
      <Seo title="Contact" />
      <div className="max-w-md lg:max-w-3xl mx-auto sm:py-8">
        <div class="book py-16 lg:px-9">
          <div className="flex flex-col justify-center items-center lg:items-start">
            {message ? (
              <h2 className="text-xl font-semibold px-8">
                Thank you for your message!
              </h2>
            ) : (
              <h2 className="text-xl font-semibold px-8">Contact us</h2>
            )}
            <form
              name="contact"
              method="POST"
              action="/contact/?success=true"
              data-netlify="true"
              className="mt-6 lg:w-96"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div class="form__group">
                <input
                  name="name"
                  type="text"
                  class="form__input"
                  placeholder="Full Name"
                  id="name"
                  required
                />
                <label htmlFor="name" class="form__label">
                  Full Name
                </label>
              </div>

              <div class="form__group">
                <input
                  id="email"
                  name="email"
                  class="form__input"
                  placeholder="Email address"
                  type="email"
                  required
                />
                <label htmlFor="email" class="form__label">
                  Email address
                </label>
              </div>

              <div class="form__group">
                <textarea
                  id="message"
                  name="message"
                  class="form__input"
                  placeholder="Send us a message"
                  required
                />
                <label htmlFor="message" class="form__label">
                  Send us a message
                </label>
              </div>

              <div class="form__group">
                <button
                  type="submit"
                  class="rounded-3xl bg-blue-600 px-4 py-2 text-white text-lg uppercase"
                >
                  Next step &rarr;
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
