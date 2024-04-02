import { vars } from "@/app/theme/contract.css";
import { style } from "@vanilla-extract/css";

export const CategoryStyle = style({
  padding: "8px 16px",
  paddingRight: "28px",
  boxSizing: "border-box",
  fontSize: "12px",
  fontWeight: "bold",
  border: `${vars.color.strokeBlack} 1px solid`,
  borderRadius: "20px",
  width: "auto",
  height: "30px",
  backgroundColor: vars.color.primary,
  color: vars.color.white,
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "space-between",
  gap: "8px",
  position: "relative",
});

export const CategoryDeleteButtonStyle = style({
  width: "30px",
  height: "30px",
  borderRadius: "100px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  boxSizing: "border-box",
  right: 0,
  top: -1,
  cursor: "pointer",
});

export const CategoryDeleteImageStyle = style({
  width: "10px",
  height: "10px",
  stroke: "#FFFFFF",
});
