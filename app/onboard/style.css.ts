import { style } from "@vanilla-extract/css";
import { vars } from "../_common/theme/contract.css";

export const GridLayoutStyle = style({
  display: "grid",
  gridAutoRows: "auto",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  columnGap: "16px",
  marginTop: "80px",
  marginLeft: "16px",
  marginRight: "16px",
  boxSizing: "content-box",

  "@media": {
    "screen and (min-width: 768px)": {
      gridTemplateColumns: "repeat(8, minmax(0, 1fr))",
    },
    "screen and (min-width: 1000px)": {
      gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
    },
  },
});

export const TmpLayout = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "8px",
  marginTop: "50px",
});

export const TitleStyle = style({
  fontSize: "24px",
  fontWeight: 600,
});

export const DescriptionStyle = style({
  marginTop: "16px",
  fontSize: "14px",
  fontWeight: 300,
  textAlign: "center",
  lineHeight: 1.5,
});

export const FormStyle = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "8px",
});

export const InputWrapperStyle = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "280px",
  gap: "4px",
});

export const InputStyle = style({
  padding: "8px 18px",
  border: `solid 1px ${vars.color.strokeBlack}`,
  borderRadius: "6px",
  width: "100%",
  height: "45px",
  display: "flex",
  alignItems: "center",
  boxSizing: "border-box",
  marginTop: "16px",
  position: "relative",

  "::placeholder": {
    color: "#e3e2e1",
  },
});

export const ButtonStyle = style({
  padding: "8px 18px",
  //   border: `solid 1px ${vars.color.strokeBlack}`,
  borderRadius: "6px",
  width: "100%",
  maxWidth: "280px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
  marginTop: "8px",
  color: vars.color.white,
  backgroundColor: vars.color.primary,

  ":disabled": {
    backgroundColor: vars.color.secondary,
  },
});
