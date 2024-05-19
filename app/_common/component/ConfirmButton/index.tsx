import { ButtonStyle, LoadingLottieStyle } from "./style.css";
import Lottie from 'lottie-react'
import loadingJson from '../../../../public/assets/loading.json'
import { motion } from "framer-motion";


type Props = {
  disabled?: boolean;
  loading?: boolean;
  onClick?: any;
  style?: any
  className?: any
  text: string
};



const ConfirmButton = ({ disabled, loading, onClick, className, style, text }: Props) => {
  return (
    <motion.button
      className={`${ButtonStyle} ${className}`}
      style={style}
      disabled={disabled || loading}
      onClick={onClick}
      {...(!disabled ? { whileTap: { scale: 0.9, transition: { duration: 0.08 }} } : {})}
    >
      
      {loading ?
      (<div className={LoadingLottieStyle}>
        <Lottie
          animationData={loadingJson}
          loop={true}
          className={LoadingLottieStyle}
        />
      </div>)
       
         : ( text ) }
  </motion.button>
  );
};

export default ConfirmButton;
