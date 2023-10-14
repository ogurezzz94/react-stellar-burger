import {
  CheckMarkIcon,
  CloseIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ModalOrderAccepted.module.css";

export default function ModalOrderAccepted() {
  return (
    <div className={`${styles.popup}`}>
      <button className={`${styles.close_button} mt-15`}>
        <CloseIcon type="primary" />
      </button>
      <p className="text text_type_digits-large pt-30 pb-8">123456</p>
      <p className="text text_type_main-medium">идентификатор заказа</p>
      <div className={`${styles.gif} mt-15 mb-15`}>
        <CheckMarkIcon type="primary" />
      </div>
      <p className="text text_type_main-small">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}
