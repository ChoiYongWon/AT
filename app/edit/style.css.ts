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
    },
    "screen and (min-width: 1000px)": {
      gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
    },
  },
});

export const TmpLayout = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "8px",
  marginTop: "16px",
});

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

export const TitleStyle = style({
  //   fontWeight: "bold",
  fontSize: "18px",
});

export const SubTitleStyle = style({
  fontSize: '14px'
})

export const ImageAddLayoutStyle = style({
  display: "flex",
  width: "100%",
});

