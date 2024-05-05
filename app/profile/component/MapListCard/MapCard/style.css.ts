import { vars } from "@/app/_common/theme/contract.css"
import { style } from "@vanilla-extract/css"

export const MapCardWrapperStyle = style({
    gridColumn: "auto / span 1",
    display: "flex",
    gap: "6px",
    flexDirection: "column",
})

export const MapCardStyle = style({
    gridColumn: "auto / span 1",
    border: `${vars.color.strokeBlack} 1px solid`,
    borderRadius: "6px",
    backgroundColor: vars.color.white,
    padding: "8px 22px",
    display: "flex",
    gap: "24px",
    alignItems: "center",
    justifyContent: "center"
    
})

export const MapCardNameWrapperStyle = style({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
})

export const MapCardNameStyle = style({
    fontSize: "14px"
})

export const MapCardMenuStyle = style({
    width: "24px",
    height: "24px",
    cursor: "pointer",
    position: "relative"
})

export const MapCardMenuImageStyle = style({
    width: "100%",
    height: "100%"
})


export const MapCardImageStyle = style({
    height: "53px",
    width: "auto"
})

export const MapCardInfoWrapperStyle = style({
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    justifyContent: "center",
    // alignItems: "center"
})

export const MapCardInfoTextWrapperStyle = style({
    display: "flex",
    gap: "6px",
    alignItems: "center"
})

export const MapCardATCountColorStyle = style({
    width: "6px",
    height: "6px",
    borderRadius: "10px",
    backgroundColor: vars.color.primary
})

export const MapCardATViewColorStyle = style({
    width: "6px",
    height: "6px",
    borderRadius: "10px",
    backgroundColor: vars.color.point_1
})

export const MapCardInfoTextStyle = style({
    fontSize: "10px"
})

export const MapCardMenuWrapperStyle = style({
    display: "flex",
    flexDirection: "column",
    padding: '12px',
    position: "absolute",
    top: "100%",
    right: 0,
    gap: "8px",
    border: `${vars.color.strokeBlack} 1px solid`,
    borderRadius: "6px",
    backgroundColor: vars.color.white,


})

export const MapCardMenuButtonStyle = style({
    display: "flex",
    // flexBasis: "content",

    gap: "8px",
    alignItems: "center",
})

export const MapCardShareIconStyle = style({
    width: "9px",
    height: "auto"
})

export const MapCardDeleteIconStyle = style({
    fill: "#FF5353",
    width: "13px",
    height: "auto",
})

export const MapCardIconWrapperStyle = style({
    width: "13px",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

})

export const MapCardTextStyle = style({
    // flexBasis: "content",
    fontSize: "10px",
    wordBreak: "keep-all",
})