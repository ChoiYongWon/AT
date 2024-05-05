import Image from "next/image"
import { ProfileATIDStyle, ProfileATIDWrapper, ProfileCardWrapperStyle, ProfileEditLinkStyle, ProfileImageStyle, ProfileInfoWrapperStyle, ProfileNameStyle } from "./style.css"
import { auth } from "@/auth"
import Link from "next/link"

type Props = {
    className ?: any
    style ?: any
}

const ProfileCard = async ({className, style}: Props) => {

    const session = await auth()

    return (
        <div className={`${className} ${ProfileCardWrapperStyle}`} style={style}>
            <Image width={50} height={50} src={session?.user.image as string} alt="" className={ProfileImageStyle} priority={true}/>
            <div className={ProfileInfoWrapperStyle}>
                <span className={ProfileNameStyle}>{session?.user.name}</span>
                <div className={ProfileATIDWrapper}>
                    <span className={ProfileATIDStyle}>@{session?.user.at_id}</span>
                    <Link href={"/rename"} prefetch={true} className={ProfileEditLinkStyle}>수정하기</Link>
                </div>
            </div>
        </div>
    )

}

export default ProfileCard