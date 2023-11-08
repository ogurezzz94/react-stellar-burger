import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Price.module.css";
import PropTypes from "prop-types";

export default function Price({ num }) {
  return (
    <div className={`${styles.price} mt-1 mb-1`}>
      <p className={`${styles.number} text text_type_digits-default`}>{num}</p>
      <CurrencyIcon type="primary" />
    </div>
  );
}

Price.propTypes = {
  num: PropTypes.number,
};
