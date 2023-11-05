import { useSelector } from "react-redux";
import { infoSelector } from "../../store/infoSlice";
import styles from "./ModalIngridientInfo.module.css";

export default function ModalIngridientInfo() {
  const data = useSelector(infoSelector);
  return (
    <div className={`${styles.section} pt-10 pl-10 pr-10 pb-15`}>
      <div className={`${styles.title}`}>
        <p className="text text_type_main-large">Детали ингридиента</p>
      </div>
      <img
        className={`${styles.image}`}
        alt="ингридиент"
        src={`${data.image_large}`}
      ></img>
      <p className="text text_type_main-medium pt-4 pb-8">{data.name}</p>
      <ul className={`${styles.list}`}>
        <li className={`${styles.item}`}>
          <p className="text text_type_main-default text_color_inactive">
            Калории, калл
          </p>
          <p className="text text_type_main-default text_color_inactive">
            {data.calories}
          </p>
        </li>
        <li className={`${styles.item}`}>
          <p className="text text_type_main-default text_color_inactive">
            Белки, г
          </p>
          <p className="text text_type_main-default text_color_inactive">
            {data.proteins}
          </p>
        </li>
        <li className={`${styles.item}`}>
          <p className="text text_type_main-default text_color_inactive">
            Жиры, г
          </p>
          <p className="text text_type_main-default text_color_inactive">
            {data.fat}
          </p>
        </li>
        <li className={`${styles.item}`}>
          <p className="text text_type_main-default text_color_inactive">
            Углеводы, г
          </p>
          <p className="text text_type_main-default text_color_inactive">
            {data.carbohydrates}
          </p>
        </li>
      </ul>
    </div>
  );
}
