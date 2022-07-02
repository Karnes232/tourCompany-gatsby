import {
  randNumber,
  randAddress,
  randCompanyName,
  randFloat,
} from "@ngneat/falso"
import { faker } from "@faker-js/faker"

export const tourList = [
  {
    id: 1,
    image: faker.image.nature(500, 400, true),
    address: randAddress(),
    tourName: randCompanyName(),
    rating: randFloat({ min: 1, max: 5, fraction: 2 }),
    ratingCount: randFloat({ min: 1, max: 200, fraction: 0 }),
    price: randFloat({ min: 1, max: 300, fraction: 2 }),
    tourDescription1: {
      title: "Lorem ipsum dolor sit amet",
      description: faker.lorem.paragraphs(3),
    },
    tourDescription2: {
      title: "Why you can not miss this tour",
      description: faker.lorem.paragraphs(3),
    },
    tourDescription3: {
      title: "Another title for you",
      description: faker.lorem.paragraphs(3),
    },
    photos: [
      faker.image.imageUrl(),
      faker.image.city(),
      faker.image.cats(),
      faker.image.business(),
      faker.image.animals(),
    ],
    itinerary: [
      {
        time: "8:00 AM",
        description: faker.lorem.sentence(5),
      },
      {
        time: "10:00 AM",
        description: faker.lorem.sentence(5),
      },
      {
        time: "11:00 AM",
        description: faker.lorem.sentence(5),
      },
      {
        time: "2:00 PM",
        description: faker.lorem.sentence(5),
      },
      {
        time: "5:00 PM",
        description: faker.lorem.sentence(5),
      },
    ],
  },
  {
    id: 2,
    image: faker.image.nature(500, 400, true),
    address: randAddress(),
    tourName: randCompanyName(),
    rating: randFloat({ min: 1, max: 5, fraction: 2 }),
    ratingCount: randFloat({ min: 1, max: 200, fraction: 0 }),
    price: randFloat({ min: 1, max: 300, fraction: 2 }),
    tourDescription1: {
      title: "Lorem ipsum dolor sit amet",
      description: faker.lorem.paragraphs(3),
    },
    tourDescription2: {
      title: "Why you can not miss this tour",
      description: faker.lorem.paragraphs(3),
    },
    tourDescription3: {
      title: "Another title for you",
      description: faker.lorem.paragraphs(3),
    },
    photos: [
      faker.image.imageUrl(),
      faker.image.city(),
      faker.image.cats(),
      faker.image.business(),
      faker.image.animals(),
    ],
    itinerary: [
      {
        time: "8:00 AM",
        description: faker.lorem.sentence(5),
      },
      {
        time: "10:00 AM",
        description: faker.lorem.sentence(5),
      },
      {
        time: "11:00 AM",
        description: faker.lorem.sentence(5),
      },
      {
        time: "2:00 PM",
        description: faker.lorem.sentence(5),
      },
      {
        time: "5:00 PM",
        description: faker.lorem.sentence(5),
      },
    ],
  },
  {
    id: 3,
    image: faker.image.nature(500, 400, true),
    address: randAddress(),
    tourName: randCompanyName(),
    rating: randFloat({ min: 1, max: 5, fraction: 2 }),
    ratingCount: randFloat({ min: 1, max: 200, fraction: 0 }),
    price: randFloat({ min: 1, max: 300, fraction: 2 }),
    tourDescription1: {
      title: "Lorem ipsum dolor sit amet",
      description: faker.lorem.paragraphs(3),
    },
    tourDescription2: {
      title: "Why you can not miss this tour",
      description: faker.lorem.paragraphs(3),
    },
    tourDescription3: {
      title: "Another title for you",
      description: faker.lorem.paragraphs(3),
    },
    photos: [
      faker.image.imageUrl(),
      faker.image.city(),
      faker.image.cats(),
      faker.image.business(),
      faker.image.animals(),
    ],
    itinerary: [
      {
        time: "8:00 AM",
        description: faker.lorem.sentence(5),
      },
      {
        time: "10:00 AM",
        description: faker.lorem.sentence(5),
      },
      {
        time: "11:00 AM",
        description: faker.lorem.sentence(5),
      },
      {
        time: "2:00 PM",
        description: faker.lorem.sentence(5),
      },
      {
        time: "5:00 PM",
        description: faker.lorem.sentence(5),
      },
    ],
  },
  {
    id: 4,
    image: faker.image.nature(500, 400, true),
    address: randAddress(),
    tourName: randCompanyName(),
    rating: randFloat({ min: 1, max: 5, fraction: 2 }),
    ratingCount: randFloat({ min: 1, max: 200, fraction: 0 }),
    price: randFloat({ min: 1, max: 300, fraction: 2 }),
    tourDescription1: {
      title: "Lorem ipsum dolor sit amet",
      description: faker.lorem.paragraphs(3),
    },
    tourDescription2: {
      title: "Why you can not miss this tour",
      description: faker.lorem.paragraphs(3),
    },
    tourDescription3: {
      title: "Another title for you",
      description: faker.lorem.paragraphs(3),
    },
    photos: [
      faker.image.imageUrl(),
      faker.image.city(),
      faker.image.cats(),
      faker.image.business(),
      faker.image.animals(),
    ],
    itinerary: [
      {
        time: "8:00  AM",
        description: faker.lorem.sentence(5),
      },
      {
        time: "10:00 AM",
        description: faker.lorem.sentence(5),
      },
      {
        time: "11:00 AM",
        description: faker.lorem.sentence(5),
      },
      {
        time: "2:00  PM",
        description: faker.lorem.sentence(5),
      },
      {
        time: "5:00  PM",
        description: faker.lorem.sentence(5),
      },
    ],
  },
]
