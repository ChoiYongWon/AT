'use client'

import { AnimatePresence, motion } from "framer-motion"
import GoogleLoginButton from "../LoginButton/GoogleLoginButton"
import { Divider, LoginButtonLayoutStyle } from "./style.css"
import KakaoLoginButton from "../LoginButton/KakaoLoginButton"
import NaverLoginButton from "../LoginButton/NaverLoginButton"

const LoginButtonGroup = () => {
    return(
    <AnimatePresence mode="wait">
        <motion.div
        key={'1'}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className={LoginButtonLayoutStyle}
        >
          <GoogleLoginButton style={{
            opacity: "0.3"
          }}/>
        </motion.div>
        <motion.div
        key={'2'}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className={Divider}
        >
        </motion.div>
        <motion.div
        key={'3'}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className={LoginButtonLayoutStyle}
        >
          <KakaoLoginButton/>
        </motion.div>
        <motion.div
        key={'4'}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className={Divider}
        >
        </motion.div>
        <motion.div
        key={'5'}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className={LoginButtonLayoutStyle}
        >
          <NaverLoginButton style={{
            opacity: "0.3"
          }}/>
        </motion.div>
      </AnimatePresence>    
    )
}

export default LoginButtonGroup