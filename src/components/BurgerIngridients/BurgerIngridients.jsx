import styles from "./BurgetIngridients.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ingridientsIsLoading } from "../../store/ingridientsSlice";
import { closeModal, modalInfoSelector } from "../../store/modalSlice";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { getIngridients } from "../../store/thunks/ingridients";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { removeInfo } from "../../store/infoSlice";
import { titleSelector } from "../../store/titlesSlice";
import { IngrdidientSection } from "../IngridientSection/IngridientSection";
import { sectionSelector } from "../../store/scrollSlice";

export default function BurgerIngridients() {
  const dispatch = useDispatch();
  const opened = useSelector(modalInfoSelector);
  const isLoading = useSelector(ingridientsIsLoading);
  const [activeIndex, setActiveIndex] = useState(0);
  const titles = useSelector(titleSelector).data;
  const sections = useSelector(sectionSelector);
  const isActive = (e) => {
    return sections[`${e}`];
  };

  useEffect(() => {
    dispatch(getIngridients());
  }, []);
  const onClose = () => {
    dispatch(closeModal());
    dispatch(removeInfo());
  };

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
            active={isActive(e.en)}
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
        <main className={`${styles.main}`}>
          {titles.map((el, index) => {
            return (
              <IngrdidientSection key={index} id={index}>
                {el}
              </IngrdidientSection>
            );
          })}
        </main>
      )}
      {opened && (
        <Modal onClose={onClose}>
          <IngredientDetails />
        </Modal>
      )}
    </div>
  );
}
