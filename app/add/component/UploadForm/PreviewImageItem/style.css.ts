import { vars } from "@/app/theme/contract.css";
import { style } from "@vanilla-extract/css";

export const PreviewImageItemStyle = style({
  flexShrink: 0,
  position: "relative",
  width: "112px",
  height: "112px",
  border: `${vars.color.strokeBlack} 1.5px solid`,
  borderRadius: "4px",
});

export const ImageStyle = style({
  width: "100%",
  height: "100%",
});

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
