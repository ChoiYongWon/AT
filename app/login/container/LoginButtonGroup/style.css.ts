import { vars } from "@/app/theme/contract.css";
import { style } from "@vanilla-extract/css";

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
