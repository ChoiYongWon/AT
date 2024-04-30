import { assignInlineVars } from "@vanilla-extract/dynamic"
import { BackgroundStyle, ModalButtonGroupStyle, ModalButtonStyle, ModalContentStyle, ModalTitleStyle, ModalWrapperStyle } from "./style.css"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect } from "react"

type Props = {
    className?: any
    style?: any
    show: boolean
    setShow: (status: boolean)=>void
    children: any
}

const Modal = ({className, style, show, setShow, children}: Props) => {

    useEffect(()=>{

        if(show){
            document.body.style.top = `-${window.scrollY}px`
            document.body.style.position = 'fixed'
            document.body.style.overflow = 'hidden'

        }
        else{
            const scrollY = document.body.style.top
            document.body.style.overflow = 'unset'
            document.body.style.position = ''
            document.body.style.top = ''
            window.scrollTo(0, parseInt(scrollY || '0') * -1)
        }
            
    }, [show])


    return (
        <>
            <AnimatePresence mode="wait">

            {
                show ? 
                    <motion.div 
                        onClick={()=>setShow(false)}
                        key={'modal'}
                        initial={{ y: 5, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -5, opacity: 0 }}
                        transition={{ duration: 0.2 }} className={BackgroundStyle}>
                            <div className={ModalWrapperStyle} onClick={(e)=>e.stopPropagation()}>
                                {children}
                            </div>
                    </motion.div>

                    :
                    <></>
    
            }
            </AnimatePresence>

        </>
        
        
    )
}

type BaseProps = {
    className?: any
    style?: any
    onClick?: any
    children: any
}

const Title = ({className, style, children}: BaseProps) => {
    return (
        <span className={ModalTitleStyle}>{children}</span>
    )
}


const Content = ({className, style, children}: BaseProps) => {
    return (
        <p className={ModalContentStyle}>{children}</p>
    )
}

const ButtonGroup = ({className, style, children}: BaseProps) => {
    return (
        <div className={`${ModalButtonGroupStyle} ${className}`} style={style}>{children}</div>
    )
}

const Button = ({className, style, children, onClick}: BaseProps) => {
    return (
        <button onClick={onClick} className={`${ModalButtonStyle} ${className}`} style={style}>{children}</button>
    )
}

Modal.Title = Title
Modal.Content = Content
Modal.ButtonGroup = ButtonGroup
Modal.Button = Button


export default Modal