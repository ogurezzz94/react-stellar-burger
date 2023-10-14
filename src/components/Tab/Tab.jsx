import styles from "./Tab.module.css";

export default function Tab({ title }) {
  return (
    <button
      className={`${styles.button} text text_type_main-small text_color_inactive`}
    >
      {title}
    </button>
  );
}
