import { assignInlineVars } from "@vanilla-extract/dynamic"
import { BackgroundStyle, ModalButtonGroupStyle, ModalButtonStyle, ModalContentStyle, ModalInputStyle, ModalTitleStyle, ModalWrapperStyle, RadioButtonCheckedStyle, RadioButtonInputStyle, RadioButtonStyle, RadioButtonWrapperStyle, RadioGroupStyle } from "./style.css"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

type Props = {
    className?: any
    style?: any
    show: boolean
    setShow: (status: boolean)=>void
    children: any
}

const Modal = ({className, style, show, setShow, children}: Props) => {

    const [entered, setEntered] = useState(false)

    useEffect(()=>{

        if(show){
            document.body.style.top = `-${window.scrollY}px`
            document.body.style.position = 'fixed'
            document.body.style.overflow = 'hidden'
            document.body.style.width = '100%'

        }
        else{
            const scrollY = document.body.style.top
            document.body.style.overflow = 'unset'
            document.body.style.width = 'unset'
            document.body.style.position = 'unset'
            document.body.style.top = 'unset'
            window.scrollTo(0, parseInt(scrollY || '0') * -1)
        }


            
    }, [show])

    useEffect(()=>{
        return ()=>{
            const scrollY = document.body.style.top
            document.body.style.overflow = 'unset'
            document.body.style.width = 'unset'
            document.body.style.position = ''
            document.body.style.top = ''
            window.scrollTo(0, parseInt(scrollY || '0') * -1)

        }
    }, [])


    return (
        <>
            <AnimatePresence mode="wait">

            {
                show ? 
                    <motion.div 
                        onMouseDown={()=>{
                            setEntered(true)
                        }}
                        onMouseUp={()=>{
                            if(entered){
                                setShow(false)
                            }
                            setEntered(false)
                        }}
                        key={'modal'}
                        initial={{ y: 5, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -5, opacity: 0 }}
                        transition={{ duration: 0.2 }} className={BackgroundStyle}>
                            <div className={ModalWrapperStyle} onClick={(e)=>e.stopPropagation()} onMouseDown={(e)=>e.stopPropagation()} onMouseUp={(e)=>e.stopPropagation()}>
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
        <p className={ModalContentStyle} style={style}>{children}</p>
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

interface InputProps {
    className ?: any
    style ?: any
    placeholder: string
    value: string
    onChange: (e: any)=>void
}

const Input = ({className, style, placeholder, value, onChange}: InputProps) => {
    return (
        <input type="text" placeholder={placeholder} onChange={onChange} value={value} className={`${ModalInputStyle} ${className}`} style={style}/>
    )
}

const RadioGroup = ({className, style, children}: BaseProps) => {
    return (
        <fieldset className={RadioGroupStyle} style={style}>
            {children}
        </fieldset>
    )
}

interface RadioButtonProps extends BaseProps {
    value: string
    name: string
    currentValue: string
    onCheck: ()=>void
}

const RadioButton = ({className, style, children, value, name, currentValue, onCheck}: RadioButtonProps) => {

    return (
        <label className={RadioButtonWrapperStyle}>
            <input checked={value == currentValue} onChange={onCheck} className={RadioButtonInputStyle} type="radio" value={value} name={name}></input>
            <span className={RadioButtonStyle}>
                <span className={RadioButtonCheckedStyle}></span>
            </span>
            {children}
            
            
        </label>
    )

}

Modal.Title = Title
Modal.Content = Content
Modal.ButtonGroup = ButtonGroup
Modal.Button = Button
Modal.Input = Input
Modal.RadioGroup = RadioGroup
Modal.RadioButton = RadioButton


export default Modal