import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Ingridients from "../Ingridients/Ingridients";
import styles from "./BurgetIngridients.module.css";

const titles = ["Булки", "Соусы", "Начинки"];

export default function BurgerIngridients() {
  return (
    <div className={`pt-10 ${styles.burgerIngridients}`}>
      <h1 className={`text text_type_main-large`}>Собери бургер</h1>
      <div className={`${styles.tabs} pt-5 pb-5`}>
        {titles.map((e) => (
          <Tab value="one" key={titles.indexOf(e)}>
            {e}
          </Tab>
        ))}
      </div>
      <Ingridients titles={titles} />
    </div>
  );
}
