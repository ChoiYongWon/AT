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
    borderBottom: `${vars.color.strokeBlack} 1px solid`,
    paddingBottom: "0.5px",
})

export const TitleWrapperStyle = style({
    display: "flex",
    width: "100%",
    height: "auto",
    alignItems: "center",
    justifyContent: "space-between"
})

export const AddressWrapperStyle = style({
    display: "flex",
    gap: "8px",
    flexDirection: "column"
})

export const TitleStyle = style({
    fontSize: "24px",
    fontWeight: 900,
    color: vars.color.fontBlack,
})

export const AddressStyle = style({
    fontSize: "12px",
    fontWeight: "bold",
    color: vars.color.fontBlack,
})

export const MetaInfoWrapperStyle = style({
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    fontSize: "10px",
})

export const EditWrapperStyle = style({
    display: "flex",
    gap: "10px",
})

export const EditStyle = style({
    borderBottom: `${vars.color.strokeBlack} 1px solid`,
    paddingBottom: "0.5px",
})

export const DividerStyle = style({
    backgroundColor: vars.color.strokeBlack,
    height: "1px",
    width: "100%",
    opacity: 0.05,
})

export const BodyStyle = style({
    lineHeight: "1.5",
    fontSize: "14px",
})

export const ReportStyle = style({
    opacity: 0.6,
    fontSize: "10px",
    borderBottom: `${vars.color.strokeBlack} 1px solid`,
    paddingBottom: "0.5px",
    cursor: "pointer"
})

export const CategoryWrapperStyle = style({
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
})

export const CategoryStyle = style({
    width: "auto",
    height: "22px",
    boxSizing: "border-box",
    padding: "5px 14px",
    backgroundColor: vars.color.white,
    border: `${vars.color.strokeBlack} 1px solid`,
    borderRadius: "50px",
    fontSize: "12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
})