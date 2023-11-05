import styles from "./CunstructorEmpty.module.css";

export default function ConstructorEmpty() {
  return (
    <div className={`${styles.empty} `}>
      <p
        className={`${styles.text} text text_type_main-default text_color_inactive`}
      >
        🤔Без ингредиендов - бургер не приготовить🥴
        <br />
        Перетаскивайте ингредиенты,
        <br />
        чтобы добавить их в бургер.
        <br />
        Начните с булок!
      </p>
    </div>
  );
}
