import { style } from "@vanilla-extract/css";

export const UploadFormLayoutStyle = style({
    gridColumn: "1 / span 4",
    height: "auto",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  
    "@media": {
      "screen and (min-width: 768px)": {
        gridColumn: "3 / span 4",
      },
      "screen and (min-width: 1000px)": {
        gridColumn: "5 / span 4",
      },
    },
  });