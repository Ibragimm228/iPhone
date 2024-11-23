import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists = ["Store", "Mac", "iPhone", "Support"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "All-new A18 Pro chip powers",
      "unrivaled intelligence. And",
      "unprecedented performance.",
    ],
    video: highlightFirstVideo,
    videoDuration: 10,
  },
  {
    id: 2,
    textLists: ["So fast. So fluid.", "Get a feel for the all-new", "Camera Control."],
    video: highlightSecondVideo,
    videoDuration: 6,
  },
  {
    id: 3,
    textLists: [
      "A huge leap in battery life.",
      "Game on.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: [],
    video: highlightFourthVideo,
    videoDuration: 3,
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 16 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 16 Pro in Blue Titanium",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 16 Pro in White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 16 Pro in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.3"', value: "small" },
  { label: '6.9"', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];