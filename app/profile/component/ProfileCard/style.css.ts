import { vars } from "@/app/_common/theme/contract.css";
import { style } from "@vanilla-extract/css";

export const ProfileCardWrapperStyle = style({
    width: "100%",
    height: 'auto',
    border: `${vars.color.strokeBlack} 1px solid`,
    backgroundColor: vars.color.white,
    borderRadius: "5px",
    padding: "24px 14px",
    display: "flex",
    gap: "24px",
    alignItems: "center"
})

export const ProfileImageStyle = style({
    borderRadius: "100px",
    height: "50px",
    aspectRatio: "1 / 1",
})

export const ProfileInfoWrapperStyle = style({
    display: "flex",
    flexDirection: "column",
    gap: "6px"
})

export const ProfileNameStyle = style({
    fontSize: "24px",
    fontWeight: 700
})

export const ProfileATIDWrapper = style({
    display: "flex",
    alignItems: "flex-end",
})

export const ProfileATIDStyle = style({
    fontSize: "14px",
})

export const ProfileEditLinkStyle = style({
    // whiteSpace: "nowrap",
    // flex: 0,
    paddingBottom: "1px",
    borderBottom: `${vars.color.primary} 1px solid`,
    fontSize: "10px",
    color: vars.color.primary,
    marginLeft: '8px'
})

export const ProfileLoginLinkStyle = style({
    paddingBottom: "1px",
    borderBottom: `${vars.color.primary} 1px solid`,
    fontSize: "10px",
    color: vars.color.primary,
    marginLeft: '4px'

})