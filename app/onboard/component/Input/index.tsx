import { assignInlineVars } from "@vanilla-extract/dynamic";
import {
  ErrorMessageStyle,
  InputStyle,
  InputWrapperStyle,
  vibrate,
} from "./style.css";
import { vars } from "@/app/theme/contract.css";

type Props = {
  onChange: any;
  placeholder: string;
  isError: boolean;
  errorMessage: string;
};

const Input = ({ onChange, placeholder, isError, errorMessage }: Props) => {
  return (
    <div className={InputWrapperStyle}>
      <input
        type="text"
        className={InputStyle}
        onChange={onChange}
        placeholder={placeholder}
        style={assignInlineVars({
          borderColor: isError ? "#ee2e3d" : vars.color.strokeBlack,
          animation: isError ? `${vibrate} .3s` : "",
        })}
      />
      {isError ? <p className={ErrorMessageStyle}>{errorMessage}</p> : <></>}
    </div>
  );
};

export default Input;
