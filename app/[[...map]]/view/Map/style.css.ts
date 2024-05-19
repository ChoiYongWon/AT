import { style } from "@vanilla-extract/css";

export const MapLayoutStyle = style({
    userSelect: 'none',
    // gridRowStart: '2',
    // gridColumn: "1 / span 4",
    boxSizing: 'border-box',
    padding: '0 10px',
    display: "flex",
    justifyContent: "center",
    width: "100%",
    maxWidth: "360px",
    position: "relative"

  
    // "@media": {
    //   "screen and (min-width: 500px)": {
    //     width: "73%"

    //   },
    //   "screen and (min-width: 1000px)": {
    //     width: "73%"
    //   },
    // },
  })
  