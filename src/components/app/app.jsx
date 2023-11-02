import styles from "./app.module.css";
import { getIngridientsApi } from "../../utils/api";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import BurgerIngridients from "../BurgerIngridients/BurgerIngridients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";

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

  const [bun, setBun] = useState();
  const [main, setMain] = useState([]);
  const [selected, setSelected] = useState();
  const [order, setOrder] = useState();

  return (
    <div className={`${styles.app}`}>
      <Header />
      <BurgerIngridients
        ingridients={ingridients}
        setBun={setBun}
        setMain={setMain}
        main={main}
        setSelected={setSelected}
        selected={selected}
      />
      <BurgerConstructor
        bun={bun}
        main={main}
        setOrder={setOrder}
        order={order}
      />
    </div>
  );
}
