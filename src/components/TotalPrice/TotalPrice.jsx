import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./TotalPrice.module.css";
import PropTypes from "prop-types";

export default function TotalPrice({ num }) {
  return (
    <div className={`${styles.total_price} pr-10`}>
      <p className={`${styles.number} text text_type_digits-medium`}>{num}</p>
      <CurrencyIcon type="primary" />
    </div>
  );
}

TotalPrice.propTypes = {
  num: PropTypes.number,
};
