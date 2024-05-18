import { vars } from "@/app/_common/theme/contract.css";
import { style } from "@vanilla-extract/css";

export const ButtonStyle = style({
  position: "fixed",
  bottom: "13%",
  right: "calc(5% + 10px)",
  width: "40px",
  height: "40px",
  
  borderRadius: "100px",
 
  userSelect: 'none',
  outline: 'none',
  WebkitTapHighlightColor: 'transparent'
});

export const ButtonLinkStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
//   backgroundColor: vars.color.white,
//   border: `${vars.color.strokeBlack} 1px solid`,
  width: "100%",
  height: "100%",
  borderRadius: "100px",
})

export const ButtonImageStyle = style({
  width: "30px",
  height: "30px",
});
