import style from "./Button.module.css";
function Button({ onClick, children }) {
  return (
    <button
      className={`${style["button-hover"]} ${style.button}`}
      onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
