import styles from "./BurgerConstructor.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import {
  Button,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {
  addBun,
  addMain,
  countPrice,
  priceSelector,
  bunBuilderSelector,
  mainBuilderSelector,
  reset,
} from "../../store/builderSlice";
import {
  closeModal,
  modalPurchaseSelector,
  openPurchaseModal,
} from "../../store/modalSlice";
import Modal from "../Modal/Modal";
import TotalPrice from "../TotalPrice/TotalPrice";
import ConstructorEmpty from "../ConstructorEmpty/ConstructorEmpty";
import { postOrder } from "../../store/thunks/order";
import OrderDetails from "../OrderDetails/OrderDetails";
import { MainIngridient } from "../MainIngridient/MainIngridient";

export default function BurgerConstructor() {
  const dispatch = useDispatch();
  const main = useSelector(mainBuilderSelector);
  const bun = useSelector(bunBuilderSelector);
  const price = useSelector(priceSelector);
  const opened = useSelector(modalPurchaseSelector);

  const onClose = () => {
    dispatch(closeModal());
  };

  const purchase = () => {
    dispatch(openPurchaseModal());
    dispatch(
      postOrder(
        [bun._id].concat(
          main.map((e) => {
            return e._id;
          })
        )
      )
    );
    dispatch(reset());
  };

  const [, dropRef] = useDrop({
    accept: "bun",
    drop(bun) {
      dispatch(addBun(bun));
      dispatch(countPrice());
    },
  });
  const [, dropRef2] = useDrop({
    accept: ["main", "sauce"],
    drop(main) {
      dispatch(addMain(main));
      dispatch(countPrice());
    },
  });

  return (
    <div
      className={`${styles.burger_constructor} pt-25 pb-10 pl-4 pr-4`}
      onDragOver={(e) => e.preventDefault()}
      ref={(el) => {
        dropRef(el);
        dropRef2(el);
      }}
    >
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
            {main.map((e, i) => (
              <MainIngridient key={e.uniqId} element={e} index={i} />
            ))}
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
      {opened && (
        <Modal onClose={onClose}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
}
