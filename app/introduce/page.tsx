import { auth } from "@/auth";
import { CancelButtonLayout, DescriptionStyle, DescriptionTitleStyle, DividerStyle, IntroduceLayoutStyle, LinkBlackStyle, LinkStyle, SubTitleStyle, TextWrapperStyle, TitleStyle } from "./style.css";
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

            {/* ---- 소개 ---- */}
            <span className={TitleStyle} style={{marginTop: "20px"}}>나만의 지도를 만들어보자!</span>
            <div className={DividerStyle} style={{marginTop: "30px"}}></div>
            <span className={SubTitleStyle} style={{marginTop: "30px", fontWeight: 600}}>소개</span>
            <p className={DescriptionStyle} style={{marginTop: "18px"}}>AT(A Spot Thur)는 
            <Link className={LinkStyle} href={"https://jyj-map.vercel.app"} style={{marginLeft: "4px"}} target="_blank">정용진 맛집 지도</Link>
            를 모티브로 삼아, 원하는 장소를 직접 추가하여 개인의 지도를 만들고 공유할 수 있는 서비스입니다.</p>
            <Image src={"https://github.com/ChoiYongWon/AT/assets/40623433/21f2f5c9-90c2-469c-9765-459eafb92766"} priority
                alt="" width={500} height={2600} style={{margin: "0 auto", marginTop: "16px", width: "60%", height: "auto"}}/>
            <span className={DescriptionStyle} style={{marginTop: "8px", marginLeft: "auto", marginRight: "auto", fontSize: "12px", fontStyle: "italic"}}>A Spot Thur (AT)</span>

            
            {/* ---- 사용법 ---- */}
            <span className={SubTitleStyle} style={{marginTop: "50px", fontWeight: 600}}>사용법</span>

            {/* ---- 1. 버튼으로 장소 추가 ---- */}
            <div className={TextWrapperStyle} style={{marginTop: "18px", fontSize: "16px"}}>
                <span className={DescriptionTitleStyle}>1. </span>
                <Image src={AddButton} alt="" width={18} height={18} style={{marginLeft: "8px", marginRight: "6px", verticalAlign: "sub"}} priority></Image>
                <span className={DescriptionTitleStyle}>버튼으로 장소 추가</span>
            </div>

            {/* ---- 1-1 설명 ---- */}
            <span className={DescriptionStyle} style={{marginTop: "10px", marginLeft: "24px"}}>- 지도 선택하기 탭에서 지도를 추가해보세요!</span>

            <Image src={"https://github.com/ChoiYongWon/AT/assets/40623433/9c6b456c-14c0-46c3-af29-845ba8444a4c"} priority
                alt="" width={200} height={200} style={{margin: "0 auto", marginTop: "10px", height: "auto"}}/>

            <span className={DescriptionStyle} style={{marginTop: "8px", marginLeft: "auto", marginRight: "auto", fontSize: "12px", fontStyle: "italic"}}>지도는 최대 4개까지 생성할 수 있습니다.</span>


            {/* ---- 1-2 설명 ---- */}
            <span className={DescriptionStyle} style={{marginTop: "48px", marginLeft: "24px"}}>- 나머지 정보들을 입력해서 장소를 추가해보세요!</span>

            <Image src={"https://github.com/ChoiYongWon/AT/assets/40623433/0362d3d3-fdaa-472c-ba2c-0ad495d32ffb"} priority
                alt="" width={400} height={200} style={{margin: "0 auto", marginTop: "0px", width:"85%", height: "auto"}}/> 

            <span className={DescriptionStyle} style={{marginTop: "4px", marginLeft: "auto", marginRight: "auto", fontSize: "12px", fontStyle: "italic"}}>사진은 한번에 최대 10장까지 업로드할 수 있습니다.</span>



            {/* ---- 2. 등록된 장소 탐색하기 ---- */}
            <span className={DescriptionTitleStyle} style={{marginTop: "80px"}}>2. 등록된 장소 탐색하기</span>

            <div className={TextWrapperStyle} style={{marginLeft: "24px", marginTop: "10px"}}>
                <Image src={SearchButton} alt="" width={20} height={20} style={{ marginRight: "6px", verticalAlign: "sub"}} priority/>
                클릭 후 검색어 입력! 
            </div>
            <Image src={"https://github.com/ChoiYongWon/AT/assets/40623433/6f8bb952-c8aa-4112-98a4-92a3819cee73"} priority
                alt="" width={400} height={53} style={{margin: "0 auto", marginTop: "10px", width: "80%", height: "auto"}}/>
            <span className={DescriptionStyle} style={{marginTop: "12px", marginLeft: "auto", marginRight: "auto", fontSize: "12px", fontStyle: "italic"}}>스페이스나 엔터로 카테고리를 추가할 수 있습니다.</span>


            {/* ---- 3. 지도 공유하기 ---- */}
            <span className={DescriptionTitleStyle} style={{marginTop: "100px"}}>3. 지도 공유하기</span>
            <div className={TextWrapperStyle} style={{marginLeft: "24px", marginTop: "10px"}}>
                메인화면에서 
                <Image src={MenuBar} alt="" width={16} height={16} style={{ margin: "0 6px", verticalAlign: "sub"}} priority/>
                클릭 후 지도 목록에서
                <Image src={MenuButton} alt="" width={20} height={20} style={{ marginLeft: "6px", marginRight: "6px", verticalAlign: "sub"}} priority/>
                누르고 공유하기
            </div>
            <Image src={"https://github.com/ChoiYongWon/AT/assets/40623433/efcafcc5-36ae-4c94-a20f-9768c83fc56f"} priority
                alt="" width={200} height={200} style={{margin: "0 auto", marginTop: "16px", maxWidth: "150px", width: "80%", height: "auto"}}/>
            <span className={DescriptionStyle} style={{marginTop: "8px", marginLeft: "auto", marginRight: "auto", fontSize: "12px", fontStyle: "italic"}}>지도 공유하기</span>

            <div className={TextWrapperStyle} style={{marginLeft: "24px", marginTop: "32px"}}>
                <span className={LinkBlackStyle} style={{marginRight: "4px"}}>
                    https://a-spot-thur.app/&#123;아이디&#125;/&#123;지도명&#125;
                </span>
                형식으로 공유할 수 있습니다.
            </div>
            <div className={TextWrapperStyle} style={{marginLeft: "24px", marginTop: "4px"}}>
                인스타그램 프로필소개, 카카오톡등에 공유해보세요! 
            </div>

            <span className={DescriptionTitleStyle} style={{marginTop: "100px"}}>4. 그 외</span>
            <span className={DescriptionStyle} style={{marginTop: "8px", marginLeft: "24px"}}>사용하시면서 궁금한게 생기시면 
            <Link className={LinkStyle} href={"https://jyj-map.vercel.app"} style={{marginLeft: "4px"}} target="_blank">FAQ</Link>
            를 참조하시거나 
            <Link className={LinkStyle} href={"https://forms.gle/padVC81QrYiZDTEm7"} style={{marginLeft: "4px"}} target="_blank">문의</Link>
            주세요!</span>

            <span className={DescriptionStyle} style={{marginTop: "64px", marginLeft: "auto", marginRight: "auto", fontSize: "12px", fontStyle: "italic",marginBottom: "125px"}}>잘부탁드립니다.</span>

        </div>
    </>
  );
}
