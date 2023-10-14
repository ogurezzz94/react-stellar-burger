import IngridientCard from "../IngridientCard/IngridientCard";
import Ingridients from "../Ingridients/Ingridients";
import Tab from "../Tab/Tab";
import styles from "./BurgetIngridients.module.css";

const titles = ["Булки", "Соусы", "Начинки"];

export default function BurgerIngridients() {
  return (
    <div className={`pt-10 ${styles.burgerIngridients}`}>
      <h2 className={`text text_type_main-large`}>Собери бургер</h2>
      <div className={`pt-5 pb-5`}>
        {titles.map((e) => (
          <Tab title={e} key={titles.indexOf(e)} />
        ))}
      </div>
      <Ingridients titles={titles} />
      <IngridientCard />
    </div>
  );
}
