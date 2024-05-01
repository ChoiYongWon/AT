import { style } from "@vanilla-extract/css";

export const LoadingLayoutStyle = style({
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

export const LoadingWrapperStyle = style({
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    alignItems: "center"
})

export const LoadingTextStyle = style({
    textAlign: "center",
    fontSize: "14px"
})

export const LoadingImageStyle = style({
    width: "80px",
    height: "80px",
})