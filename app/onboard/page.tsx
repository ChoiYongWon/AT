import { DescriptionStyle, TitleStyle } from "./style.css";

import Form from "./component/Form";

export default function OnBoard() {
  return (
    <>
      <h1 className={TitleStyle}>사용자 이름 만들기</h1>
      <p className={DescriptionStyle}>
        새 계정에 사용할 이름을 선택하세요. 나중에 <br></br>언제든지 변경할 수
        있습니다.
      </p>
      <Form />
    </>
  );
}
