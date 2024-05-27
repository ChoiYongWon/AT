import { DescriptionStyle, TitleStyle } from "./style.css";

import Form from "./component/Form";

export default function OnBoard() {
  return (
    <>
      <h1 className={TitleStyle}>사용자 닉네임 만들기</h1>
      <p className={DescriptionStyle}>
      새 계정에 사용할 닉네임을 선택하세요. 나중에 <br></br>언제든지 변경할 수
        있습니다.

      </p>
      <span style={{fontSize: "13px", fontStyle: "italic", fontSynthesis: 'style', opacity: 0.6, marginTop: "4px", }}>※ 지도를 생성하려면 닉네임이 필요합니다.</span>
      <Form />
    </>
  );
}
