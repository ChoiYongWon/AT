import { style } from "@vanilla-extract/css";

export const GridLayoutStyle = style({
  display: "grid",
  gridAutoRows: "auto",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  columnGap: "16px",
  marginTop: "25px",
  marginLeft: "16px",
  marginRight: "16px",
  boxSizing: "content-box",

  "@media": {
    "screen and (min-width: 768px)": {
      gridTemplateColumns: "repeat(8, minmax(0, 1fr))",
      marginTop: "30px",

    },
    "screen and (min-width: 1000px)": {
      gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
      marginTop: "50px",

    },
  },
});

export const TmpLayout = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "8px",
  marginTop: "50px",
});

export const MainLayoutStyle = style({
  gridColumn: "1 / span 4",
  gridRow: 3,
  display: "flex",
  justifyContent: 'center',

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
});

export const SearchBarLayoutStyle = style({
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
});

export const QueryLayoutStyle = style({
  gridColumn: "1 / span 4",
  gridRow: 2,
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
});


