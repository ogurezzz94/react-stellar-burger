import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Popup.module.css";

export default function Popup({ children, onClose }) {
  return (
    <div className={`${styles.popup}`}>
      <button className={`${styles.close_button}`}>
        <CloseIcon type="primary" onClick={onClose} />
      </button>
      {children}
    </div>
  );
}
