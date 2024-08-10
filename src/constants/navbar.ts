import { Navbar } from "../model";

export const navbar: Navbar[] = [
  {
    id: 1,
    title: "Home",
    isSelect: false,
    options: [],
  },
  {
    id: 2,
    title: "Explore",
    isSelect: true,
    options: [
      {
        id: 1,
        title: "collection",
      },
      {
        id: 2,
        title: "type",
      },
      {
        id: 3,
        title: "year",
      },
      {
        id: 4,
        title: "virtual gallery",
      },
    ],
  },
  {
    id: 3,
    title: "Create",
    isSelect: false,
    options: [],
  },
  {
    id: 4,
    title: "Settings",
    isSelect: false,
    options: [],
  },
];
