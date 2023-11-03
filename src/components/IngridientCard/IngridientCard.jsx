import styles from "./IngridientCard.module.css";
import { useDispatch } from "react-redux";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { addBun, addMain, countPrice } from "../../store/builderSlice";
import { openModalInfo } from "../../store/modalSlice";
import { addInfo } from "../../store/infoSlice";
import Price from "../Price/Price";

export default function IngridientCard({ item }) {
  const dispatch = useDispatch();
  const counter = 0;

  const addToConstructor = (e) => {
    e.preventDefault();
    dispatch(item.type === "bun" ? addBun(item) : addMain(item));
    dispatch(countPrice());
  };

  const showInfo = (e) => {
    e.preventDefault();
    dispatch(addInfo(item));
    dispatch(openModalInfo());
  };

  return (
    <div
      className={`${styles.card}`}
      onContextMenu={(e) => addToConstructor(e)}
      onClick={(e) => showInfo(e)}
    >
      {counter ? (
        <Counter count={counter} size="default" extraClass="m-1" />
      ) : null}
      <img
        src={item.image}
        alt={item.name}
        className={`${styles.image} ml-4 mr-4`}
      ></img>
      <Price num={item.price} />
      <h4 className={`text text_type_main-default`}>{item.name}</h4>
    </div>
  );
}
