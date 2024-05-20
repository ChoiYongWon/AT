import { style } from "@vanilla-extract/css";
import { vars } from "../_common/theme/contract.css";

export const ErrorLayoutStyle = style({
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#F7F7F7",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
})

export const ErrorWrapperStyle = style({
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    alignItems: "center"
})

export const ErrorTextStyle = style({
    textAlign: "center",
    fontSize: "16px"
})

export const ErrorNumberStyle = style({
    fontSize: "56px",
    fontWeight: 800,
})

export const ErrorHomeStyle = style({
    fontSize: "12px",
    paddingBottom: "1px",
    borderBottom: `${vars.color.strokeBlack} 1px solid`
})