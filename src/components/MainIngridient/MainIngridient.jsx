import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./MainIngridient.module.css";
import {
  deleteItem,
  dndSortList,
  mainBuilderSelector,
} from "../../store/builderSlice";
import { useDispatch, useSelector } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../utils/prop-types";

export function MainIngridient({ element, index }) {
  const dispatch = useDispatch();
  const main = useSelector(mainBuilderSelector);
  const onDelete = (item) => {
    dispatch(deleteItem(item));
  };
  const moveCard = (data) => {
    dispatch(dndSortList(data));
  };

  const [, dragRef] = useDrag({
    type: "list",
    item: element,
  });

  const [, dropRef] = useDrop({
    accept: "list",
    drop: (item) =>
      moveCard({
        element: item,
        index: main.indexOf(item),
        finalIndex: index,
      }),
  });

  return (
    <li
      key={element.uniqId}
      index={index}
      className={`${styles.item}`}
      ref={(el) => {
        dragRef(el);
        dropRef(el);
      }}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={`${element.name}`}
        price={`${element.price}`}
        thumbnail={`${element.image_mobile}`}
        handleClose={() => onDelete(element)}
      />
    </li>
  );
}

MainIngridient.propTypes = {
  index: PropTypes.number,
  element: ingredientPropType,
};
