import styles from "./BurgetIngridients.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  ingridientsIsLoading,
  ingridientsSelector,
} from "../../store/ingridientsSlice";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalIngridientInfo from "../ModalIngridientInfo/ModalIngridientInfo";
import { modalInfoSelector } from "../../store/modalSlice";
import { infoSelector } from "../../store/infoSlice";
import Ingridients from "../Ingridients/Ingridients";
import Modal from "../Modal/Modal";

const titles = [
  { ru: "Булки", en: "bun" },
  { ru: "Соусы", en: "sauce" },
  { ru: "Начинки", en: "main" },
];

export default function BurgerIngridients() {
  const opened = useSelector(modalInfoSelector);
  const isLoading = useSelector(ingridientsIsLoading);
  const ingridients = useSelector(ingridientsSelector);
  const info = useSelector(infoSelector);
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
        <Ingridients titles={titles} ingridients={ingridients} />
      )}
      {opened && (
        <Modal>
          <ModalIngridientInfo data={info} />
        </Modal>
      )}
    </div>
  );
}
