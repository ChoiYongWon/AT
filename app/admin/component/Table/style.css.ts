import { vars } from "@/app/_common/theme/contract.css";
import { style } from "@vanilla-extract/css";

export const TableWrapperStyle = style({
    width: "100%",
    height: "auto",
    border: `${vars.color.strokeBlack} 1px solid`,
    borderRadius: "5px",
    // borderCollapse: "collapse",
    // borderStyle: "hidden",
    // tableLayout: "fixed",
    borderSpacing: 0,
    fontSize: "14px",
    color: vars.color.fontBlack,
})

export const THeadStyle = style({
    width: "100%",
    height: "auto",
    borderRadius: "15px",
    borderBottom: `${vars.color.strokeBlack} 1px solid`,

})

export const TRStyle = style({
    width: "100%",
    height: "auto",

})

export const THStyle = style({
    padding: "12px 0",

    borderCollapse: "collapse",
    textAlign: "center",
    borderRadius: "5px",
    borderBottom: `${vars.color.strokeBlack} 1px solid`,

})

export const TBodyStyle = style({
    width: "100%",
    height: "auto",
    borderRadius: "5px",
})

export const TDStyle = style({
    padding: "12px 0",
    borderCollapse: "collapse",
    textAlign: "center",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
})

export const LinkStyle = style({
    paddingBottom: "1px",
    borderBottom: `${vars.color.primary} 1px solid`,
    color: vars.color.primary
})
