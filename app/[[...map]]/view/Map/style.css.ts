import { style } from "@vanilla-extract/css";

export const MapLayoutStyle = style({
    userSelect: 'none',
    gridRowStart: '2',
    gridColumn: "1 / span 4",
    boxSizing: 'border-box',
    padding: '0 10px',
    display: "flex",
    justifyContent: "center",
  
    "@media": {
      "screen and (min-width: 768px)": {
        gridColumn: "2 / span 6",
        // marginTop: '80px',
      },
      "screen and (min-width: 1000px)": {
        gridColumn: "5 / span 4",
        // marginTop: '80px',
      },
    },
  })
  