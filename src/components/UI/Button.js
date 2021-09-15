import style from "./Button.module.css";
function Button({ onClick, disabled, children }) {
  return (
    <button
      disabled={disabled}
      className={`${style["button-hover"]}  ${style.button}`}
      onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
