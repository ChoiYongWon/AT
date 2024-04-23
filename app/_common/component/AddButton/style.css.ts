import { vars } from "@/app/_common/theme/contract.css";
import { style } from "@vanilla-extract/css";

export const ButtonStyle = style({
  position: "fixed",
  bottom: "5%",
  right: "5%",
  width: "60px",
  height: "60px",
  
  borderRadius: "100px",
 
  userSelect: 'none',
  outline: 'none',
  WebkitTapHighlightColor: 'transparent'
});

export const ButtonLinkStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: vars.color.primary,
  border: `${vars.color.strokeBlack} 1px solid`,
  width: "100%",
  height: "100%",
  borderRadius: "100px",
})

export const ButtonImageStyle = style({
  width: "23px",
  height: "23px",
});
