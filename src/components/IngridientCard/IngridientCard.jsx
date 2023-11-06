import styles from "./IngridientCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useDrag } from "react-dnd";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import {
  addBun,
  addMain,
  bunBuilderSelector,
  countPrice,
  mainBuilderSelector,
} from "../../store/builderSlice";
import { openModalInfo } from "../../store/modalSlice";
import { addInfo } from "../../store/infoSlice";
import Price from "../Price/Price";

export default function IngridientCard({ item }) {
  const dispatch = useDispatch();
  const main = useSelector(mainBuilderSelector);
  const bun = useSelector(bunBuilderSelector);
  const arr = main.concat(bun);

  const qtyCounter = (a) => {
    const arr = a.filter((el) => {
      if (el) return el.name === item.name;
    });
    const num = arr.reduce((acc, el) => (acc += el.qty), 0);
    return num;
  };

  const [, dragRef] = useDrag({
    type: `${item.type}`,
    item: item,
  });

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
      ref={dragRef}
    >
      {qtyCounter(arr) ? (
        <Counter count={qtyCounter(arr)} size="default" extraClass="m-1" />
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
