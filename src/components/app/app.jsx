import styles from "./app.module.css";
import { getIngridientsApi } from "../../utils/api";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import BurgerIngridients from "../BurgerIngridients/BurgerIngridients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import { useDispatch, useSelector } from "react-redux";
import { testSelector } from "../../store/testSelectors";
import { plusNum } from "../../store/testSlice";
import {
  dataError,
  dataLoaded,
  dataLoading,
  ingridientsIsLoading,
  ingridientsSelector,
} from "../../store/ingridientsSlice";

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

  const dataStore = useSelector(ingridientsSelector);

  const dispatch = useDispatch();
  const number = useSelector(testSelector);

  const [bun, setBun] = useState();
  const [main, setMain] = useState([]);
  const [selected, setSelected] = useState();
  const [order, setOrder] = useState();

  const getIngridients = async ({ link, met }) => {
    dispatch(dataLoading);
    const res = await fetch(link, {
      method: met.toUpperCase(),
    });
    if (res.ok) {
      const data = await res.json();
      dispatch(dataLoaded(data.data));
    } else {
      dispatch(
        dataError(`ошибка ответа сервера, статус: ${res.status}, ${res}`)
      );
      return Promise.reject(
        `ошибка ответа сервера, статус: ${res.status}, ${res}`
      );
    }
  };

  useEffect(() => {
    getIngridients(ingridientsLink);
    console.log(dataStore);
  }, []);

  return (
    <div className={`${styles.app}`}>
      <button
        onClick={() => {
          dispatch(plusNum(number), console.log(dataStore));
        }}
      >
        счетчик{number}
      </button>
      <Header />
      <BurgerIngridients
        ingridients={ingridients}
        setBun={setBun}
        setMain={setMain}
        main={main}
        setSelected={setSelected}
        selected={selected}
      />
      {/* <BurgerConstructor
        bun={bun}
        main={main}
        setOrder={setOrder}
        order={order}
      /> */}
    </div>
  );
}
