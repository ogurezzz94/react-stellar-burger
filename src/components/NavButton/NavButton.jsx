import styles from "./NavButton.module.css";

export default function NavButton({ content, text }) {
  return (
    <div className={`${styles.link}`}>
      {content}
      <button className={`${styles.button}`}>
        <p className="text text_type_main-small">{text}</p>
      </button>
    </div>
  );
}
