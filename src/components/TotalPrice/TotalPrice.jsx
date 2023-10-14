import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./TotalPrice.module.css";

export default function TotalPrice() {
  return (
    <div className={`${styles.total_price} pr-10`}>
      <p className={`${styles.number} text text_type_digits-medium`}>20</p>
      <CurrencyIcon type="primary" />
    </div>
  );
}
