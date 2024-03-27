import { vars } from "@/app/theme/contract.css";
import { style } from "@vanilla-extract/css";

export const DraggableWrapperStyle = style({
  position: "absolute",
  bottom: "-24px",
  height: "24px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxSizing: "border-box",
  zIndex: 10,
});

export const DraggableStyle = style({
  width: "64px",
  height: "2px",
  borderRadius: "8px",
  backgroundColor: vars.color.strokeBlack,
});
