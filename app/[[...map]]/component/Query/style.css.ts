import { vars } from "@/app/_common/theme/contract.css";
import { style } from "@vanilla-extract/css";

export const QueryWrapperStyle = style({
    width: "100%",
    minHeight: "48px",
    height: "auto",
    borderRadius: "5px",
    display: "flex",
    flexWrap: "nowrap",
    padding: "4px",
    boxSizing: "border-box",
    overflowX: "scroll",
    gap: "8px",
    userSelect: "none",

    "::-webkit-scrollbar": {
        display: "none",
      },

  });


export const QueryStyle = style({
  padding: "8px 16px",
  paddingRight: "38px",
  // paddingLeft: "25px",
  boxSizing: "border-box",
  fontSize: "12px",
  fontWeight: "bold",
  border: `${vars.color.strokeBlack} 1px solid`,
  borderRadius: "100px",
  width: "auto",
  height: "35px",
  backgroundColor: vars.color.white,
  color: vars.color.primary,
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "space-between",
  gap: "8px",
  position: "relative",
  alignSelf: "center",
  cursor: "pointer"
});

export const QueryTextStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  whiteSpace: "nowrap",
  fontWeight: 800
})

export const QueryDeleteButtonStyle = style({
  width: "30px",
  height: "30px",
  borderRadius: "100px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  boxSizing: "border-box",
  right: 2,
  top: 'calc((100% - 30px) / 2)',
  cursor: "pointer",
});

export const QueryDeleteImageStyle = style({
  width: "10px",
  height: "10px",
  stroke: "#FFFFFF",
});
