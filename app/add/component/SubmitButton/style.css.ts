import { vars } from "@/app/theme/contract.css";
import { style } from "@vanilla-extract/css";

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