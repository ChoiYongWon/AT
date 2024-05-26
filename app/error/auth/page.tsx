import { ErrorNumberStyle, ErrorTextStyle } from "../style.css";

export default function Page() {
    return (
      <>
        <div className={ErrorNumberStyle} style={{
          fontSize: "36px"
        }}>로그인 오류</div>
        <div className={ErrorTextStyle} style={{
          fontSize: "14px",
          marginTop: "4px"
        }}>다시 시도해주세요.</div>
      </>
        
    )
  }