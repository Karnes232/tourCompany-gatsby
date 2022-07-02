import { tourList } from "./src/components/ToursComponents/TourList.js"
import path, { resolve } from "path"

async function turnToursIntoPages({ graphql, actions }) {
  const tourTemplate = path.resolve("./src/templates/tours.js")
  tourList.forEach(tour => {
    actions.createPage({
      path: `/${tour.id}`,
      component: tourTemplate,
      context: {
        tour: tour,
      },
    })
  })
}

export async function createPages(params) {
  // Create pages dynamically
  await Promise.all([turnToursIntoPages(params)])
}
