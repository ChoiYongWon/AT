import {
  fontFace,
  style,
  globalFontFace,
  globalStyle,
} from "@vanilla-extract/css";
import "./layers.css";
import "./reset.css";

const nanumSquareNeo = "NanumSquareNeo";
const poppins = "Poppins";

globalFontFace(nanumSquareNeo, {
  src: "url(/fonts/NanumSquareNeo-aLt.woff), format('woff')",
  fontWeight: "light",
});

globalFontFace(nanumSquareNeo, {
  src: "url(/fonts/NanumSquareNeo-bRg.woff), format('woff')",
  fontWeight: "normal",
});

globalFontFace(nanumSquareNeo, {
  src: "url(/fonts/NanumSquareNeo-cBd.woff), format('woff')",
  fontWeight: "bold",
});

globalFontFace(poppins, {
  src: "url(/fonts/Poppins-Light.woff), format('woff')",
  fontWeight: "light",
});

globalFontFace(poppins, {
  src: "url(/fonts/Poppins-Regular.woff), format('woff')",
  fontWeight: "normal",
});

globalFontFace(poppins, {
  src: "url(/fonts/Poppins-Bold.woff), format('woff')",
  fontWeight: "bold",
});

globalStyle("html, body", {
  fontFamily: `${nanumSquareNeo}, ${poppins}`,
  padding: 0,
  margin: 0,
});
