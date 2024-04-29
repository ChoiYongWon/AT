import { vars } from "@/app/_common/theme/contract.css";
import { style } from "@vanilla-extract/css";

export const InfoWrapperStyle = style({
    width: "100%",
    height: "auto",
    padding: "32px 12px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
})

export const AuthorInfoStyle = style({
    fontSize: "12px",
    fontWeight: "bold",
    color: vars.color.fontBlack,
})

export const TitleWrapperStyle = style({
    display: "flex",
    width: "100%",
    height: "auto",
    alignItems: "center"
})

export const TitleStyle = style({
    fontSize: "12px",
    fontWeight: "bold",
    color: vars.color.fontBlack,
})