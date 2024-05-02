import { ErrorNumberStyle, ErrorTextStyle } from "../style.css";

export default function Page() {
    return (
      <>
        <div className={ErrorNumberStyle}>404</div>
        <div className={ErrorTextStyle}>존재하지 않는 페이지입니다.</div>
      </>
        
    )
  }