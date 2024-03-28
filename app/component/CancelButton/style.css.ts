import { vars } from "@/app/theme/contract.css";
import { style } from "@vanilla-extract/css";

export const ButtonStyle = style({
  width: "34px",
  height: "34px",
  display: "flex",
  border: `${vars.color.strokeBlack} 1px solid`,
  borderRadius: "50px",
  justifyContent: "center",
  alignItems: "center",
  outline: 'none',
  WebkitTapHighlightColor: 'transparent'
});

export const ButtonImageStyle = style({
  width: "14.5px",
  height: "14.5px",
});
