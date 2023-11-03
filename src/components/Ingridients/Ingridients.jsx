import { useSelector } from "react-redux";
import { ingridientsSelector } from "../../store/ingridientsSlice";
import IngridientCard from "../IngridientCard/IngridientCard";
import styles from "./Ingridients.module.css";

export default function Ingridients({
  titles,

  setBun,
  setMain,
  main,
  setSelected,
}) {
  const ingridients = useSelector(ingridientsSelector);
  return (
    <div className={`${styles.ingridients} pt-5`}>
      {titles.map((e, index) => {
        return (
          <div className={`${styles.layer} pb-10`} key={index} id={index}>
            <h3 className={`text text_type_main-medium pb-6`}>{e.ru}</h3>
            <div className={`${styles.list}`}>
              {ingridients
                ?.filter((i) => i.type === e.en)
                .map((el, index) => (
                  <IngridientCard
                    el={el}
                    key={index}
                    setBun={setBun}
                    setMain={setMain}
                    main={main}
                    setSelected={setSelected}
                  />
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
