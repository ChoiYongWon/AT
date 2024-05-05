import { vars } from "@/app/_common/theme/contract.css";
import { style } from "@vanilla-extract/css";

export const MapListCardWrapperStyle = style({
    width: "100%",
    height: 'auto',
    display: "flex",
    gap: "24px",
})

export const CreateMapWrapperStyle = style({
    width: "100%",
    height: 'auto',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
})

export const CreateMapImageStyle = style({
    height: "90px",
    width: "auto",
})

export const CreateMapButtonWrapperStyle = style({
    display: "flex",
    alignItems: "center",
    gap: "8px"
})

export const CreateMapButtonStyle = style({
    width: "24px",
    height: "24px",
    backgroundColor: vars.color.primary,
    border: `${vars.color.strokeBlack} 1px solid`,
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
})

export const CreateMapButtonImageStyle = style({
    width: "9px",
    height: "9px",
})

export const CreateMapTextStyle = style({
    fontSize: "16px",
    paddingBottom: "1px",
    borderBottom: `${vars.color.fontBlack} 1px solid`
})


export const MapListWrapperStyle = style({
    width: "100%",
    height: 'auto',
    // display: "flex",
    gap: "24px",
    display: "grid",
    gridAutoRows: "auto",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",

    "@media": {
        "screen and (min-width: 1300px)": {
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        },
      },
})

export const MapCardSkeletonStyle = style({
    gridColumn: "auto / span 1",
    height: "72px",
})
