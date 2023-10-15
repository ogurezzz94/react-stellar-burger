import styles from "./app.module.css";
import { getIngridientsApi } from "../../utils/api";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import BurgerIngridients from "../BurgerIngridients/BurgerIngridients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import Overlay from "../Overlay/Overlay";

const ingridientsLink = {
  link: "https://norma.nomoreparties.space/api/ingredients",
  met: "get",
};

export default function App() {
  const [ingridients, setIngridients] = useState();
  useEffect(() => {
    getIngridientsApi(ingridientsLink).then((res) => {
      setIngridients(res.data);
    });
  }, []);
  console.log(ingridients);

  return (
    <div className={`${styles.app}`}>
      <Header />
      <BurgerIngridients />
      <BurgerConstructor />
      {/* <Overlay /> */}
    </div>
  );
}
