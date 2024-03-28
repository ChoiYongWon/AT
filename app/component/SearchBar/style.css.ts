import { vars } from "../../theme/contract.css";
import { style } from "@vanilla-extract/css";

export const SearchBarWrapperStyle = style({
  padding: "8px 18px",
  border: `solid 1px ${vars.color.strokeBlack}`,
  borderRadius: "30px",
  width: "100%",
  height: "50px",
  display: 'flex',
  alignItems: "center",
  justifyContent: "space-between",
  position: "relative",
  boxSizing: "border-box",
  overflow: "hidden"
});

export const ProfileImageWrapperStyle = style({
  height: "100%",
  aspectRatio: "1/1",
  borderRadius: "100px",
  overflow: "hidden",
  outline: 'none',
  WebkitTapHighlightColor: 'transparent'
})

export const EmptyProfileImageStyle = style({
  backgroundColor: "#D9D9D9",
  width: '100%',
  height: "100%",
})


export const ProfileNameStyle = style({
  fontSize: "18px"
})


export const SearchIconCheckboxStyle = style({
  display: "none"
})

export const SearchIconLabelStyle = style({
  border: `solid 1px ${vars.color.strokeBlack}`,
  borderRadius: "30px",
  height: "100%",
  aspectRatio: "1/1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer"
})

export const SearchIconWrapperStyle = style({
  height: "100%",
  aspectRatio: "1/1",
  borderRadius: "30px",
  zIndex: "1",
  outline: 'none',
  WebkitTapHighlightColor: 'transparent'
})


export const SearchIconStyle = style({
  width: "60%",
  height: "auto"
})

export const InputWrapperStyle = style({
  position: "absolute",
  left: "calc(18px + 50px)",
  transition: "transform ease .3s",
  // opacity: 0,
  width: "calc(100% - 36px - 100px)",
  height: "100%",
  backgroundColor: "#ffffff",
  transform: "translateX(calc(100% + 18px + 50px))",
  display:"flex",
  justifyContent: "center",
  transformOrigin: "left",
  alignItems: "center",
  selectors: {
    [`${SearchBarWrapperStyle}:has(${SearchIconCheckboxStyle}:checked) &`]:{
      transform: 'translateX(0%)',
    }
  }
})

export const SearchInputStyle = style({
  width: "100%",
  height: "100%",
  color: vars.color.fontBlack,
  "::placeholder":{
    color: "#e3e2e1",
  }
})