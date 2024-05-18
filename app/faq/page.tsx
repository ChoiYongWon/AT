import Image from "next/image";
import CancelButton from "./component/CancelButton";
import FAQ from "./component/FAQ";
import ShareIcon from "../../public/images/Share.svg"
import MenuVerticalIcon from "../../public/images/MenuVertical.svg"

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
          <FAQ.Summary>검색이 안 돼요.</FAQ.Summary>
          <FAQ.Detail style={{marginTop: "20px"}}>검색은 기본적으로 카테고리, 지도명, 사용자명를 기준으로 이루어지며, 추가적으로 주소에서 (구,군)이나 (읍,면,동) 단위로 검색을 할 수 있습니다.<br></br><br></br>ex) "서울특별시 강서구 화곡동"에서 "강서구"와 "화곡동"이 검색 범위에 해당됩니다.</FAQ.Detail>
        </FAQ>
        <FAQ style={{marginBottom: MARGIN}}>
          <FAQ.Summary>검색어와 관련없는 결과가 노출돼요.</FAQ.Summary>
          <FAQ.Image src={"https://github.com/ChoiYongWon/AT/assets/40623433/761d89f1-5bf3-4e1f-83cf-8aa17e427208"}/>
          <FAQ.Detail style={{marginTop: "20px"}}>맞습니다. 위 사진과 같이 "화곡동", "맛집", "스시"를 검색하시면 각각의 검색결과를 취합해서 보여줍니다. 예를 들어, "스시"와 연관이 없더라도 "화곡동"과 연관이 있으면 검색 결과에 노출됩니다.</FAQ.Detail>
        </FAQ>
        <FAQ style={{marginBottom: MARGIN}}>
          <FAQ.Summary>앱처럼 사용하고 싶어요.</FAQ.Summary>
          <FAQ.Detail style={{marginTop: "20px"}}>
            본 서비스는 PWA(Progressive Web App)를 지원하여 앱처럼 사용할 수 있습니다. 
            <br></br>
            아이폰의 경우 사파리 또는 크롬에서 
            <Image src={ShareIcon} alt="" width={13} height={13} style={{marginLeft: "4px", marginRight: "2px", verticalAlign: "sub"}} priority/>
             버튼을 클릭 후 홈화면에 추가 버튼을 클릭하여 설치할 수 있습니다.
             <br></br>
             <br></br>
             갤럭시의 경우 크롬에서
            <Image src={MenuVerticalIcon} alt="" width={16} height={16} style={{marginLeft: "4px", marginRight: "2px", verticalAlign: "sub"}} priority/> 
            버튼을 클릭 후 앱 설치 버튼을 클릭하여 설치하면 됩니다.
          </FAQ.Detail>
        </FAQ>
        <FAQ style={{marginBottom: MARGIN}}>
          <FAQ.Summary>원하는 주소 검색이 안 돼요.</FAQ.Summary>
          <FAQ.Detail style={{marginTop: "20px"}}>주소 검색 시 최대 5개의 결과만 표시되기 때문에 원하는 정보를 찾지 못할 수 있습니다.</FAQ.Detail>
          <FAQ.Image src={"https://github.com/ChoiYongWon/AT/assets/40623433/ae60dbc5-c142-43cb-866e-99164ca2f497"}/>
          <FAQ.Detail style={{marginTop: "20px"}}>이 경우, 행정 구역이나 상세정보를 구체적으로 입력하시면 더 정확한 결과를 얻을 수 있습니다.</FAQ.Detail>
          <FAQ.Image src={"https://github.com/ChoiYongWon/AT/assets/40623433/0dd82a4e-1b10-422e-8e90-6d94fb4c2b2e"}/>
        
        </FAQ>
      </div>
    </>
  );
}
