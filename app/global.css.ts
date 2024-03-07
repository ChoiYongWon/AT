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
  src: "url(/fonts/NanumSquareNeo-Variable.ttf), format('ttf')",
  fontWeight: "light",
});

globalFontFace(nanumSquareNeo, {
  src: "url(/fonts/NanumSquareNeo-Variable.ttf), format('ttf')",
  fontWeight: "normal",
});

globalFontFace(nanumSquareNeo, {
  src: "url(/fonts/NanumSquareNeo-Variable.ttf), format('ttf')",
  fontWeight: "bold",
});

globalFontFace(poppins, {
  src: "url(/fonts/Poppins-Light.ttf), format('ttf')",
  fontWeight: "light",
});

globalFontFace(poppins, {
  src: "url(/fonts/Poppins-Regular.ttf), format('ttf')",
  fontWeight: "normal",
});

globalFontFace(poppins, {
  src: "url(/fonts/Poppins-Bold.ttf), format('ttf')",
  fontWeight: "bold",
});

globalStyle("html, body", {
  fontFamily: `${nanumSquareNeo}, ${poppins}`,
  padding: 0,
  margin: 0,
});
