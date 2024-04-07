import { vars } from "@/app/_common/theme/contract.css";
import { style } from "@vanilla-extract/css";

export const FormStyle = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "8px",
});

export const LogoutLayoutStyle = style({
  display: "flex",
  gap: "2px",
  width: "100%",
  justifyContent: "center",
});

export const LogoutDescriptionStyle = style({
  fontSize: "12px",
  color: vars.color.fontBlack,
});

export const LogoutStyle = style({
  fontSize: "12px",
  color: vars.color.fontBlack,
  fontWeight: "bold",
  opacity: 0.5,
});
