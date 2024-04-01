import { SubTitleStyle, TitleStyle } from "./style.css";
import ImageForm from "./ImageForm";
import CategoryForm from "./CategoryForm";
import AddressForm from "./AddressForm";
import DetailForm from "./DetailForm";
import SubmitButton from "./SubmitButton";

type Props = {
  className?: any;
  style?: any;
};


const UploadForm = ({ className, style }: Props) => {
  return (
    <form className={className} style={style}>
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
      <SubmitButton style={{ marginTop: "34px" }}/>
    </form>


  );
};

export default UploadForm;
