import { vars } from "@/app/theme/contract.css";
import { style } from "@vanilla-extract/css";

export const ImageAddWrapper = style({
  display: "flex",
  width: "100%",
});

export const ImageAddButtonWrapperStyle = style({
  flexShrink: 0,
  width: "112px",
  height: "112px",
  border: `${vars.color.strokeBlack} 1.5px solid`,
  borderRadius: "4px",
  backgroundColor: vars.color.secondary,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "7px",
});

export const ImageAddButtonStyle = style({
  width: "30px",
  height: "30px",
});

export const ImageAddButtonTitleStyle = style({
  fontSize: "12px",
  fontWeight: "bold",
});

export const ImageContainerStyle = style({
  display: "flex",
  width: "100%",
  height: "calc(112px + 24px)",
  gap: "10px",
  overflowX: "scroll",
  overflowY: "hidden",
  marginLeft: "10px",
  "::-webkit-scrollbar": {
    display: "none",
  },
});

export const PreviewImageItemStyle = style({
  flexShrink: 0,
  position: "relative",
  width: "112px",
  height: "112px",
  border: `${vars.color.strokeBlack} 1.5px solid`,
  borderRadius: "4px",
});

export const ImageWrapperStyle = style({
  position: "relative",
  width: "100%",
  height: "100%",
});

export const ImageStyle = style({
  width: "100%",
  height: "100%",
});

export const ImageDeleteStyle = style({
  width: "100%",
  height: "100%",
  backgroundColor: "#000000",
  opacity: 0.4,
  position: "absolute",
  cursor: "pointer",
  zIndex: 100,
  left: 0,
  top: 0,
});
