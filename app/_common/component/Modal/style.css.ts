import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../../theme/contract.css";

export const BackgroundStyle = style({
    position: "fixed",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.3)",
    left: 0,
    top: 0,
    zIndex: 1000,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
})

export const ModalWrapperStyle = style({
    // flex: 0,
    userSelect: 'none',
    opacity: 1,
    minWidth: "260px",
    maxWidth: "400px",
    width: "auto",
    height: "auto",
    backgroundColor: "white",
    border: `${vars.color.strokeBlack} 1px solid`,
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    fontSize: "14px",
    padding: "0 24px",
    paddingTop: "28px",
    paddingBottom: "14px",
    boxSizing: "border-box",
    borderRadius: "8px",
    margin: "16px"
})

export const ModalTitleStyle = style({
    fontSize: "16px",
    fontWeight: 700
})

export const ModalContentStyle = style({
    fontSize: "12px",
    lineHeight: 1.5,
    // fontWeight: 700
})

export const ModalButtonGroupStyle = style({
    // flex: 1,
    display: "flex",
    gap: "10px"
})

export const ModalButtonStyle = style({
    flex: 1,
    height: "40px",
    display: "flex",
    padding: "0 18px",
    justifyContent: "center",
    border: `${vars.color.strokeBlack} 1px solid`,
    borderRadius: "5px",
    alignItems: "center",
    backgroundColor: "#F2F3F6",
    color: vars.color.fontBlack
})

export const RadioButtonWrapperStyle = style({
    display: "inline-flex",
    position: "relative",
    cursor: "pointer",
    userSelect: "none",
    alignItems: "flex-start",
    alignSelf: "flex-start",
    width: "fit-content",
    whiteSpace: "nowrap",
    gap: "8px",
    fontSize: "13px",

})

export const RadioButtonStyle = style({
    height: "15px",
    width: "15px",
    borderRadius: "50px",
    border: `${vars.color.strokeBlack} 1px solid`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
})


export const RadioButtonInputStyle = style({
    position: "absolute",
    opacity: 0,
    cursor: "pointer",
    height: 0,
    width: 0
})

export const RadioButtonCheckedStyle = style({
    height: "7px",
    width: "7px",
    borderRadius: "50px",
    // background: "#e7e7e7",

    selectors: {
        [`${RadioButtonWrapperStyle}:has(${RadioButtonInputStyle}:checked) &`]:{
            background: vars.color.primary,
        }
    }
})

export const RadioGroupStyle = style({
    display: "flex",
    // width: "400px",
    flexDirection: "column",
    gap: "12px"
})
