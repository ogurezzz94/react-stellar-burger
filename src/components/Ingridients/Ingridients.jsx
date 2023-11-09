import { useSelector } from "react-redux";
import IngridientCard from "../IngridientCard/IngridientCard";
import styles from "./Ingridients.module.css";
import { ingridientsSelector } from "../../store/ingridientsSlice";
import { titlesSelector } from "../../store/titlesSlice";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Ingridients() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const titles = useSelector(titlesSelector);
  const ingridients = useSelector(ingridientsSelector);
  const list = (e) => {
    return ingridients
      ?.filter((i) => i.type === e.en)
      .map((el) => <IngridientCard item={el} key={el._id} />);
  };

  return (
    <div className={`${styles.ingridients} pt-5`}>
      {titles.map((e, index) => {
        return (
          <div className={`${styles.layer} pb-10`} key={index} id={index}>
            <h3 className={`text text_type_main-medium pb-6`} ref={ref}>
              {e.ru}
            </h3>
            <div className={`${styles.list}`}>{list(e)}</div>
          </div>
        );
      })}
    </div>
  );
}
