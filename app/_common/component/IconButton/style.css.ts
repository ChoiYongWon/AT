import { vars } from "@/app/_common/theme/contract.css";
import { style } from "@vanilla-extract/css";

export const ButtonStyle = style({
  width: "34px",
  height: "34px",
  borderRadius: "50px",
  outline: 'none',
  WebkitTapHighlightColor: 'transparent',
  userSelect: 'none',
  backgroundColor: vars.color.white,
  ":disabled": {
    opacity: "0.2"
}
});

export const ButtonLinkStyle = style({
  width: "100%",
  height: "100%",
  display: "flex",
  border: `${vars.color.strokeBlack} 1px solid`,
  borderRadius: "50px",
  justifyContent: "center",
  alignItems: "center",
});

export const ButtonImageStyle = style({
  width: "47%",
  height: "47%",
});

export const CancelButtonImageStyle = style({
  width: "40%",
  height: "40%",
});

export const SearchButtonImageStyle = style({
  width: "60%",
  height: "60%",
});


