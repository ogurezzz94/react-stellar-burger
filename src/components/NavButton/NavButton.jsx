import styles from "./NavButton.module.css";

export default function NavButton({ children, text }) {
  return (
    <a href="blank" className={`${styles.link}`}>
      {children}
      <button className={`${styles.button}`}>
        <p className="text text_type_main-small">{text}</p>
      </button>
    </a>
  );
}
