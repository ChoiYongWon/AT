import CancelButton from "./component/CancelButton";
import FAQ from "./component/FAQ";
import { CancelButtonLayout, FAQLayout, TitleLayout } from "./style.css";
const MARGIN = '16px'


export default function Page() {

  return (
    <>
      <div className={CancelButtonLayout}>
        <CancelButton />
      </div>
      <div className={TitleLayout} style={{marginTop: "30px"}}>
        FAQ
      </div>
      <div className={FAQLayout} style={{marginTop: "20px"}}>
        <FAQ style={{marginBottom: MARGIN}}>
          <FAQ.Summary>검색이 안됩니다.</FAQ.Summary>
          <FAQ.Detail style={{marginTop: "20px"}}>검색은 기본적으로 카테고리, 지도명, 사용자명를 기준으로 이루어지며, 추가적으로 주소에서 (구,군)이나 (읍,면,동) 단위로 검색을 할 수 있습니다.<br></br><br></br>ex) "서울특별시 강서구 화곡동"에서 "강서구"와 "화곡동"이 검색 범위에 해당됩니다.</FAQ.Detail>
        </FAQ>
        <FAQ style={{marginBottom: MARGIN}}>
          <FAQ.Summary>검색어와 관련없는 결과가 노출됩니다.</FAQ.Summary>
          <FAQ.Image src={"https://github.com/ChoiYongWon/AT/assets/40623433/ec819068-d8e8-4a2a-ba5c-6955710066eb"}/>
          <FAQ.Detail style={{marginTop: "20px"}}>맞습니다. 위 사진과 같이 "화곡동", "맛집", "스시"를 검색하시면 각각의 검색결과를 취합해서 보여줍니다. 예를 들어, "스시"와 연관이 없더라도 "화곡동"과 연관이 있으면 검색 결과에 노출됩니다.</FAQ.Detail>
        </FAQ>
      </div>
    </>
  );
}
