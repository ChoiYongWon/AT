'use client'

import { CancelButtonLayout, DescriptionStyle, SubTitleStyle, TitleStyle } from "./style.css";
import ImageForm from "./component/ImageForm";
import CategoryForm from "./component/CategoryForm";
import AddressForm from "./component/AddressForm";
import DetailForm from "./component/DetailForm";
import SubmitButton from "./component/SubmitButton";
import MapForm from "./component/MapForm";
import Form from "./component/Form";
import CancelButton from "./component/CancelButton";

export default async function AddPage() {
  return (
    <>
      <div className={CancelButtonLayout}>
        <CancelButton/>
      </div>
      <Form>

        {/* -- 지도 선택 영역 */}
        <div className={TitleStyle} style={{ marginBottom: "10px" }}>지도 선택</div>
        <span className={DescriptionStyle} style={{marginBottom: "10px"}}>※ 지도는 카테고리와 같은 역할을 합니다 (맛집, 방탈출, 카페 등등)</span>

        <MapForm style={{ marginBottom: "30px" }}/>


        {/* -- 사진 영역 */}
        <div className={TitleStyle} style={{ marginBottom: "10px" }}>사진 추가</div>
        <ImageForm style={{ marginBottom: "30px" }}/>

        {/* -- 태그 영역 */}
        <div style={{ marginBottom: "10px" }} className={TitleStyle}>
          태그
          <span className={SubTitleStyle} style={{marginLeft: '4px'}}>(스페이스로 추가)</span>
        </div>
        <span className={DescriptionStyle} style={{marginBottom: "10px"}}>※ 태그는 장소의 특징을 나열하는 역할을 합니다 (한식, 분위기, 가성비 등등)</span>

        <CategoryForm/>


        {/* -- 주소추가 영역 */}
        <div className={TitleStyle} style={{ marginBottom: "10px", marginTop: "40px" }}>주소 추가</div>
        <AddressForm style={{ marginBottom: "40px" }}/>

        {/* -- 설명 영역 */}
        <div className={TitleStyle} style={{ marginBottom: "10px" }}>자세한 설명</div>
        <DetailForm/>

        {/* --- 제출 버튼 */}
        <SubmitButton style={{ marginTop: "34px", marginBottom: "40px" }}/>

      </Form>
    </>
  );
}
