import styles from "./app.module.css";
import { getIngridientsApi } from "../../utils/api";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import BurgerIngridients from "../BurgerIngridients/BurgerIngridients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import Overlay from "../Overlay/Overlay";

export default function App() {
  const [ingridients, setIngridients] = useState();
  useEffect(() => {
    getIngridientsApi().then((res) => {
      setIngridients(res.data);
    });
  }, []);
  console.log(ingridients);

  return (
    <div className={`${styles.app} pt-10 pb-10 pl-10 pr-10`}>
      <Header />
      <BurgerIngridients />
      <BurgerConstructor />
      <Overlay />
    </div>
  );
}
