import { vars } from "@/app/_common/theme/contract.css";
import { keyframes, style } from "@vanilla-extract/css";


export const vibrate = keyframes({
    "0%": { transform: "translateX(-5px)" },
    "25%": { transform: "translateX(5px)" },
    "50%": { transform: "translateX(-5px)" },
    "75%": { transform: "translateX(5px)" },
    "100%": { transform: "translateX(0)" },
});
  

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
    padding: "0 16px"
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

export const MapFormContentWrapperStyle = style({
    position: "absolute",
    top: "100%",
    width: "250px",
    height: 'auto',
    maxHeight: "300px",
    border: `${vars.color.strokeBlack} 1px solid`,
    borderRadius: "5px",
    padding: "16px 12px",
    boxSizing: "border-box",
    backgroundColor: `${vars.color.white}`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
})

export const MapFormInputWrapperStyle = style({
    width: "100%",
    height: "34px",
    position: "relative"
})

export const MapFormInputStyle = style({
    padding: "8px",
    paddingLeft: "30px",
    fontSize: "12px",
    width: "100%",
    height: "34px",
    border: `${vars.color.strokeBlack} 1px solid`,
    borderRadius: "5px",

    "::placeholder": {
        fontSize: "12px",
        color: "#e3e2e1",
    }
})

export const MapFormInputSearchIconStyle = style({
    width: "16px",
    height: "auto",
    position: "absolute",
    top: "calc(50% - 8px)",
    left: "8px",
})

export const MapFormListWrapperStyle = style({
    fontSize: "14px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "16px 0",
    gap: "16px",
    paddingInlineStart: "4px",
})

export const MapFormListItemWrapperStyle = style({
    display: "flex",
    gap: "8px",
    alignItems: "center",
    cursor: "pointer"
})

export const MapFormCheckStyle = style({
    width: "12px",
    height: "auto",
})

export const MapFormCreateTextWrapperStyle = style({
    width: "100%",
    padding: "16px 0",
    fontSize: "13px",
    cursor: "pointer"
})

export const MapFormCreateInfoTextWrapperStyle = style({
    width: "100%",
    padding: "16px 0",
    fontSize: "13px",
    textAlign: "center"
})

export const MapFormInputErrorMessageStyle = style({
    width: "100%",
    padding: "16px 0",
    fontSize: "12px",
    textAlign: "center",
    color: vars.color.error,
    animation: `${vibrate} .2s`
})


export const MapFormCreateTextBoldStyle = style({
    fontWeight: "bold",
})

export const Divider = style({
    width: "100%",
    height: "1px",
    opacity: "80%",
    backgroundColor: vars.color.strokeBlack,
})

export const MapFormContentFooterStyle = style({
    width: "100%",
    height: "auto",
    fontSize: "12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    fontWeight: "bold",
    paddingTop: "14px",
    cursor: "pointer"
})