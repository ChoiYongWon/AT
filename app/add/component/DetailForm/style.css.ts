import { vars } from "@/app/_common/theme/contract.css";
import { style } from "@vanilla-extract/css";

export const DetailInputWrapperStyle = style({
    width: "100%",
    height: 'auto',
    fontSize: "14px",
    border: `${vars.color.strokeBlack} 1px solid`,
    backgroundColor: vars.color.white,
    borderRadius: "5px",
    padding: "17px 22px"
})

export const DetailInputStyle = style({
    width: "100%",
    minHeight: "148px",
    height: 'auto',
    resize: "none",
    fontSize: "14px",
    lineHeight: 1.5,
    
    "::placeholder": {
        opacity: 0.5,
        lineHeight: 1.5
    },
})