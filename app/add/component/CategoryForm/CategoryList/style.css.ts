import { vars } from "@/app/_common/theme/contract.css";
import { keyframes, style } from "@vanilla-extract/css";

export const vibrate = keyframes({
  "0%": { transform: "rotate(1deg)" },
  "50%": { transform: "rotate(-1deg)" },
  "100%": { transform: "rotate(0deg)" },
});



export const CategoryInputWrapperStyle = style({
  width: "100%",
  minHeight: "48px",
  height: "auto",
  border: `${vars.color.strokeBlack} 1px solid`,
  backgroundColor: vars.color.white,
  borderRadius: "5px",
  display: "flex",
  flexWrap: "wrap",
  padding: "4px",
  boxSizing: "border-box",
  gap: "8px",
});

export const CategoryInputStyle = style({
  flex: 1,
  textTransform: 'lowercase',
  // maxWidth: "200px",
  minWidth: "100px",
  width: "auto",
  height: "40px",
  borderRadius: "5px",
  padding: "4px 8px",
  boxSizing: "border-box",
  fontSize: "14px",
  border: 'none',
  // caretColor: "transparent",
  willChange: 'transform',

  // ":focus": {
  //   border: `${vars.color.strokeBlack} 1px solid`,
  // },

  "::placeholder": {
    opacity: 0.5,
    fontSize: "14px",
  },

  "@media": {
    "screen and (min-width: 1000px)": {
      caretColor: "unset",

    },
  },
});

export const ErrorMessageStyle = style({
  fontSize: "12px",
  // fontWeight: "lighter",
  color: "#ee2e3d",
  marginTop: '4px',
});
