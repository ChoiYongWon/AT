import { ErrorNumberStyle, ErrorTextStyle } from "../style.css";

export default function Page() {
    return (
      <>
        <div className={ErrorNumberStyle}>403</div>
        <div className={ErrorTextStyle}>권한이 없습니다.</div>
      </>
        
    )
  }