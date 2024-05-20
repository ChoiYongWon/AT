import { vars } from "@/app/_common/theme/contract.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const ATCardWrapperStyle = style({
    padding: "16px",
    paddingTop: "13px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    color: vars.color.fontBlack,
    border: `${vars.color.strokeBlack} 1px solid`,
    borderRadius: "5px",
    backgroundColor: vars.color.white,
    userSelect: 'none',
    outline: 'none',
    WebkitTapHighlightColor: 'transparent',
    cursor: "pointer",
})

export const ATCardIDStyle = style({
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    // width: "100%",
    // textAlign: "end"
})

export const ATCardImageWrapperStyle = style({
    display: "flex",
    gap: "16px",
    width: "100%",
    overflowX: "scroll",

    "::-webkit-scrollbar": {
        display: "none"
    }
})

export const ATCardImageStyle = style({
    objectFit: "cover",
    border: `${vars.color.strokeBlack} 1px solid`,
    borderRadius: "5px",
    overflow: 'hidden',
    minHeight: '120px',
    minWidth: '120px',
    aspectRatio: '1 / 1',
    textIndent: "-10000px",

    ':before': {
        content: "",
        display: "block",
        marginBottom: "120px",

    },
    
})

export const ATCardInfoWrapperStyle = style({
    display: "flex",
    width: "100%",
    gap: "32px",
    justifyContent: "space-between",
    // alignItems: "flex-end"
})

export const ATCardTextWrapperStyle = style({
    display: "flex",
    flexDirection: "column",
    gap: "7px",
})

export const ATCardTitleStyle = style({
    fontSize: "24px",
    fontWeight: 700,
    // color: vars.color.primary
})

export const ATCardAddressStyle = style({
    fontSize: "12px",
    lineHeight: 1.4
    // wordBreak: 'keep-all'
    // whiteSpace: "nowrap",
})

export const ATCardNaverButtonStyle = style({
    height: "24px",
    // width: "auto",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    padding: "5px 10px",
    boxSizing: "border-box",
    color: vars.color.white,
    backgroundColor: vars.color.point_1,
    border: `${vars.color.strokeBlack} 1px solid`,
    borderRadius: "20px",
    fontSize: "12px",
    whiteSpace: "nowrap"
    
})

export const ATCardNextButtonSyle = style({
    height: "16px",
    width: "16px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
})

export const ATCardNextImageStyle = style({
    width: "100%",
    height: "100%"
})

export const ATCardDivider = style({
    width: "100%",
    height: "1px",
    opacity: 1,
    borderRadius: "10px",
    backgroundColor: vars.color.strokeBlack,
})

export const ATCardCategoryWrapperStyle = style({
    width: "100%",
    display: "flex",
    gap: "10px",
    overflowX: "scroll",
    

    "::-webkit-scrollbar": {
        display: "none"
    }
})

export const ATCardCategoryStyle = style({
    padding: "5px 14px",
    fontSize: "12px",
    height: "24px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    color: vars.color.fontBlack,
    backgroundColor: vars.color.white,
    border: `${vars.color.strokeBlack} 1px solid`,
    borderRadius: "14px",
    whiteSpace: "nowrap",
    fontWeight: 600
})