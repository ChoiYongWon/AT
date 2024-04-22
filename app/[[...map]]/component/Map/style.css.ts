import { vars } from "@/app/_common/theme/contract.css"
import { style } from "@vanilla-extract/css"
import { color } from "framer-motion"

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
  
  export const MapStyle = style({
    width: '90%',
    height: 'auto',
  
    "@media": {
      "screen and (min-width: 768px)": {
        width: '95%',
  
      },
      "screen and (min-width: 1000px)": {
        width: '100%',
  
      },
    },
  })

  export const MapAreaStyle = style({
    fill: vars.color.white
  })

  export const StrokeStyle = style({
    stroke: vars.color.strokeBlack,
    strokeWidth: 0.8
  })

//   export const MapAreaStyle = style({
//     fill: 'rgb(48, 56, 65)'
//   })

//   export const StrokeStyle = style({
//     stroke: vars.color.white,
//     strokeWidth: 0.8
//   })
