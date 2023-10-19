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

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setOrder();
        setSelected();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
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
      />
      <BurgerConstructor bun={bun} main={main} setOrder={setOrder} />
      {(selected || order) && (
        <Overlay
          selected={selected}
          setSelected={setSelected}
          order={order}
          setOrder={setOrder}
        />
      )}
    </div>
  );
}
