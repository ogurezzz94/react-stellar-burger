import styles from "./CunstructorEmpty.module.css";

export default function ConstructorEmpty() {
  return (
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
  );
}
