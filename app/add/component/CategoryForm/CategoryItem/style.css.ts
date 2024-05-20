import { vars } from "@/app/_common/theme/contract.css";
import { style } from "@vanilla-extract/css";

export const CategoryStyle = style({
  padding: "8px 16px",
  paddingRight: "38px",
  // paddingLeft: "25px",
  boxSizing: "border-box",
  fontSize: "12px",
  fontWeight: 600,
  border: `${vars.color.strokeBlack} 1px solid`,
  borderRadius: "100px",
  width: "auto",
  height: "35px",
  backgroundColor: vars.color.primary,
  color: vars.color.white,
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "space-between",
  gap: "8px",
  position: "relative",
  alignSelf: "center",
  cursor: "pointer"
});

export const CategoryTextStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
})

export const CategoryDeleteButtonStyle = style({
  width: "30px",
  height: "30px",
  borderRadius: "100px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  boxSizing: "border-box",
  right: 2,
  top: 'calc((100% - 30px) / 2)',
  cursor: "pointer",
});

export const CategoryDeleteImageStyle = style({
  width: "10px",
  height: "10px",
  stroke: "#FFFFFF",
});
