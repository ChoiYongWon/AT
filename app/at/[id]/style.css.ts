import { style } from "@vanilla-extract/css";

export const GridLayoutStyle = style({
  display: "grid",
  gridAutoRows: "auto",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  columnGap: "16px",
  boxSizing: "content-box",

  "@media": {
    "screen and (min-width: 768px)": {
      gridTemplateColumns: "repeat(8, minmax(0, 1fr))",
    },
    "screen and (min-width: 1000px)": {
      gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
    },
  },
});

export const ATWrapperStyle = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gridColumn: "1 / span 4",
  gridRow: 1,
  marginRight: "auto",
  marginLeft: "auto",

  "@media": {
    "screen and (min-width: 768px)": {
      gridColumn: "2 / span 6",
    },
    "screen and (min-width: 1000px)": {
      gridColumn: "4 / span 6",
    },
    "screen and (min-width: 1400px)": {
      gridColumn: "5 / span 4",
    },
  },
})

export const CancelButtonLayout = style({
  gridColumn: "1 / span 4",
  height: "auto",
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",

  "@media": {
    "screen and (min-width: 768px)": {
      gridColumn: "3 / span 4",
    },
    "screen and (min-width: 1000px)": {
      gridColumn: "5 / span 4",
    },
  },
});
