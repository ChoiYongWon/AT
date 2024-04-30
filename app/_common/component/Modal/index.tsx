import { assignInlineVars } from "@vanilla-extract/dynamic"
import { BackgroundStyle, ModalButtonGroupStyle, ModalButtonStyle, ModalContentStyle, ModalTitleStyle, ModalWrapperStyle } from "./style.css"
import { AnimatePresence, motion } from "framer-motion"

type Props = {
    className?: any
    style?: any
    show: boolean
    children: any
}

const Modal = ({className, style, show, children}: Props) => {
    return (
        <>
            <AnimatePresence mode="wait">

            {
                show ? 
                    <motion.div 
                        key={'modal'}
                        initial={{ y: 5, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -5, opacity: 0 }}
                        transition={{ duration: 0.2 }} className={BackgroundStyle}>
                            <div className={ModalWrapperStyle}>
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