import { vars } from "@/app/_common/theme/contract.css";
import { style } from "@vanilla-extract/css";



export const MapFormWrapperStyle = style({
    width: "auto",
    height: "40px",
    position: "relative",
    userSelect: "none",
    zIndex: 100,
    display: "flex",
})

export const MapFormButtonWrapperStyle = style({
    width: "auto",
    minWidth: "100px",
    height: "100%",
    border: `${vars.color.strokeBlack} 1px solid`,
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    gap: "16px",
    cursor: "pointer",
    padding: "0 16px",
    backgroundColor: vars.color.white,
})

export const MapFormButtonStyle = style({
    width: "auto",
    height: "100%",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
})

export const MapFormArrowDownStyle = style({
    width: "14px",
    height: "14px",
    transition: "all ease .2s"
})