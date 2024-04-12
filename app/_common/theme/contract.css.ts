import { createGlobalThemeContract } from "@vanilla-extract/css";

export const vars = createGlobalThemeContract({
  color: {
    primary: "primary",
    secondary: "secondary",
    fontBlack: "font-black",
    strokeBlack: "stroke-black",
    white: "white",
    background: "background",
    point_1: "point-1",
    point_2: "point-2",
    point_3: "point-3",
    error: "error"
  },

  font: {
    eng: "eng",
    kor: "kor",
  },

  text: {
    mobile: {
      title_1: "title-1",
      title_2: "title-2",
      subTitle_2: "subtitle-2",
      button_1: "button-1",
      button_2: "button-2",
      content: "content",
    },
    desktop: {
      title_1: "title-1",
      title_2: "title-2",
      subTitle_2: "subtitle-2",
      button_1: "button-1",
      button_2: "button-2",
      content: "content",
    },
  },
});
