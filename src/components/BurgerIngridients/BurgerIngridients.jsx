import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Ingridients from "../Ingridients/Ingridients";
import Modal from "../Modal/Modal";
import styles from "./BurgetIngridients.module.css";
import { useState } from "react";
import ModalIngridientInfo from "../ModalIngridientInfo/ModalIngridientInfo";

const titles = [
  { ru: "Булки", en: "bun" },
  { ru: "Соусы", en: "sauce" },
  { ru: "Начинки", en: "main" },
];

export default function BurgerIngridients({
  ingridients,
  setBun,
  setMain,
  main,
  setSelected,
  selected,
}) {
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
      <Ingridients
        titles={titles}
        activeIndex={activeIndex}
        ingridients={ingridients}
        setBun={setBun}
        setMain={setMain}
        main={main}
        setSelected={setSelected}
      />
      <Modal content={selected} setter={setSelected}>
        <ModalIngridientInfo selected={selected} />
      </Modal>
    </div>
  );
}
