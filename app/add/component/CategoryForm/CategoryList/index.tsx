import { CategoryInputStyle, CategoryInputWrapperStyle, ErrorMessageStyle, vibrate } from "./style.css";
import { AnimatePresence, motion } from "framer-motion";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { vars } from "@/app/_common/theme/contract.css";
import { forwardRef } from "react";

type Props = {
  style?: any;
  children: any;
  onCategoryChange: any;
  categoryInput: string;
  categoryError: any;
  onKeyDown: any;
  onKeyPress: any;
};

const CategoryList = ({
  style,
  children,
  onCategoryChange,
  categoryInput,
  categoryError,
  onKeyDown,
  onKeyPress
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
            onKeyPress={onKeyPress}
            onKeyDown={onKeyDown}
            key={Symbol("CategoryInput").toString()}
            type="text"
            value={categoryInput}
            onChange={onCategoryChange}
            className={CategoryInputStyle}
            placeholder="키워드 (메뉴, 장소, 특징)"
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
