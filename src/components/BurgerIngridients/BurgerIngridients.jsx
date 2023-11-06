import styles from "./BurgetIngridients.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ingridientsIsLoading } from "../../store/ingridientsSlice";
import { modalInfoSelector } from "../../store/modalSlice";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { getIngridients } from "../../store/thunks/ingridients";
import ModalIngridientInfo from "../ModalIngridientInfo/ModalIngridientInfo";
import Ingridients from "../Ingridients/Ingridients";
import Modal from "../Modal/Modal";

const titles = [
  { ru: "Булки", en: "bun" },
  { ru: "Соусы", en: "sauce" },
  { ru: "Начинки", en: "main" },
];

export default function BurgerIngridients() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIngridients());
  }, []);
  const opened = useSelector(modalInfoSelector);
  const isLoading = useSelector(ingridientsIsLoading);

  const [activeIndex, setActiveIndex] = useState(0);

  const scrollDown = (index) => {
    setActiveIndex(index);
    window.location.href = `#${index}`;
    // document.getElementById(`${index}`).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`pt-10 ${styles.burgerIngridients}`}>
      <h1 className={`text text_type_main-large`}>Собери бургер</h1>
      <div className={`${styles.tabs} pt-5 pb-5`}>
        {titles.map((e, index) => (
          <Tab
            active={index === activeIndex}
            onClick={() => scrollDown(index)}
            value="one"
            key={index}
          >
            {e.ru}
          </Tab>
        ))}
      </div>
      {isLoading ? (
        <p className={`text text_type_main-medium`}>Загрузка</p>
      ) : (
        <Ingridients titles={titles} />
      )}
      {opened && (
        <Modal>
          <ModalIngridientInfo />
        </Modal>
      )}
    </div>
  );
}
