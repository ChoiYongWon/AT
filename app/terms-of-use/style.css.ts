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
  padding: "0 16px",


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

  export const TitleLayout = style({
    gridColumn: "1 / span 4",
    height: "auto",
    width: "100%",
    display: "flex",
    alignItems: "center",
    fontSize: "18px",
  
    "@media": {
      "screen and (min-width: 768px)": {
        gridColumn: "3 / span 4",
      },
      "screen and (min-width: 1000px)": {
        gridColumn: "5 / span 4",
      },
    },
  });

export const TermsOfUseLayout = style({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gridColumn: "1 / span 4",
    "@media": {
      "screen and (min-width: 768px)": {
        gridColumn: "3 / span 4",
      },
      "screen and (min-width: 1000px)": {
        gridColumn: "5 / span 4",
      },
    },
    wordBreak: "keep-all"
})

export const TitleStyle = style({
    fontSize: "18px",
    fontWeight: "bold",
})

export const ContentStyle = style({
    fontSize: "13px",
    lineHeight: 1.6,
    marginLeft: "24px",
})

export const UlStyle = style({
  margin: "8px 0",
  fontSize: "13px",
  lineHeight: 1.6,
  // marginLeft: "24px",
})

export const NumberListStyle = style({
  fontSize: "13px",
  lineHeight: 1.6,
  marginLeft: "24px",
  paddingLeft: 0,
  listStyle: 'none'

})