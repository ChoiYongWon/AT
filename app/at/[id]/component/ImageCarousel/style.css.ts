import { vars } from "@/app/_common/theme/contract.css";
import { style } from "@vanilla-extract/css";

export const ImageCarouselWrapperStyle = style({
    width: "100%",
    aspectRatio: "1 / 1",
    position: "relative"
})

export const SwiperStyle = style({
    width: "100%",
    aspectRatio: "1 / 1",
    backgroundColor: "#e5e5e6"

})

export const SliderStyle = style({
    width: "100% !important",
    aspectRatio: "1 / 1",
})

export const ImageStyle = style({
    width: "100%",
    height: "100%",
    objectFit: "cover"
})

export const NextButtonWrapperStyle = style({
    position: "absolute",
    top: "calc(50% - 15px)",
    right: "12px",
    zIndex: 100,
    cursor: "pointer",
    ":disabled": {
        opacity: "0.2"
    }
})

export const PrevButtonWrapperStyle = style({
    position: "absolute",
    top: "calc(50% - 15px)",
    left: "12px",
    zIndex: 100,
    cursor: "pointer",
    ":disabled": {
        opacity: "0.2"
    }
})


export const BackButtonWrapperStyle = style({
    position: "absolute",
    top: "12px",
    left: "12px",
    zIndex: 100,
    cursor: "pointer",
})

export const BackButtonStyle = style({
    width: "15px",
    height: "15px"
})


export const CountStyle = style({
    position: "absolute",
    padding: "8px 16px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: vars.color.fontBlack,
    fontSize: "12px",
    top: "12px",
    right: "12px",
    backgroundColor: vars.color.white,
    border: `${vars.color.strokeBlack} 1px solid`,
    borderRadius: "100px",
    width: "auto",
    height: "auto",
    zIndex: 100
})