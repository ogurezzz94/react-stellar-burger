import styles from "./BurgerConstructor.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import {
  Button,
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {
  addBun,
  addMain,
  countPrice,
  priceSelector,
  bunBuilderSelector,
  mainBuilderSelector,
  deleteItem,
  reset,
} from "../../store/builderSlice";
import {
  modalPurchaseSelector,
  openPurchaseModal,
} from "../../store/modalSlice";
import Modal from "../Modal/Modal";
import TotalPrice from "../TotalPrice/TotalPrice";
import ConstructorEmpty from "../ConstructorEmpty/ConstructorEmpty";
import ModalOrderAccepted from "../ModalOrderAccepted/ModalOrderAccepted";
import { postOrder } from "../../store/thunks/order";

export default function BurgerConstructor() {
  const dispatch = useDispatch();
  const main = useSelector(mainBuilderSelector);
  const bun = useSelector(bunBuilderSelector);
  const price = useSelector(priceSelector);
  const opened = useSelector(modalPurchaseSelector);

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

  const onDelete = (item) => {
    dispatch(deleteItem(item));
  };

  // const [, dragRef] = useDrag({
  //   type: `list`,
  //   item: main,
  // });

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
            {main.map((e, index) => {
              return (
                <li key={index} className={`${styles.item}`}>
                  <DragIcon type="primary" />
                  <ConstructorElement
                    text={`${e.name}`}
                    price={`${e.price}`}
                    thumbnail={`${e.image_mobile}`}
                    handleClose={() => onDelete(e)}
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
      {opened && (
        <Modal>
          <ModalOrderAccepted />
        </Modal>
      )}
    </div>
  );
}
