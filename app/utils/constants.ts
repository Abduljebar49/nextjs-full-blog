import { Author, Blog, BlogType } from "./interfaces";

export const blogTypes: BlogType[] = [
  {
    title: "Technology",
    id: 1,
  },
  {
    title: "Finance",
    id: 2,
  },
  {
    title: "Politics",
    id: 3,
  },
  {
    title: "Sports",
    id: 4,
  },
  {
    title: "Culture",
    id: 5,
  },
];

const author: Author = {
  name: "Abduljebar Sani",
  profession: "Computer Scientist",
  id: 1,
};
const date = new Date();

export const descriptionTextLimit = 150;

export const blogs: Blog[] = [
  {
    title: "Lorem Ipsum Dolor  title no 1",
    author: author,
    type: [blogTypes[0]],
    id: 1,
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta
      dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet
      posuere magna..
      `,
    createdAt: date,
    image: "https://source.unsplash.com/collection/1346951/1000x500?sig=1",
  },
  {
    title: "Lorem Ipsum Dolor  title no 2",
    author: author,
    type: [blogTypes[1]],
    id: 2,
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta
      dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet
      posuere magna..
      `,
    createdAt: date,
    image: "https://source.unsplash.com/collection/1346951/1000x500?sig=2",
  },
  {
    title: "Lorem Ipsum Dolor  title no 3",
    author: author,
    type: [blogTypes[2], blogTypes[3]],
    id: 3,
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta
      dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet
      posuere magna..
      `,
    createdAt: date,
    image: "https://source.unsplash.com/collection/1346951/1000x500?sig=3",
  },
  {
    title: "Lorem Ipsum Dolor  title no 4",
    author: author,
    type: [blogTypes[3]],
    id: 4,
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta
      dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet
      posuere magna..
      `,
    createdAt: date,
    image: "https://source.unsplash.com/collection/1346951/1000x500?sig=4",
  },
  {
    title: "Lorem Ipsum Dolor  title no 5",
    author: author,
    type: [blogTypes[4]],
    id: 5,
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta
      dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet
      posuere magna..
      `,
    createdAt: date,
    image: "https://source.unsplash.com/collection/1346951/1000x500?sig=5",
  },
  {
    title: "Lorem Ipsum Dolor  title no 6",
    author: author,
    type: [blogTypes[0]],
    id: 6,
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta
      dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet
      posuere magna..
      `,
    createdAt: date,
    image: "https://source.unsplash.com/collection/1346951/1000x500?sig=6",
  },
  {
    title: "Lorem Ipsum Dolor  title no 7",
    author: author,
    type: [blogTypes[2]],
    id: 7,
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta
      dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet
      posuere magna..
      `,
    createdAt: date,
    image: "https://source.unsplash.com/collection/1346951/1000x500?sig=7",
  },
  {
    title: "Lorem Ipsum Dolor  title no 8",
    author: author,
    type: [blogTypes[1], blogTypes[2]],
    id: 8,
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta
      dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet
      posuere magna..
      `,
    createdAt: date,
    image: "https://source.unsplash.com/collection/1346951/1000x500?sig=8",
  },
  {
    title: "Lorem Ipsum Dolor  title no 9",
    author: author,
    type: [blogTypes[3]],
    id: 9,
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta
      dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet
      posuere magna..
      `,
    createdAt: date,
    image: "https://source.unsplash.com/collection/1346951/1000x500?sig=9",
  },
];
