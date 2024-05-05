import Image from "next/image"
import Link from "next/link"
import MapSmallImage from "../../../../../public/images/MapSmall.svg"
import MenuIcon from "../../../../../public/images/Menu.svg"
import DeleteIcon from "../../../../../public/images/Delete.svg"
import ShareIcon from "../../../../../public/images/Share.svg"


import { MapCardATCountColorStyle, MapCardATViewColorStyle, MapCardDeleteIconStyle, MapCardIconWrapperStyle, MapCardImageStyle, MapCardInfoTextStyle, MapCardInfoTextWrapperStyle, MapCardInfoWrapperStyle, MapCardMenuButtonStyle, MapCardMenuImageStyle, MapCardMenuStyle, MapCardMenuWrapperStyle, MapCardNameStyle, MapCardNameWrapperStyle, MapCardShareIconStyle, MapCardStyle, MapCardTextStyle, MapCardWrapperStyle } from "./style.css"
import { useState } from "react"
import { useDetectClickOutside } from "react-detect-click-outside"
import Modal from "@/app/_common/component/Modal"
import ConfirmButton from "@/app/_common/component/ConfirmButton"
import toast from "react-hot-toast/headless"



type Props = {
    className ?: any
    style ?: any
    at_id: string
    name: string
    count: number
    view: number
    id: string
}

export type GetAggregatedMapData = {
    id: string
    name: string
    user: {
        at_id: string
    }
    _count: {
      spots: number
    }
    view: number
}

const MapCard = ({className, style, id, at_id, name, count, view}: Props) => {

    const [toggle, setToggle] = useState(false)
    const [showModal, setModal] = useState(false)

    const onMenuClick = (e: any) => {
        e.preventDefault()
        console.log("CLICK")
        setToggle(prev=>!prev)
    }

    const onChildClick = (e: any) => {

        // click 이벤트 전파 방지
        e.stopPropagation()
    }

    const detectRef = useDetectClickOutside({
        onTriggered: () => {
            setToggle(false)
        },
      });
    
    const onDeleteMenuClick = () => {
        setModal(true)
        setToggle(false)
    }

    const onShareMenuClick = async () => {
        await navigator.clipboard.writeText(`https://a-spot-thur.app/${at_id}/${name}`);
        toast("클립보드에 복사되었습니다.")
        setToggle(false)

    }

    const onDeleteClick = (e: any) => {
        toast("기다려봐요 구현중.. ㅠㅠ")
        setModal(false)
    }

    return (
        <div className={MapCardWrapperStyle}>
            <Link href={`${at_id}/${name}`} className={MapCardStyle}>
                <Image src={MapSmallImage} alt="" className={MapCardImageStyle}/>
                <div className={MapCardInfoWrapperStyle}>
                    <div className={MapCardInfoTextWrapperStyle}>
                        <div className={MapCardATCountColorStyle}/>
                        <span className={MapCardInfoTextStyle}>{count} AT</span>
                    </div>
                    <div className={MapCardInfoTextWrapperStyle}>
                        <div className={MapCardATViewColorStyle}/>
                        <span className={MapCardInfoTextStyle}>{view} View</span>
                    </div>
                </div>
            </Link>
            <div className={MapCardNameWrapperStyle}>
                <Link href={`${at_id}/${name}`} className={MapCardNameStyle} prefetch={true}>{name}</Link>
                <button className={MapCardMenuStyle} onClick={onMenuClick}>
                    <Image src={MenuIcon} alt="" className={MapCardMenuImageStyle}/>
                    {
                        toggle ? (
                            <div className={MapCardMenuWrapperStyle} onClick={onChildClick} ref={detectRef}>

                                <div className={MapCardMenuButtonStyle} onClick={onShareMenuClick}>
                                        <div className={MapCardIconWrapperStyle}>
                                            <Image src={ShareIcon} alt="" className={MapCardShareIconStyle}/>
                                        </div>
                                    
                                        <div className={MapCardTextStyle}>공유하기</div>
                                </div>
                                <div className={MapCardMenuButtonStyle} onClick={onDeleteMenuClick}>
                                        <div className={MapCardIconWrapperStyle}>
                                            <Image src={DeleteIcon} alt="" className={MapCardDeleteIconStyle}/>
                                        </div>
                                    
                                        <div className={MapCardTextStyle} style={{color: "#FF5353"}}>삭제하기</div>

                                </div>
                                
                            </div>
                        ) : (
                            <></>
                        )
                    }
                </button>
            </div>
            <Modal show={showModal} setShow={setModal}>
                <Modal.Title>정말 삭제할까요?</Modal.Title>
                <Modal.Content>한번 삭제하면 되돌릴 수 없습니다.</Modal.Content>
                <Modal.ButtonGroup style={{marginTop: "14px"}}>
                    <Modal.Button onClick={()=>setModal(false)}>취소</Modal.Button>
                    <ConfirmButton onClick={onDeleteClick} style={{flex: 1}} text="삭제"/>
                </Modal.ButtonGroup>
            </Modal>
        </div>
    )

}

export default MapCard