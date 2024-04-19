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
  src: "url(/fonts/NanumSquareNeoTTF-aLt.woff), format('woff')",
  fontWeight: "light",
});

globalFontFace(nanumSquareNeo, {
  src: "url(/fonts/NanumSquareNeoTTF-bRg.woff), format('woff')",
  fontWeight: "normal",
});

globalFontFace(nanumSquareNeo, {
  src: "url(/fonts/NanumSquareNeoTTF-cBd.woff), format('woff')",
  fontWeight: "bold",
});

globalFontFace(nanumSquareNeo, {
  src: "url(/fonts/NanumSquareNeoTTF-dEb.woff), format('woff')",
  fontWeight: 800,
});

globalFontFace(nanumSquareNeo, {
  src: "url(/fonts/NanumSquareNeoTTF-eHv.woff), format('woff')",
  fontWeight: 900,
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
