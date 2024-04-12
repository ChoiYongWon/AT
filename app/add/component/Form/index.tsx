'use client'

import { UploadFormLayoutStyle } from "./style.css"

const Form = ({children}: any) => {
    return (
        <form className={UploadFormLayoutStyle} onSubmit={(e)=>e.preventDefault()}>
            {children}
        </form>
    )
}

export default Form