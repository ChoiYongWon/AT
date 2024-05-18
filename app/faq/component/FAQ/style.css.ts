import { vars } from "@/app/_common/theme/contract.css";
import { style } from "@vanilla-extract/css";

export const FAQWrapperStyle = style({
    display: "flex",
    width: "100",
    padding: "20px 24px",
    backgroundColor: vars.color.white,
    borderRadius: "6px",
    border: `${vars.color.strokeBlack} 1px solid`,
    flexDirection: "column",
    cursor: "pointer",
    userSelect: 'none',
    outline: 'none',
    WebkitTapHighlightColor: 'transparent'

})


export const FAQSummaryWrapperStyle = style({
    fontSize: "15px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    height: "fit-content",
    listStyleType: "none",
    //@ts-ignore
    "&::-webkit-details-marker": {
        display: "none"
    }
    
})

export const FAQSummaryQuestionStyle = style({
    color: vars.color.primary,
    marginRight: "8px",
    fontWeight: 900,
    flex: 0,
    
})


export const FAQSummaryButtonWrapperStyle = style({
    flex: 1,
    minWidth: "18px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",

})

export const FAQSummaryButtonStyle = style({
    width: "16px",
    aspectRatio: "1 / 1",
    transition: "all .2s ease",
    transform: "rotate(0deg)",

    selectors: {
        [`${FAQWrapperStyle}[open] &`]: {
            transform: "rotate(-180deg)"
        }
    }
})

export const FAQImageWrapperStyle = style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "auto",
    margin: '16px auto',

    "@media": {
        "screen and (min-width: 768px)": {
          gridColumn: "3 / span 4",
        },
        "screen and (min-width: 1000px)": {
          gridColumn: "5 / span 4",
        },
    },
    
})

export const FAQImageStyle = style({
    width: "100%",
    height: "auto",
    borderRadius: "6px",
})

export const FAQDetailWrapperStyle = style({
    userSelect:"text",
    wordBreak: "keep-all"
})

export const FAQDetailStyle = style({
    fontSize: "13px",
    lineHeight: 1.8
})