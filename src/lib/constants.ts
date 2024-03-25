import {Season} from "@/types/product";

export const iconSizes = {
  sm: 12,
  md: 16,
  lg: 20,
  banner: 180,
}

export const apiBase = 'http://localhost:5000/api'

export const productsPageSizes = ["4", "12", "24", "36", "48", "60"]

export const seasonsDescriptions: Record<Season, string> = {
  "winter": 'Winter description',
  "spring": 'Spring description',
  "summer": 'Summer description',
  "autumn": 'Autumn description',
};
export const partners = [
  {
    id: 1,
    name: "Louis Vuitton",
    designation: "Clothing Designer",
    image:
      "https://i.pinimg.com/280x280_RS/01/75/7b/01757bf368917fec3800a21f45fc6dda.jpg",
  },
  {
    id: 2,
    name: "Gucci",
    designation: "Clothing Designer",
    image:
      "https://i.pinimg.com/564x/3d/75/47/3d7547509311922c64ec583b9fd11d59.jpg",
  },
  {
    id: 3,
    name: "Polo Ralph Lauren",
    designation: "Clothing Designer",
    image: "https://i.pinimg.com/564x/e6/94/ab/e694ab1c10e809175fd0ea372439a24a.jpg"
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image: "https://i.pinimg.com/280x280_RS/01/75/7b/01757bf368917fec3800a21f45fc6dda.jpg"
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image: "https://i.pinimg.com/280x280_RS/01/75/7b/01757bf368917fec3800a21f45fc6dda.jpg"
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://i.pinimg.com/280x280_RS/01/75/7b/01757bf368917fec3800a21f45fc6dda.jpg",
  },
];
