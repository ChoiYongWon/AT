import { style } from "@vanilla-extract/css";

export const GridLayoutStyle = style({
  display: "grid",
  gridAutoRows: "auto",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  columnGap: "16px",
  marginTop: "24px",
  marginLeft: "16px",
  marginRight: "16px",
  boxSizing: "content-box",

  "@media": {
    "screen and (min-width: 768px)": {
      gridTemplateColumns: "repeat(8, minmax(0, 1fr))",
      marginTop: "36px",

    },
    "screen and (min-width: 1000px)": {
      gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
      marginTop: "48px",

    },
  },
});

export const SearchBarLayoutStyle = style({
  gridColumn: "1 / span 4",
  marginRight: "auto",
  marginLeft: "auto",

  "@media": {
    "screen and (min-width: 768px)": {
      gridColumn: "3 / span 4",
    },
    "screen and (min-width: 1000px)": {
      gridColumn: "5 / span 4",
    },
  },
});
