import {
  Button,
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerConstructor.module.css";
import TotalPrice from "../TotalPrice/TotalPrice";

export default function BurgerConstructor() {
  return (
    <div className={`${styles.burger_constructor} pt-25 pb-10 pl-4 pr-4`}>
      <div className={`${styles.burger_section} pb-10`}>
        <div className="ml-8">
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
          />
        </div>

        <ul className={`${styles.list}`}>
          <li className={`${styles.item}`}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
            />
          </li>
          <li  className={`${styles.item}`}>
            <div className={`${styles.test}`}></div>
          </li>
        </ul>
        <div className="ml-8">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
          />
        </div>
      </div>
      <div className={`${styles.price_section}`}>
        <TotalPrice />
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </div>
  );
}
