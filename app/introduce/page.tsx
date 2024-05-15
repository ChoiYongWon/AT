import { auth } from "@/auth";
import { CancelButtonLayout, DescriptionStyle, DividerStyle, IntroduceLayoutStyle, LinkStyle, SubTitleStyle, TextWrapperStyle, TitleStyle } from "./style.css";
import CancelButton from "./component/CancelButton";
import Link from "next/link";
import Image from "next/image";
import AddButton from "../../public/images/ImageAddButton.svg"
import SearchButton from "../../public/images/ImageSearchButton.svg"
import MenuBar from "../../public/images/MenuBar.svg"
import MenuButton from "../../public/images/Menu.svg"



export default async function AddPage() {
  return (
    <>
      <div className={CancelButtonLayout}>
        <CancelButton/>
      </div>
      <div className={IntroduceLayoutStyle}>
            <span className={TitleStyle} style={{marginTop: "20px"}}>나만의 지도를 만들어보자!</span>
            <div className={DividerStyle} style={{marginTop: "30px"}}></div>
            <span className={SubTitleStyle} style={{marginTop: "30px", fontWeight: "bold"}}>소개</span>
            <p className={DescriptionStyle} style={{marginTop: "18px"}}>AT는 
            <Link className={LinkStyle} href={"https://jyj-map.vercel.app"} style={{marginLeft: "4px"}} target="_blank">정용진 맛집 지도</Link>
            를 모티브로 삼아, 원하는 장소를 직접 추가하여 개인의 지도를 만들고 공유할 수 있는 서비스입니다.</p>

            <span className={SubTitleStyle} style={{marginTop: "50px", fontWeight: "bold"}}>사용법</span>
            <div className={TextWrapperStyle} style={{marginTop: "18px", fontSize: "17px"}}>
                1. 
                <Image src={AddButton} alt="" width={20} height={20} style={{marginLeft: "8px", marginRight: "6px", verticalAlign: "sub"}}></Image>
                버튼으로 장소 추가
            </div>

            <span className={DescriptionStyle} style={{marginTop: "34px", fontSize: "17px"}}>2. 등록된 장소 탐색하기</span>
            <div className={TextWrapperStyle} style={{marginLeft: "24px", marginTop: "10px"}}>
                <Image src={SearchButton} alt="" width={20} height={20} style={{ marginRight: "6px", verticalAlign: "sub"}}/>
                클릭 후 검색! (스페이스나 엔터로 카테고리를 추가할 수 있습니다.)
            </div>
            <Image src={"https://github.com/ChoiYongWon/AT/assets/40623433/6f8bb952-c8aa-4112-98a4-92a3819cee73"} 
                alt="" width={300} height={53} style={{margin: "0 auto", marginTop: "10px", width: "80%", height: "auto"}}/>


            <span className={DescriptionStyle} style={{marginTop: "44px", fontSize: "17px"}}>3. 지도 공유하기</span>
            <div className={TextWrapperStyle} style={{marginLeft: "24px", marginTop: "10px"}}>
                <Image src={MenuBar} alt="" width={16} height={16} style={{ marginRight: "6px", verticalAlign: "sub"}}/>
                클릭 후 지도 목록에서
                <Image src={MenuButton} alt="" width={20} height={20} style={{ marginLeft: "6px", marginRight: "6px", verticalAlign: "sub"}}/>
                누르고 공유하기
            </div>
            <Image src={"https://github.com/ChoiYongWon/AT/assets/40623433/efcafcc5-36ae-4c94-a20f-9768c83fc56f"} 
                alt="" width={200} height={200} style={{margin: "0 auto", marginTop: "16px", maxWidth: "150px", width: "80%", height: "auto"}}/>
            <div className={TextWrapperStyle} style={{marginLeft: "24px", marginTop: "16px"}}>
                https://a-spot-thur.app/&#123;아이디&#125;/&#123;지도명&#125; 형식으로 공유할 수 있습니다.
            </div>
            <div className={TextWrapperStyle} style={{marginLeft: "24px", marginTop: "4px", marginBottom: "100px"}}>
                인스타그램 프로필소개, 카카오톡등에 공유해보세요! 
            </div>
        </div>
    </>
  );
}
