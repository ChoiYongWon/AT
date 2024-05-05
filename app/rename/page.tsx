import { DescriptionStyle, TitleStyle } from "./style.css";

import Form from "./component/Form";

export default function Page() {
  return (
    <>
      <h1 className={TitleStyle}>사용자 닉네임 변경</h1>
      <p className={DescriptionStyle}>
        새로 사용할 닉네임을 입력해주세요. 나중에 <br></br>언제든지 변경할 수
        있습니다.
      </p>
      <Form />
    </>
  );
}
