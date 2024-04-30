import { createGlobalTheme } from "@vanilla-extract/css";
import { vars } from "./contract.css";

createGlobalTheme(":root", vars, {
  color: {
    primary: "#EF6F12",
    secondary: "#fff7f1",
    fontBlack: "#222222",
    strokeBlack: "#202020",
    white: "#FFFFFF",
    background: "#EEEEEE",
    point_1: "#04C75B",
    point_2: "#FAE100",
    point_3: "#4285F4",
    point_4: "#EA4336",
    error: "#ee2e3d"
  },

  font: {
    eng: "Poppins",
    kor: "NanumSquareNeo",
  },

  text: {
    mobile: {
      title_1: "24px",
      title_2: "20px",
      subTitle_2: "18px",
      button_1: "18px",
      button_2: "12px",
      content: "16px",
    },
    desktop: {
      title_1: "38px",
      title_2: "30px",
      subTitle_2: "28px",
      button_1: "28px",
      button_2: "18px",
      content: "24px",
    },
  },
});
