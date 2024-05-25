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


export const ProfileLayoutStyle = style({
    gridColumn: "1 / span 4",
    height: "auto",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    userSelect: 'none',
    // fontWeight: 300,
  
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
  


export const LoadingLayoutStyle = style({
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#F7F7F7",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
})

export const LoadingWrapperStyle = style({
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    alignItems: "center"
})

export const LoadingTextStyle = style({
    textAlign: "center",
    fontSize: "14px"
})

export const LoadingImageStyle = style({
    width: "80px",
    height: "80px",
})