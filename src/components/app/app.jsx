import styles from "./app.module.css";
import { useEffect } from "react";
import Header from "../Header/Header";
import BurgerIngridients from "../BurgerIngridients/BurgerIngridients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import { useDispatch } from "react-redux";

import { getIngridients } from "../../store/thunks/ingridients";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIngridients());
  }, []);

  return (
    <div className={`${styles.app}`}>
      <Header />
      <BurgerIngridients />
      <BurgerConstructor />
    </div>
  );
}
