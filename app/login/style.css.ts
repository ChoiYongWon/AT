import { style } from "@vanilla-extract/css";
import { vars } from "../_common/theme/contract.css";

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

export const LogoStyle = style({
  gridColumn: "2 / 4",
  height: "64px",
  backgroundColor: "#d9d9d9",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "24px",

  "@media": {
    "screen and (min-width: 768px)": {
      gridColumn: "3 / span 4",
    },
    "screen and (min-width: 1000px)": {
      gridColumn: "5 / span 4",
    },
  },
});

export const DescriptionKorStyle = style({
  textAlign: "center",
  fontSize: "16px",
  gridColumn: "1 / span 4",
  marginTop: "30px",
  fontWeight: "lighter",

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
  fontWeight: "lighter",
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

export const LoginButtonLayoutStyle = style({
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

export const Divider = style({
  width: "126px",
  height: "1.25px",
  backgroundColor: vars.color.strokeBlack,
  marginRight: "auto",
  marginLeft: "auto",
  marginTop: "15px",
  marginBottom: "5px",
  gridColumn: "2 / span 2",

  "@media": {
    "screen and (min-width: 768px)": {
      width: "240px",
      height: "1.75px",

      gridColumn: "3 / span 4",
      marginTop: "20px",
      marginBottom: "8px",
    },
    "screen and (min-width: 1000px)": {
      width: "300px",
      height: "2.5px",

      gridColumn: "5 / span 4",
      marginTop: "30px",
      marginBottom: "10px",
    },
  },
});


export const FooterWrapperStyle = style({
  position: "absolute",
  bottom: "40px",
  left: "50%",
  transform: "translate(-50%, 0)",
  fontWeight: "lighter",
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
  fontWeight: "lighter",
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

export const BackLinkStyle = style({
  color: vars.color.point_3,
  borderBottom: `1px solid ${vars.color.point_3}`,
});

