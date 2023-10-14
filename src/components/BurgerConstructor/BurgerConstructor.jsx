import {
  Button,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerConstructor.module.css";
import TotalPrice from "../TotalPrice/TotalPrice";

export default function BurgerConstructor() {
  return (
    <div className={`${styles.burger_constructor} pt-25 pb-10 pl-4 pr-4`}>
      <div className={`${styles.bun_section} pb-10`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
        />
        <ConstructorElement text="Краторная булка N-200i (верх)" price={50} />
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
        />
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
