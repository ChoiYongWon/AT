'use client'

import CancelButton from "./component/CancelButton";
import { CancelButtonLayout, ContentStyle, NumberListStyle, TermsOfUseLayout, TitleLayout, TitleStyle, UlStyle } from "./style.css";
const TITLE_MARGIN = '12px'
const CONTENT_MARGIN = '40px'


export default function Page() {

  return (
    <>
      <div className={CancelButtonLayout}>
        <CancelButton />
      </div>
      <div className={TitleLayout} style={{marginTop: "30px"}}>
        <span style={{fontSize: "24px", marginBottom: "24px", fontWeight: 700}}>서비스 이용 약관</span>
        
      </div>
      <div className={TermsOfUseLayout} style={{marginTop: "20px"}}>
      
        <div className={TitleStyle} style={{marginBottom: TITLE_MARGIN}}>제1조 (목적)</div>
        <p className={ContentStyle} style={{marginBottom: CONTENT_MARGIN}}>본 약관은 회사가 제공하는 A-spot-thur 등의 서비스(이하 "서비스"라 함)를 이용함에 있어 권리, 의무, 책임 및 기타 필요한 사항을 규정함을 목적으로 합니다.</p>
        

        <div className={TitleStyle} style={{marginBottom: TITLE_MARGIN}}>제2조 (약관의 효력과 변경)</div>
        <ul className={UlStyle} style={{marginBottom: CONTENT_MARGIN}}>
          <li className={NumberListStyle} style={{marginBottom: "8px"}}>1. 본 약관은 서비스를 이용하고자 하는 모든 사용자에게 그 적용을 받습니다.</li>
          <li className={NumberListStyle} style={{marginBottom: "8px"}}>2. 회사는 필요하다고 인정되는 경우 본 약관을 변경할 수 있으며, 변경된 약관은 서비스 내 공지사항에 게시함으로써 효력을 발생합니다.</li>
          <li className={NumberListStyle} style={{marginBottom: "8px"}}>3. 회원은 변경된 약관에 대해 동의하지 않을 권리가 있으며, 동의하지 않을 경우 서비스 이용이 제한될 수 있습니다.</li>
        </ul>
       
        <div className={TitleStyle} style={{marginBottom: TITLE_MARGIN}}>제3조 (용어의 정의)</div>
        <p className={ContentStyle} style={{marginBottom: "8px"}}>이 약관에서 사용하는 용어의 정의는 다음과 같습니다. 그 외의 용어는 ‘서비스’별 안내에서 정하는 바에 의합니다.</p>
        <ul className={UlStyle} style={{marginBottom: CONTENT_MARGIN}}>
          <li className={NumberListStyle} style={{marginBottom: "8px"}}>1. ‘서비스’: 회사가 제공하는 A-spot-thur을 의미합니다.</li>
          <li className={NumberListStyle} style={{marginBottom: "8px"}}>2. ‘회원’ : 이 약관에 동의하고 ‘회사’와 이용 계약을 체결하여, ‘회사’가 제공하는 ‘서비스’를 이용하는 자를 말합니다.</li>
          <li className={NumberListStyle} style={{marginBottom: "8px"}}>3. 게시물 : ‘회원’이 ‘서비스’를 이용함에 있어 ‘‘서비스’상 ‘회원’” 이외의 제3자까지 확인할 수 있는 게시판에 게시하는 문자ㆍ화상 등의 정보 형태의 글, 사진 등을 의미합니다.</li>
        </ul>

        <div className={TitleStyle} style={{marginBottom: TITLE_MARGIN}}>제4조 (회원가입 및 계정 관리)</div>
        <ul className={UlStyle} style={{marginBottom: CONTENT_MARGIN}}>
          <li className={NumberListStyle} style={{marginBottom: "8px"}}>1. ‘본 서비스를 이용하려면 회원 가입이 필요합니다.</li>
          <li className={NumberListStyle} style={{marginBottom: "8px"}}>2. 회사는 회원에 대한 정보를 관리하기 위해 개인정보를 수집하며, 이에 대한 내용은 개인정보 처리방침에서 규정합니다.</li>
        </ul>

        <div className={TitleStyle} style={{marginBottom: TITLE_MARGIN}}>제5조 (서비스 제공의 중지)</div>
        <ul className={UlStyle} style={{marginBottom: CONTENT_MARGIN}}>
          <li className={NumberListStyle} style={{marginBottom: "8px"}}>1. 회사는 다음과 같은 경우 서비스 제공을 중지할 수 있습니다.</li>
          <ul className={UlStyle} style={{marginLeft: "24px", listStyle: 'circle'}}>
            <li className={ContentStyle} style={{marginBottom: "8px"}}>서비스 설비의 보수 등 공사로 인한 부득이한 경우</li>
            <li className={ContentStyle} style={{marginBottom: "8px"}}>서비스 이용량의 폭주 등으로 인한 서비스 안정성 확보를 위해 필요한 경우</li>
          </ul>
          <li className={NumberListStyle} style={{marginBottom: "8px"}}>2. 회사는 제1항의 경우 사전에 회원에게 공지할 수 있습니다.</li>
        </ul>

        <div className={TitleStyle} style={{marginBottom: TITLE_MARGIN}}>제6조 (면책조항)</div>
        <ul className={UlStyle} style={{marginBottom: CONTENT_MARGIN}}>
          <li className={NumberListStyle} style={{marginBottom: "8px"}}>1. 회사는 천재지변, 전쟁, 테러, 해킹 등 불가항력적인 사유로 인하여 서비스를 제공할 수 없는 경우 책임을 지지 않습니다.</li>
          <li className={NumberListStyle} style={{marginBottom: "8px"}}>2. 회사는 회원의 귀책사유로 인해 발생한 손해에 대해 책임을 지지 않습니다.</li>
        </ul>

        <div className={TitleStyle} style={{marginBottom: TITLE_MARGIN}}>제7조 (재판권 및 준거법)</div>
        <ul className={UlStyle} style={{marginBottom: CONTENT_MARGIN}}>
          <li className={NumberListStyle} style={{marginBottom: "8px"}}>1. 서비스 이용에 관한 분쟁은 회사와 회원간의 합의에 의해 원만히 해결하여야 합니다.</li>
          <li className={NumberListStyle} style={{marginBottom: "8px"}}>2. 본 약관에 정한 사항에 관하여 소송이 제기될 경우 민사소송법 등 관련 법령에 따른 법원을 관할 법원으로 합니다.</li>
        </ul>

        <div className={TitleStyle} style={{marginBottom: TITLE_MARGIN}}>제8조(‘회원’의 의무)</div>
        <ul className={UlStyle} style={{marginBottom: CONTENT_MARGIN}}>
          <li className={NumberListStyle} style={{marginBottom: "8px"}}>1. ‘회원’은 관계법령, 이 약관의 규정, 이용안내 및 ‘서비스’와 관련하여 공지한 주의사항, ‘회사’가 통지하는 사항 등을 준수하여야 하며, 기타 ‘회사’의 업무에 방해되는 행위를 하여서는 안 됩니다.</li>
          <li className={NumberListStyle} style={{marginBottom: "8px"}}>2. ‘회원’은 다음 각 행위를 하여서는 안 됩니다.</li>
          <ul className={UlStyle} style={{marginLeft: "24px"}}>
            <li className={NumberListStyle} style={{marginBottom: "8px"}}>(1) 상업적 용도의 게시물을 작성하는 행위</li>
            <li className={NumberListStyle} style={{marginBottom: "8px"}}>(2) 무분별한 신고 행위</li>
            <li className={NumberListStyle} style={{marginBottom: "8px"}}>(3) 게시물에 등록된 위치와 관련없는 내용을 작성하는 행위</li>
            <li className={NumberListStyle} style={{marginBottom: "8px"}}>(4) 회사의 명시적인 동의 없이 서비스를 이용하여 얻은 정보를 상업적으로 이용하거나 타인에게 제공하는 행위</li>
            <li className={NumberListStyle} style={{marginBottom: "8px"}}>(5) 기타 불법적이거나 부당한 행위</li>
          </ul>
          <li className={NumberListStyle} style={{marginBottom: "8px"}}>3. 회사는 회원이 서비스 이용 중 발생한 문제에 대해 책임을 지지 않습니다.</li>
        </ul>

        <div className={TitleStyle} style={{marginBottom: TITLE_MARGIN}}>제9조 (‘서비스’ 이용제한)</div>
        <ul className={UlStyle} style={{marginBottom: CONTENT_MARGIN}}>
          <li className={NumberListStyle} style={{marginBottom: "8px"}}>1. ‘회사’는 ‘회원’이 본 약관의 의무를 위반하거나 ‘서비스’의 정상적인 운영을 방해한 경우, 점진적 (1일, 3일, 7일, 30일 영구정지)으로 ‘서비스’ 이용을 제한할 수 있습니다. </li>
          <li className={NumberListStyle} style={{marginBottom: "8px"}}>2. 본 조에 따라 ‘서비스’ 이용을 제한하는 경우, ‘회사’는 ‘회원’에게 이용제한 사유, 이용제한 유형 및 기간, 이용제한에 대한 이의신청 방법을 통지합니다.</li>
          <li className={NumberListStyle} style={{marginBottom: "8px"}}>3. ‘회원’은 본 조에 따른 이용제한 등에 대해 ‘회사’가 정한 절차에 따라 이의신청을 할 수 있습니다. 이 때 이의가 정당하다고 ‘회사’가 인정하는 경우 ‘회사’는 즉시 ‘서비스’의 이용을 재개합니다.</li>
        </ul>

        <div className={TitleStyle} style={{marginBottom: TITLE_MARGIN}}>부칙</div>
        <p className={ContentStyle} style={{marginBottom: CONTENT_MARGIN}}>본 약관은 2024년 05월 18일부터 시행됩니다.</p>
      </div>
    </>
  );
}
