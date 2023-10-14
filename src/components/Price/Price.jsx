import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Price.module.css";

export default function Price() {
  return (
    <div className={`${styles.price} mt-1 mb-1`}>
      <p className={`${styles.number} text text_type_digits-default`}>20</p>
      <CurrencyIcon type="primary" />
    </div>
  );
}
