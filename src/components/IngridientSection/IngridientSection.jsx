import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ingridientsSelector } from "../../store/ingridientsSlice";
import IngridientCard from "../IngridientCard/IngridientCard";
import styles from "./IngridientSection.module.css";
import { toggleIn, toggleOut } from "../../store/scrollSlice";
import PropTypes from "prop-types";

export function IngrdidientSection({ children, id }) {
  const dispatch = useDispatch();

  const { ref, inView } = useInView({
    rootMargin: "-1% 0px -99% 0px",
    root: document.querySelector("main"),
  });

  useEffect(() => {
    if (inView) {
      dispatch(toggleIn(children.en));
    } else {
      dispatch(toggleOut(children.en));
    }
  }, [inView]);

  const ingridients = useSelector(ingridientsSelector);
  const list = (e) => {
    return ingridients
      ?.filter((i) => i.type === e.en)
      .map((el) => <IngridientCard item={el} key={el._id} />);
  };
  return (
    <section className={`${styles.layer} pb-10`} id={id} ref={ref}>
      <h3 className={`text text_type_main-medium pb-6`}>{children.ru}</h3>
      <div className={`${styles.list}`}>{list(children)}</div>
    </section>
  );
}

IngrdidientSection.propTypes = {
  id: PropTypes.number,
};
