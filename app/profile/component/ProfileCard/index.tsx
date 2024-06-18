import Image from "next/image"
import { ProfileATIDStyle, ProfileATIDWrapper, ProfileCardWrapperStyle, ProfileEditLinkStyle, ProfileImageStyle, ProfileInfoWrapperStyle, ProfileLoginLinkStyle, ProfileNameStyle } from "./style.css"
// import { auth } from "@/auth"
import Link from "next/link"
import Logo from "../../../../public/images/Loading.svg"
import { useSession } from "next-auth/react"

type Props = {
    className ?: any
    style ?: any
}

const ProfileCard = ({className, style}: Props) => {

    const session = useSession()

    return (
        <div className={`${className} ${ProfileCardWrapperStyle}`} style={style}>
            {
                session ? (
                    <Image unoptimized width={50} height={50} src={`https://images.weserv.nl/?url=${session?.data?.user.image}&w=150&h=150&output=webp&q=80`} alt="" className={ProfileImageStyle} priority placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88uR5PQAIkwMweFOllAAAAABJRU5ErkJggg=="/>
                ): (
                    <Image src={Logo} alt="" width={37} height={37}/>
                )
            }
            <div className={ProfileInfoWrapperStyle}>
                <span className={ProfileNameStyle}>{session ? session?.data?.user.name : "로그인해주세요"}</span>
                <div className={ProfileATIDWrapper}>
                    {
                        session?.data?.user.at_id ? <span className={ProfileATIDStyle}>@{session?.data?.user.at_id || ""}</span> : <></>
                    }
                    
                    {
                        session ? session?.data?.user.at_id ? <Link href={"/rename"} prefetch={true} className={ProfileEditLinkStyle}>수정하기</Link> :  <Link href={"/onboard"} prefetch={true} className={ProfileEditLinkStyle} style={{marginLeft: 0}}>@ 닉네임 설정하기</Link>
                        : <Link href={"/login"} prefetch={true} className={ProfileLoginLinkStyle}>로그인하기</Link>
                    }
                    
                </div>
            </div>
        </div>
    )

}

export default ProfileCard