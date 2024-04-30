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
    overflow: "auto",
    overscrollBehavior: "contain"
})

export const ModalWrapperStyle = style({
    opacity: 1,
    minWidth: "260px",
    width: "auto",
    height: "auto",
    backgroundColor: "white",
    border: `${vars.color.strokeBlack} 1px solid`,
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    fontSize: "14px",
    overscrollBehavior: "contain",
    padding: "14px",
    paddingTop: "28px",
    boxSizing: "border-box",
    borderRadius: "8px"
})

export const ModalTitleStyle = style({
    fontSize: "16px",
    fontWeight: 800
})

export const ModalContentStyle = style({
    fontSize: "12px",
    // fontWeight: 800
})

export const ModalButtonGroupStyle = style({
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

globalStyle(`body:has(${BackgroundStyle})`, {
    height: "100vh",
    overflowY: "hidden",
    // paddingRight: "15px"
});
  