import Image from "next/image";
import { CategoryInputStyle, CategoryInputWrapperStyle, ErrorMessageStyle, vibrate } from "./style.css";
import { AnimatePresence, motion } from "framer-motion";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { vars } from "@/app/theme/contract.css";
import { forwardRef, useEffect, useRef } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";

type Props = {
  style?: any;
  children: any;
  onCategoryChange: any;
  categoryInput: string;
  categoryError: any
};

const CategoryList = ({
  style,
  children,
  onCategoryChange,
  categoryInput,
  categoryError
}: Props, ref:any) => {
  
  return (
    <div ref={ref} style={{width: '100%', ...style}} >
      {/* <input ref={inputRef} type="text" /> */}
      <div style={style} className={CategoryInputWrapperStyle}>
        <AnimatePresence mode="popLayout">
          {children}
          <motion.input
            layout
            transition={{ type: "just", duration: 0.2}}
            key={Symbol("CategoryInput").toString()}
            type="text"
            value={categoryInput}
            onChange={onCategoryChange}
            className={CategoryInputStyle}
            placeholder="양식, 분위기"
            style={assignInlineVars({
              borderColor: categoryError.enable ? "#ee2e3d" : vars.color.strokeBlack,
              animation: categoryError.enable ? `${vibrate} .3s` : "",
            })}
          />
          
        </AnimatePresence>
      </div>
      {categoryError.enable ? <p className={ErrorMessageStyle}>{categoryError.message}</p> : <></>}
    </div>
    
  );
};

export default forwardRef(CategoryList);
