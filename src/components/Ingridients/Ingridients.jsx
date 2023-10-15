import IngridientCard from "../IngridientCard/IngridientCard";
import styles from "./Ingridients.module.css";

export default function Ingridients({ titles }) {
  return (
    <div className={`${styles.ingridients} pt-5`}>
      {titles.map((e) => (
        <h3 className={`text text_type_main-medium`} key={titles.indexOf(e)}>
          {e}
        </h3>
      ))}
      <div className={`${styles.test}`}></div>
      <IngridientCard />
    </div>
  );
}
