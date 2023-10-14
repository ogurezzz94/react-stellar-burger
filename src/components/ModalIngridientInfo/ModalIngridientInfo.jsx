import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ModalIngridientInfo.module.css";

export default function ModalIngridientInfo() {
  return (
    <div className={`${styles.popup} pl-10 pt-10 pr-10`}>
      <div className={`${styles.title}`}>
        <p className="text text_type_main-large">Детали ингридиента</p>
        <button className={`${styles.close_button}`}>
          <CloseIcon type="primary" />
        </button>
      </div>
      <img className={`${styles.image}`} alt="ингридиент"></img>
      <p className="text text_type_main-medium pt-4 pb-8">Название ингридиента</p>
      <ul className={`${styles.list}`}>
        <li className={`${styles.item}`}>
          <p className="text text_type_main-default text_color_inactive">Калории, калл</p>
          <p className="text text_type_main-default text_color_inactive">000,0</p>
        </li>
        <li className={`${styles.item}`}>
          <p className="text text_type_main-default text_color_inactive">Белки, г</p>
          <p className="text text_type_main-default text_color_inactive">000,0</p>
        </li>
        <li className={`${styles.item}`}>
          <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
          <p className="text text_type_main-default text_color_inactive">000,0</p>
        </li>
        <li className={`${styles.item}`}>
          <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
          <p className="text text_type_main-default text_color_inactive">000,0</p>
        </li>
      </ul>
    </div>
  );
}
