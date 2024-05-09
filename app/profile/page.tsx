import { signOut, useSession } from "next-auth/react";
import { CancelButtonLayout, ProfileLayoutStyle, TitleStyle } from "./style.css";
import CancelButton from "./component/CancelButton";
import ProfileCard from "./component/ProfileCard";
import MapListCard from "./component/MapListCard";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import MoreCard from "./component/MoreCard";

export default function Profile() {

  return (
    <>
      <div className={CancelButtonLayout}>
        <CancelButton />
      </div>
      <div className={ProfileLayoutStyle}>

          {/* -- 내 정보 영역 */}
          <div className={TitleStyle} style={{ marginBottom: "10px" }}>내 정보</div>
          <ProfileCard style={{ marginBottom: "30px" }}/>


          {/* -- 내 지도 영역 */}
          <div className={TitleStyle} style={{ marginBottom: "10px" }}>내 지도</div>
          <MapListCard style={{ marginBottom: "30px" }}/>

          {/* -- 더 보기 영역 */}
          <div className={TitleStyle} style={{ marginBottom: "10px" }}>더 보기</div>
          <MoreCard style={{ marginBottom: "30px" }}/>

      </div>

    </>
  );
}
