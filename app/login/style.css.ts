import { style } from "@vanilla-extract/css";

export const GridLayoutStyle = style({
  display: "grid",
  gridAutoRows: "auto",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  columnGap: "16px",
  marginTop: "80px",
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

export const LogoWrapperStyle = style({
  gridColumn: "2 / 4",
  height: "64px",
  // backgroundColor: "#d9d9d9",
  display: "flex",
  justifyContent: "center",
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

export const LogoStyle = style({
  height: "100%",
  aspectRatio: "1 / 1",
})

export const DescriptionKorStyle = style({
  textAlign: "center",
  fontSize: "16px",
  gridColumn: "1 / span 4",
  marginTop: "30px",
  fontWeight: 300,

  "@media": {
    "screen and (min-width: 768px)": {
      gridColumn: "1 / span 8",
      fontSize: "24px",
    },
    "screen and (min-width: 1000px)": {
      gridColumn: "1 / span 12",
      marginTop: "60px",
      fontSize: "32px",
    },
  },
});

export const DescriptionEngStyle = style({
  textAlign: "center",
  fontSize: "10px",
  gridColumn: "1 / span 4",
  marginTop: "16px",
  fontFamily: "Poppins",
  fontWeight: 300,
  marginBottom: "20px",

  "@media": {
    "screen and (min-width: 768px)": {
      gridColumn: "1 / span 8",
      fontSize: "18px",
      marginBottom: "30px",
    },
    "screen and (min-width: 1000px)": {
      gridColumn: "1 / span 12",
      marginTop: "20px",
      fontSize: "20px",
      marginBottom: "40px",
    },
  },
});


export const FooterWrapperStyle = style({
  position: "absolute",
  bottom: "40px",
  left: "50%",
  transform: "translate(-50%, 0)",
  fontWeight: 300,
  width: "100%",

  "@media": {
    "screen and (min-width: 768px)": {
      width: "unset",
      position: "relative",
      bottom: "unset",
      left: "unset",
      transform: "unset",
      gridColumn: "1 / span 8",
      marginTop: "50px",
    },
    "screen and (min-width: 1000px)": {
      gridColumn: "1 / span 12",

      position: "relative",
    },
  },
});

export const FooterInfoStyle = style({
  position: "relative",
  textAlign: "center",
  fontSize: "14px",

  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "18px",
    },
    "screen and (min-width: 1000px)": {
      fontSize: "20px",
    },
  },
});

export const FooterBackStyle = style({
  position: "relative",
  textAlign: "center",
  fontSize: "10px",
  fontWeight: 300,
  marginTop: "6px",

  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "14px",
    },
    "screen and (min-width: 1000px)": {
      fontSize: "16px",
    },
  },
});