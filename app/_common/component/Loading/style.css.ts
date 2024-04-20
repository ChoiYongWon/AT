import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "../../theme/contract.css";

export const rotate = keyframes({
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(-360deg)" },
  });
  
  
export const LoadingStyle = style({
    animation: `${rotate} .5s linear infinite`,
    transformOrigin: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"

})

  
export const ImageStyle = style({
    width: "100%",
    height: "100%",
    maxWidth: "15px",
    maxHeight: "14px"
})