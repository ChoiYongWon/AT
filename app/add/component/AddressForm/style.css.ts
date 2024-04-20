import { vars } from "@/app/_common/theme/contract.css";
import { style } from "@vanilla-extract/css";

export const AddressInputWrapperStyle = style({
    width: "100%",
    height: "auto",
    border: `${vars.color.strokeBlack} 1px solid`,
    borderRadius: "5px",
    position: "relative",
    zIndex: 50
})

export const InputWrapperStyle = style({
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 12px",
    zIndex: 10,
    position: "relative",
    background: vars.color.white,
    borderRadius: "4px",
})

export const SelectedWrapperStyle = style({
    flexBasis: "100%",
    display: "flex",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 22px",
    boxSizing: "border-box",
})

export const SelectedContentWrapperStyle = style({
    flexBasis: "100%",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    // alignItems: "center"
})

export const SelectedTitleStyle = style({
    fontSize: "16px",
    marginBottom: "8px"
})

export const SelectedAddressStyle = style({
    fontSize: "12px",
    opacity: 0.6
})

export const SelectedCloseWrapperStyle = style({
    width: "15px",
    height: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer"
})

export const SelectedCloseStyle = style({
    width: "100%",
    height: "100%"
})

export const InputStyle = style({
    width: "100%",
    height: "48px",
    textTransform: 'lowercase',
    // display: "flex",
    // justifyContent: "space-between"
    fontSize: "14px",
    padding: "15px 0",
    paddingRight: "10px",
    boxSizing: "border-box",

    "::placeholder": {
        opacity: 0.5,
        fontSize: "14px"
    },

})

export const SearchButtonStyleWrapper = style({
    minWidth: "34px",
    minHeight: "34px",
    border: `${vars.color.strokeBlack} 1px solid`,
    borderRadius: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"

})

export const SearchButtonStyle = style({
    width: "100%",
    height: "100%",
})

export const LoadingWrapperStyle = style({
    minWidth: "34px",
    minHeight: "34px"
})

export const LoadingStyle = style({
    maxWidth: "20px",
    maxHeight: "20px",
})

export const AddressListWrapperStyle = style({
    position: "absolute",
    width: "calc(100% + 2px)",
    height: "auto",
    backgroundColor: vars.color.secondary,
    border: `${vars.color.strokeBlack} 1px solid`,
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    zIndex: 20,
    top: "calc(100% - 2px)",
    left: "-1px"
    // transform: "translateY(-100%)"
})

export const AddressItemStyle = style({
    padding: "14px 32px",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    flexBasis: "100%",
    cursor: "pointer"
})

export const AddressNothingFindStyle = style({
    padding: "14px 32px",
    display: "flex",
    flexBasis: "100%",
    justifyContent: "center",
    alignContent: "center",
})

export const AddressItemSubTitleStyle = style({
   fontSize: "12px",
   opacity: 0.6
})