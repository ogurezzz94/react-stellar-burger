import {
  Button,
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerConstructor.module.css";
import TotalPrice from "../TotalPrice/TotalPrice";

export default function BurgerConstructor({ bun, main, setOrder }) {
  const orderNum = (Math.random() * 1000000).toFixed();
  const purchase = () => {
    setOrder(orderNum);
  };
  return (
    <div className={`${styles.burger_constructor} pt-25 pb-10 pl-4 pr-4`}>
      {bun ? (
        <div className={`${styles.burger_section} pb-10`}>
          <>
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
          </>
        </div>
      ) : (
        <div className={`${styles.empty} `}>
          <p
            className={`${styles.text} text text_type_main-default text_color_inactive`}
          >
            Здесь пусто.
          </p>
          <p
            className={`${styles.text} text text_type_main-default text_color_inactive`}
          >
            Выберите ингредиенты для бургера,
            <br />
            нажав ПКМ на их карточку.(dnd будет позже)
          </p>
          <p
            className={`${styles.text} text text_type_main-default text_color_inactive`}
          >
            Не забудьте, добавить булки!
          </p>
        </div>
      )}
      <div className={`${styles.price_section}`}>
        <TotalPrice setOrder={setOrder} />
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={purchase}
        >
          Оформить заказ
        </Button>
      </div>
    </div>
  );
}
