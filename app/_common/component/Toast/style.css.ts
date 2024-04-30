import { style } from "@vanilla-extract/css";
import { vars } from "../../theme/contract.css";

export const ToastStyle = style({
    padding: "12px 24px",
    // backgroundColor: `${vars.color.point_4}`,
    border: `${vars.color.strokeBlack} 1px solid`,
    borderRadius: "50px",
    boxShadow: "2px 2px 4px 0px rgba(0,0,0,0.15)",
    // maxWidth: "350px",
    whiteSpace: "nowrap",
    width: "auto",
    height: "auto",
    // color: vars.color.white,
    fontSize: "12px",
    fontWeight: 800
})