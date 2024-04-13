import { ButtonStyle, LoadingLottieStyle } from "./style.css";
import Lottie from 'lottie-react'
import loadingJson from '../../../../public/assets/loading.json'
import { motion } from "framer-motion";


type Props = {
  disabled: boolean;
  loading: boolean;
  onClick: any;
};



const Button = ({ disabled, loading, onClick }: Props) => {
  return (
    <motion.button
      className={ButtonStyle}
      disabled={disabled || loading}
      onClick={onClick}
      {...(!disabled ? { whileTap: { scale: 0.9, transition: { duration: 0.08 }} } : {})}
    >
      
      {loading ?
       (<Lottie
          animationData={loadingJson}
          loop={true}
          className={LoadingLottieStyle}
        />
        ) : ( "완료" ) }
  </motion.button>
  );
};

export default Button;
