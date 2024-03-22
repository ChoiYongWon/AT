import { ButtonStyle } from "./style.css";

type Props = {
  disabled: boolean;
  loading: boolean;
  onClick: any;
};

const Button = ({ disabled, loading, onClick }: Props) => {
  return (
    <button
      className={ButtonStyle}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? "· · ·" : "완료"}
    </button>
  );
};

export default Button;
