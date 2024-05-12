import { vars } from "@/app/_common/theme/contract.css";
import { style } from "@vanilla-extract/css";

export const MoreCardWrapperStyle = style({
    width: "100%",
    height: 'auto',
    border: `${vars.color.strokeBlack} 1px solid`,
    backgroundColor: vars.color.white,
    borderRadius: "5px",
    padding: "18px 16px",
    display: "flex",
    gap: "18px",
    userSelect: "none",
    flexDirection: "column",
    outline: 'none',
    WebkitTapHighlightColor: 'transparent'
})

export const FeedBackButtonStyle = style({
    display: "flex",
    gap: "8px",
    alignItems: "center",
})

export const FeedBackIconWrapperStyle = style({
    width: "24px",
    height: "24px",
    alignItems: "center",
    justifyContent: "center",
})

export const FeedBackIconStyle = style({
    width: "100%",
    height: "100%",
})

export const FeedBackButtonTextStyle = style({
    fontSize: "14px"
})

export const GoWrapperStyle = style({
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
})

export const GoButtonStyle = style({
    width: "8px",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    justifySelf: "flex-end"
})

export const GoIconStyle = style({
    width: "100%",
    height: "100%",
})

export const DividerStyle = style({
    width: "100%",
    height: "0.5px",
    backgroundColor: vars.color.strokeBlack,
    borderRadius: "2px",
})

export const RegularButtonStyle = style({
    fontSize: "14px",
    marginTop: "2px",
    marginBottom: "2px",
    // fontWeight: "bold",
    color: vars.color.fontBlack
})
