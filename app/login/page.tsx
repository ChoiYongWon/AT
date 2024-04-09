import Link from "next/link";
import {
  BackLinkStyle,
  DescriptionEngStyle,
  DescriptionKorStyle,
  FooterBackStyle,
  FooterInfoStyle,
  FooterWrapperStyle,
  LogoStyle,
} from "./style.css";
import LoginButtonGroup from "./LoginButtonGroup";


export default function LoginLayout() {

  return (
    <>
      <div className={LogoStyle}>LOGO</div>
      <span className={DescriptionKorStyle}>
        엣(AT)을 시작하려면 <br></br> 아주 간단한 로그인이 필요합니다😓
      </span>
      <span className={DescriptionEngStyle}>
        IF YOU WANT TO START AT(엣), YOU MUST CLICK HERE👇
      </span>

      <LoginButtonGroup/>

      <div className={FooterWrapperStyle}>
        <div className={FooterInfoStyle}>
          @(골뱅이)가 영어로 “AT”이라는 사실! 알고 계셨나요?
        </div>
        <div className={FooterBackStyle}>
          에잇! 로그인 귀찮아!{" "}
          <Link href={"/"} className={BackLinkStyle}>
            나 도라갈뤠~
          </Link>
        </div>
      </div>
    </>
  );
}
