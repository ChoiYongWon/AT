import { vars } from "@/app/theme/contract.css";
import { keyframes, style } from "@vanilla-extract/css";

export const vibrate = keyframes({
    "0%": { transform: "translateX(-10px)" },
    "50%": { transform: "translateX(10px)" },
    "100%": { transform: "translateX(0)" },
  });
  

export const ButtonWrapperStyle = style({
    display: "flex",
    flexDirection: "column",
    gap: "4px",
})

export const ButtonStyle = style({
    width: "100%",
    padding: '14px',
    boxSizing: 'border-box',
    border: `${vars.color.strokeBlack} 1px solid`,
    borderRadius: '5px',
    backgroundColor: vars.color.primary,
    color: vars.color.white,
    fontSize: '18px',
    textAlign: 'center',
    cursor: 'pointer'
})

export const ButtonMessageStyle = style({
    fontSize: "12px",
    fontWeight: "lighter",
    color: "#ee2e3d",
    transformOrigin: "center"
})

