'use client'

import toast, { useToaster } from "react-hot-toast/headless";
import { ToastStyle } from "./style.css";

const Toast = () => {

    const { toasts, handlers } = useToaster();
    const { startPause, endPause, calculateOffset, updateHeight } = handlers;
    
    return (
        <div
            style={{
                position: "fixed",
                left: '50%',
                bottom: 150,
                zIndex: 1000
            }}
            onMouseEnter={startPause}
            onMouseLeave={endPause}
        >

            {
                toasts.map((toast: any) => {
                    const offset = calculateOffset(toast, {
                        reverseOrder: false,
                        gutter: 8
                    
                    });
                    const ref = (el: any) => {
                        if (el && typeof toast.height !== "number") {
                            const height = el.getBoundingClientRect().height;
                            updateHeight(toast.id, height);
                        }
                    };

                    let theme = {
                        backgroundColor: "#FFFFFF",
                        color: "#EF6F12",
                        borderColor: '#202020',
                    }

                    const type = toast.type

                    if(type == 'error'){
                        theme = {
                            backgroundColor: "#FFFFFF",
                            color: "#EA4336",
                            borderColor: "#EA4336",
                        }
                    }
                    
                    return (
                    <div
                        key={toast.id}
                        ref={ref}
                        className={ToastStyle}
                        style={{
                            position: "absolute",
                            transition: "all 0.1s ease-out",
                            opacity: toast.visible ? 1 : 0,
                            transform: `translate(-50%, -${offset}px)`,
                            ...theme
                        }}
                    >
                        {toast.message}
                    </div>
                    );
                })
            }

        </div>
    )
}

export default Toast