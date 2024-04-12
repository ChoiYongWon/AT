import { auth } from "@/auth";
import { CancelButtonLayout, SubTitleStyle, TitleStyle } from "./style.css";
import CancelButton from "../_common/component/CancelButton";
import ImageForm from "./component/ImageForm";
import CategoryForm from "./component/CategoryForm";
import AddressForm from "./component/AddressForm";
import DetailForm from "./component/DetailForm";
import SubmitButton from "./component/SubmitButton";
import MapForm from "./component/MapForm";
import Form from "./component/Form";

export default async function AddPage() {
  return (
    <>
      <div className={CancelButtonLayout}>
        <CancelButton />
      </div>
      <Form>

        {/* -- 지도 선택 영역 */}
        <div className={TitleStyle} style={{ marginBottom: "10px" }}>지도 선택</div>
        <MapForm style={{ marginBottom: "30px" }}/>

        {/* -- 사진 영역 */}
        <div className={TitleStyle} style={{ marginBottom: "10px" }}>사진 추가</div>
        <ImageForm style={{ marginBottom: "30px" }}/>

        {/* -- 카테고리 영역 */}
        <div style={{ marginBottom: "10px" }} className={TitleStyle}>
          카테고리
          <span className={SubTitleStyle} style={{marginLeft: '4px'}}>(스페이스로 추가)</span>
        </div>
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
