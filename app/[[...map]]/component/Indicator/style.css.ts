import { vars } from "@/app/_common/theme/contract.css";
import { style } from "@vanilla-extract/css";

export const IndicatorWrapperStyle = style({
    cursor: "pointer",
	transition: "transform ease .5s",
    userSelect: 'none',
    outline: 'none',
    WebkitTapHighlightColor: 'transparent',
})

export const CardSyle = style({
    transformOrigin: "center",
    fill: vars.color.white,
    stroke: vars.color.strokeBlack,
})

export const NameStyle = style({
    textAnchor: "middle",
    fill: vars.color.fontBlack,
    fontSize: "10px",
    fontWeight: 800
})

export const CountStyle = style({
    textAnchor: "middle",
    fill: vars.color.primary,
    fontSize: "12px",
    fontWeight: 900
})

export const LoadingStyle = style({
    fill: vars.color.primary
})

// dark 테마

// export const CardSyle = style({
//     transformOrigin: "center",
//     fill: 'rgba(26, 26, 26, 0.8)',
//     // stroke: vars.color.strokeBlack,
    
//     // strokeWidth: 1.5
// })

// export const NameStyle = style({
//     textAnchor: "middle",
//     fill: vars.color.white,
//     fontSize: "10px",
//     fontWeight: 800
// })

// export const CountStyle = style({
//     textAnchor: "middle",
//     fill: vars.color.primary,
//     fontSize: "14px",
//     fontWeight: 900
// })