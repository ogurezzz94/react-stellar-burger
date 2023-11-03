import {
  Button,
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerConstructor.module.css";
import TotalPrice from "../TotalPrice/TotalPrice";
import Modal from "../Modal/Modal";
import ModalOrderAccepted from "../ModalOrderAccepted/ModalOrderAccepted";
import ConstructorEmpty from "../ConstructorEmpty/ConstructorEmpty";
import { useDispatch, useSelector } from "react-redux";
import {
  bunBuilderSelector,
  mainBuilderSelector,
  priceSelector,
} from "../../store/builderSlice";
import { openModal } from "../../store/modalSlice";

export default function BurgerConstructor() {
  const dispatch = useDispatch();
  const main = useSelector(mainBuilderSelector);
  const bun = useSelector(bunBuilderSelector);
  const price = useSelector(priceSelector);
  const purchase = () => {
    dispatch(openModal())
  };
  return (
    <div className={`${styles.burger_constructor} pt-25 pb-10 pl-4 pr-4`}>
      {bun ? (
        <div className={`${styles.burger_section} pb-10`}>
          <div className="ml-8 pb-2">
            <ConstructorElement
              thumbnail={`${bun.image_mobile}`}
              type="top"
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={`${bun.price}`}
            />
          </div>
          <ul className={`${styles.list}`}>
            {main.map((e, index) => {
              return (
                <li key={index} className={`${styles.item}`}>
                  <DragIcon type="primary" />
                  <ConstructorElement
                    text={`${e.name}`}
                    price={`${e.price}`}
                    thumbnail={`${e.image_mobile}`}
                  />
                </li>
              );
            })}
          </ul>
          <div className="ml-8 pt-2">
            <ConstructorElement
              thumbnail={`${bun.image_mobile}`}
              type="bottom"
              isLocked={true}
              text={`${bun.name} (низ)`}
              price={`${bun.price}`}
            />
          </div>
        </div>
      ) : (
        <ConstructorEmpty />
      )}
      {price ? (
        <div className={`${styles.price_section}`}>
          <TotalPrice num={price} />
          <Button
            htmlType="button"
            type="primary"
            size="large"
            onClick={purchase}
          >
            Оформить заказ
          </Button>
        </div>
      ) : undefined}
      <Modal >
        <ModalOrderAccepted order={'123456'} />
      </Modal>
    </div>
  );
}
