import { vars } from "@/app/_common/theme/contract.css";
import { style } from "@vanilla-extract/css";

export const ButtonStyle = style({
  position: "absolute",
  top: 0,
  right: 0,
  // width: "32px",
  // height: "32px",
  
  borderRadius: "100px",
 
  userSelect: 'none',
  outline: 'none',
  WebkitTapHighlightColor: 'transparent'
});

export const ButtonLinkStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // backgroundColor: vars.color.white,
  // border: `${vars.color.strokeBlack} 1px solid`,
  width: "100%",
  height: "100%",
  borderRadius: "100px",
})

export const ButtonImageStyle = style({
  width: "32px",
  height: "32px",
});

export const IndicatorWrapperStyle = style({
  cursor: "pointer",
transition: "transform ease .5s",
  userSelect: 'none',
  outline: 'none',
  WebkitTapHighlightColor: 'transparent',
})

export const IndicatorTapGroupStyle = style({
  userSelect: 'none',
  outline: 'none',
  WebkitTapHighlightColor: 'transparent',
})

export const CardSyle = style({
  transformOrigin: "center",
  fill: vars.color.white,
  stroke: vars.color.strokeBlack,
})

export const NameStyle = style({
  textAnchor: "middle",
  fill: vars.color.fontBlack,
  fontSize: "10px",
  fontWeight: 800
})

export const CountStyle = style({
  textAnchor: "middle",
  fill: vars.color.primary,
  fontSize: "12px",
  fontWeight: 900
})