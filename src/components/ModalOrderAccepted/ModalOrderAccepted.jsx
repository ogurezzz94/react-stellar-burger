import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ModalOrderAccepted.module.css";

export default function ModalOrderAccepted({ order }) {
  return (
    <div className={`${styles.section} pt-30 pb-30`}>
      <p className="text text_type_digits-large pb-8">{order}</p>
      <p className="text text_type_main-medium">идентификатор заказа</p>
      <div className={`${styles.gif} mt-15 mb-15`}>
        <CheckMarkIcon type="primary" />
      </div>
      <p className="text text_type_main-small">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive pt-2">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}
