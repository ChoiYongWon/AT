import { vars } from "@/app/_common/theme/contract.css";
import { style } from "@vanilla-extract/css";

export const ButtonStyle = style({
  padding: "0 18px",
  border: `solid 1px ${vars.color.strokeBlack}`,
  borderRadius: "5px",
  width: "100%",
//   maxWidth: "280px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
  // marginTop: "8px",
  color: vars.color.white,
  backgroundColor: vars.color.primary,

  ":disabled": {
    // backgroundColor: vars.color.secondary,
    opacity: 0.6
  },
});

export const LoadingLottieStyle = style({
  width: "100%",
  height: "100%",
  maxWidth: "100px",
})