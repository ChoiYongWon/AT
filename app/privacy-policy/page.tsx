import CancelButton from "./component/CancelButton";
import { CancelButtonLayout, ContentStyle, PrivacyPolicyLayout, TitleLayout, TitleStyle } from "./style.css";
const TITLE_MARGIN = '12px'
const CONTENT_MARGIN = '40px'


export default function Page() {

  return (
    <>
      <div className={CancelButtonLayout}>
        <CancelButton />
      </div>
      <div className={TitleLayout} style={{marginTop: "30px"}}>
        <span style={{fontSize: "24px", marginBottom: "24px", fontWeight: 800}}>개인정보처리방침</span>
        
      </div>
      <div className={PrivacyPolicyLayout} style={{marginTop: "20px"}}>
        <div className={TitleStyle} style={{marginBottom: TITLE_MARGIN}}>개인정보처리방침</div>
        <p className={ContentStyle} style={{marginBottom: CONTENT_MARGIN}}>A-spot-thur(이하 AT)는 개인정보보호법 등 관련 법령상의 개인정보 보호규정을 준수하며, 이용자의 개인정보를 소중하게 생각하고 있습니다. 이에 개인정보 처리방침을 다음과 같이 공지합니다.</p>
      
        <div className={TitleStyle} style={{marginBottom: TITLE_MARGIN}}>1. 개인정보의 처리 목적</div>
        <p className={ContentStyle} style={{marginBottom: "8px"}}>AT는 이용자의 개인정보를 다음의 목적을 위해 처리합니다.</p>
        <li className={ContentStyle} style={{marginBottom: CONTENT_MARGIN}}>회원 가입 및 관리</li>
      
        <div className={TitleStyle} style={{marginBottom: TITLE_MARGIN}}>2. 수집하는 개인정보 항목</div>
        <p className={ContentStyle} style={{marginBottom: "8px"}}>AT는 로그인, 회원 가입, 장소 등록 등을 위해 아래와 같은 개인정보를 수집하고 있습니다.</p>
        <li className={ContentStyle} style={{marginBottom: CONTENT_MARGIN}}>회원정보 : 이름, 이메일, 프로필사진</li>
      
        <div className={TitleStyle} style={{marginBottom: TITLE_MARGIN}}>3. 개인정보의 보유 및 이용기간</div>
        <p className={ContentStyle} style={{marginBottom: CONTENT_MARGIN}}>AT는 이용자가 회원에서 탈퇴하였을 때 관련 개인정보를 지체없이 파기합니다.</p>
 
        <div className={TitleStyle} style={{marginBottom: TITLE_MARGIN}}>4. 개인정보의 파기절차 및 방법</div>
        <p className={ContentStyle} style={{marginBottom: "8px"}}>이용자의 개인정보는 원칙적으로 탈퇴하는 순간 지체없이 파기됩니다. 파기절차 및 방법은 다음과 같습니다.</p>
        <li className={ContentStyle} style={{marginBottom: "4px"}}>파기절차 : 이용자가 회원가입을 통해 제공한 정보는 즉시 삭제됩니다. 유저가 업로드한 이미지는 서버 상태에 따라 순차적으로 삭제됩니다.그 이외 의 정보는 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라 (보유 및 이용기간 참조) 일정기간 저장된 후 파기됩니다. 탈퇴 이후에도 일정기간 저장되는 개인정보는 법률에 의한 경우가 아니고서는 보유되는 이외의 다른 목적으로 이용되지 않습니다.</li>
        <li className={ContentStyle} style={{marginBottom: CONTENT_MARGIN}}>파기방법 : 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.</li>
      
        <div className={TitleStyle} style={{marginBottom: TITLE_MARGIN}}>5. 개인정보 제공</div>
        <p className={ContentStyle} style={{marginBottom: "8px"}}>AT는 이용자의 개인정보를 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.</p>
        <li className={ContentStyle} style={{marginBottom: "4px"}}>이용자들이 사전에 동의한 경우</li>
        <li className={ContentStyle} style={{marginBottom: CONTENT_MARGIN}}>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
        
        <div className={TitleStyle} style={{marginBottom: TITLE_MARGIN}}>6. 개인정보처리 위탁</div>
        <p className={ContentStyle} style={{marginBottom: CONTENT_MARGIN}}>AT는 서비스 이행을 위하여 필요한 경우 이용자의 개인정보 처리를 위탁할 수 있으며, 이 경우 위탁받는 자와 위탁업무 내용 등을 미리 이용자에게 고지합니다.</p>
        
        <div className={TitleStyle} style={{marginBottom: TITLE_MARGIN}}>7. 이용자의 권리와 그 행사방법</div>
        <p className={ContentStyle} style={{marginBottom: CONTENT_MARGIN}}>이용자는 개인정보에 대해 언제든지 열람, 정정, 삭제를 요청할 수 있으며 AT는 이에 대해 지체없이 조치합니다. 이용자가 개인정보의 삭제를 요청하는 경우, 회원 탈퇴 절차를 진행합니다.</p>
      
        <div className={TitleStyle} style={{marginBottom: TITLE_MARGIN}}>8. 개인정보의 안전성 확보 조치</div>
        <p className={ContentStyle} style={{marginBottom: "8px"}}>AT는 개인정보보호법 등 관련 법령에서 요구하는 수준 이상의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
        <li className={ContentStyle} style={{marginBottom: CONTENT_MARGIN}}>개인정보처리시스템 접근 제한</li>
       
        <div className={TitleStyle} style={{marginBottom: TITLE_MARGIN}}>9. 개인정보관리책임자 및 담당자</div>
        <p className={ContentStyle} style={{marginBottom: "8px"}}>AT의 개인정보관리책임자와 담당자는 다음과 같습니다.</p>
        <li className={ContentStyle} style={{marginBottom: "4px"}}>개인정보관리책임자 : 최용원, yongwon4130@gmail.com, 010-4687-8737</li>
        <li className={ContentStyle} style={{marginBottom: "8px"}}>개인정보보호 담당자 : 최용원, yongwon4130@gmail.com, 010-4687-8737</li>
        <p className={ContentStyle} style={{marginBottom: CONTENT_MARGIN}}>이용자들은 개인정보보호와 관련하여 불만이나 문의사항이 있을 경우에는 개인정보관리책임자 혹은 담당자에게 연락할 수 있습니다.</p>
      </div>

    </>
  );
}
