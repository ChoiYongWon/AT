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
          <FAQ.Summary>검색이 안 돼요</FAQ.Summary>
          <FAQ.Detail style={{marginTop: "20px"}}>검색은 기본적으로 태그, 지도명, 사용자명를 기준으로 이루어지며, 추가적으로 주소에서 (구,군)이나 (읍,면,동) 단위로 검색을 할 수 있습니다.<br></br><br></br>ex) "서울특별시 강서구 화곡동"에서 "강서구"와 "화곡동"이 검색 범위에 해당됩니다.</FAQ.Detail>
        </FAQ>
        <FAQ style={{marginBottom: MARGIN}}>
          <FAQ.Summary>검색어와 관련없는 결과가 노출돼요</FAQ.Summary>
          <FAQ.Image src={"https://github.com/ChoiYongWon/AT/assets/40623433/761d89f1-5bf3-4e1f-83cf-8aa17e427208"} width={500} height={63}/>
          <FAQ.Detail style={{marginTop: "20px"}}>맞습니다. 위 사진과 같이 "화곡동", "맛집", "스시"를 검색하시면 각각의 검색결과를 취합해서 보여줍니다. 예를 들어, "스시"와 연관이 없더라도 "화곡동"과 연관이 있으면 검색 결과에 노출됩니다.</FAQ.Detail>
        </FAQ>
        <FAQ style={{marginBottom: MARGIN}}>
          <FAQ.Summary>앱처럼 사용하고 싶어요</FAQ.Summary>
          <FAQ.Detail style={{marginTop: "20px"}}>
            본 서비스는 PWA(Progressive Web App)를 지원하여 앱처럼 사용이 가능합니다. 
            <br></br>
            아이폰 사용자는 사파리나 크롬에서 
            <Image src={ShareIcon} alt="" width={13} height={13} style={{marginLeft: "4px", marginRight: "2px", verticalAlign: "sub"}} priority/>
             버튼을 누른 후 '홈 화면에 추가'를 클릭하여 설치할 수 있습니다.
             <br></br>
             <br></br>
             갤럭시 사용자는 크롬에서
            <Image src={MenuVerticalIcon} alt="" width={16} height={16} style={{marginLeft: "4px", marginRight: "2px", verticalAlign: "sub"}} priority/> 
            버튼을 클릭한 다음 '앱 설치'를 눌러 설치할 수 있습니다. 삼성 인터넷에서는 테마 오류가 발생할 수 있으니 사용을 권장하지 않습니다.
          </FAQ.Detail>
        </FAQ>
        <FAQ style={{marginBottom: MARGIN}}>
          <FAQ.Summary>원하는 주소 검색이 안 돼요</FAQ.Summary>
          <FAQ.Detail style={{marginTop: "20px"}}>주소 검색 시 최대 5개의 결과만 표시되기 때문에 원하는 정보를 찾지 못할 수 있습니다.</FAQ.Detail>
          <FAQ.Image src={"https://github.com/ChoiYongWon/AT/assets/40623433/ae60dbc5-c142-43cb-866e-99164ca2f497"}  width={500} height={300}/>
          <FAQ.Detail style={{marginTop: "20px"}}>이 경우, 행정 구역이나 상세정보를 구체적으로 입력하시면 더 정확한 결과를 얻을 수 있습니다.</FAQ.Detail>
          <FAQ.Image src={"https://github.com/ChoiYongWon/AT/assets/40623433/0dd82a4e-1b10-422e-8e90-6d94fb4c2b2e"}  width={500} height={63}/>
        
        </FAQ>
        <FAQ style={{marginBottom: MARGIN}}>
          <FAQ.Summary>서버에 알수없는 오류가 발생했습니다</FAQ.Summary>
          <FAQ.Detail style={{marginTop: "20px"}}>"서버에 알수없는 오류가 발생했습니다."라는 알림이 지속적으로 뜰 경우, 재로그인을 해주시기 바랍니다.</FAQ.Detail>
          <FAQ.Image src={"https://github.com/ChoiYongWon/AT/assets/40623433/b5ab2df6-e8e3-40db-8fbb-7315213e5cd0"}  width={500} height={70}/>
          
        
        </FAQ>
      </div>
    </>
  );
}
