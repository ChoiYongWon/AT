import { vars } from "@/app/theme/contract.css";
import { style } from "@vanilla-extract/css";

export const LoginTest = style({
  marginBottom: "100px",
});

export const LoginButtonWrapperStyle = style({
  //   width: "auto",
  height: "auto",
  position: "relative",
  boxSizing: "content-box",
  boxShadow: `0 0 0 1.25px ${vars.color.strokeBlack} inset`,
  display: "flex",
  maxWidth: "300px",

  "@media": {
    "screen and (min-width: 768px)": {
      maxWidth: "600px",
    },
    "screen and (min-width: 1000px)": {
      maxWidth: "730px",
    },
  },
});

export const LoginButtonStyle = style({
  height: "auto",
  transition: "transform ease 0.2s",
  transform: "translate(0,0)",
  cursor: "pointer",
  border: "none",
  ":hover": {
    transform: "translate(7px,-10px)",
  },
});
