'use client'

import { AnimatePresence, motion } from "framer-motion"
import GoogleLoginButton from "../component/LoginButton/GoogleLoginButton"
import { Divider, LoginButtonLayoutStyle } from "./style.css"
import KakaoLoginButton from "../component/LoginButton/KakaoLoginButton"
import NaverLoginButton from "../component/LoginButton/NaverLoginButton"

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
          <GoogleLoginButton/>
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
          <NaverLoginButton/>
        </motion.div>
      </AnimatePresence>    
    )
}

export default LoginButtonGroup