import { vars } from "@/app/theme/contract.css";
import { style } from "@vanilla-extract/css";

export const ButtonStyle = style({
  position: "absolute",
  bottom: "5%",
  right: "5%",
  width: "60px",
  height: "60px",
  display: "flex",
  border: `${vars.color.strokeBlack} 1px solid`,
  borderRadius: "100px",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: vars.color.primary,
});

export const ButtonImageStyle = style({
  width: "23px",
  height: "23px",
});
