import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./IngridientCard.module.css";
import Price from "../Price/Price";

export default function IngridientCard() {
  return (
    <div className={`${styles.card}`}>
      <Counter count={1} size="default" extraClass="m-1" />
      <img
        src="https://code.s3.yandex.net/react/code/bun-02.png"
        alt="ingridient"
        className={`${styles.image} ml-4 mr-4`}
      ></img>
      <Price />
      <h4 className={`text text_type_main-default`}>Краторная булка</h4>
    </div>
  );
}
