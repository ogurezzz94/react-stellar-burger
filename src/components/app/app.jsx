import styles from "./app.module.css";
import BurgerIngridients from "../BurgerIngridients/BurgerIngridients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import Header from "../Header/Header";

export default function App() {
  return (
    <div className={`${styles.app}`}>
      <Header />
      <BurgerIngridients />
      <BurgerConstructor />
    </div>
  );
}
