import { style } from "@vanilla-extract/css";
import { vars } from "../_common/theme/contract.css";

export const GridLayoutStyle = style({
  display: "grid",
  gridAutoRows: "auto",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  columnGap: "16px",
  marginTop: "25px",
  marginLeft: "16px",
  marginRight: "16px",
  boxSizing: "border-box",

  "@media": {
    "screen and (min-width: 768px)": {
      gridTemplateColumns: "repeat(8, minmax(0, 1fr))",
    },
    "screen and (min-width: 1000px)": {
      gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
    },
  },
});

export const CancelButtonLayout = style({
  gridColumn: "1 / span 4",
  height: "auto",
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",

  "@media": {
    "screen and (min-width: 768px)": {
      gridColumn: "3 / span 4",
    },
    "screen and (min-width: 1000px)": {
      gridColumn: "5 / span 4",
    },
  },
});

export const IntroduceLayoutStyle = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gridColumn: "1 / span 4",
  height: "auto",
  wordBreak: "keep-all",
  

  "@media": {
    "screen and (min-width: 768px)": {
      gridColumn: "3 / span 4",
    },
    "screen and (min-width: 1000px)": {
      gridColumn: "5 / span 4",
    },
  },
})

export const TitleStyle = style({
  //   fontWeight: "bold",
  fontSize: "32px",
  wordBreak: "keep-all",
  lineHeight: 1.4,
  fontWeight: 800
});

export const SubTitleStyle = style({
  fontSize: '20px',
  fontWeight: 800
})

export const DescriptionTitleStyle = style({
  fontSize: '16px',
  lineHeight: 1.6,
  fontWeight: "bold"
})

export const DescriptionStyle = style({
  fontSize: '14px',
  lineHeight: 1.6
})

export const LinkStyle = style({
  color: vars.color.primary,
  borderBottom: `${vars.color.primary} 1px solid`,
  paddingBottom: "1px",
})

export const LinkBlackStyle = style({
  color: vars.color.fontBlack,
  borderBottom: `${vars.color.strokeBlack} 1px solid`,
  paddingBottom: "1px",
})


export const ImageAddLayoutStyle = style({
  display: "flex",
  width: "100%",
});

export const DividerStyle = style({
  width: "100%",
  height: '1px',
  borderRadius: "10px",
  backgroundColor: '#37352F',
  opacity: 0.16,
})

export const TextWrapperStyle = style({
  fontSize: '14px',
  lineHeight: 1.6,
  // alignItems: "center"
})