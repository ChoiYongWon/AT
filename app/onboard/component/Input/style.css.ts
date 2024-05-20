import { vars } from "@/app/_common/theme/contract.css";
import { keyframes, style } from "@vanilla-extract/css";

export const InputWrapperStyle = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "280px",
  gap: "4px",
});

export const vibrate = keyframes({
  "0%": { transform: "rotate(1deg)" },
  "50%": { transform: "rotate(-1deg)" },
  "100%": { transform: "rotate(0deg)" },
});

export const InputStyle = style({
  padding: "8px 18px",
  border: `solid 1px ${vars.color.strokeBlack}`,
  borderRadius: "6px",
  width: "100%",
  height: "45px",
  display: "flex",
  alignItems: "center",
  boxSizing: "border-box",
  marginTop: "16px",
  position: "relative",

  "::placeholder": {
    color: "#e3e2e1",
  },
});

export const ErrorMessageStyle = style({
  fontSize: "12px",
  fontWeight: 300,
  color: "#ee2e3d",
});
