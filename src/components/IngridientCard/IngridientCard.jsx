import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./IngridientCard.module.css";
import Price from "../Price/Price";

export default function IngridientCard({
  el,
  setBun,
  setMain,
  main,
  setSelected,
}) {
  const counter = 1;
  const addToList = (e) => {
    e.preventDefault();
    if (el.type === "bun") {
      setBun(el);
    } else {
      setMain([...main, el]);
    }
  };

  const select = () => setSelected(el);

  return (
    <div
      className={`${styles.card}`}
      onContextMenu={addToList}
      onClick={select}
    >
      {counter && <Counter count={counter} size="default" extraClass="m-1" />}
      <img
        src={el.image}
        alt={el.name}
        className={`${styles.image} ml-4 mr-4`}
      ></img>
      <Price num={el.price} />
      <h4 className={`text text_type_main-default`}>{el.name}</h4>
    </div>
  );
}
