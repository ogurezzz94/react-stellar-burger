import styles from "./Overlay.module.css";

export default function Overlay({ onClose }) {
  return <div className={`${styles.overlay}`} onClick={onClose}></div>;
}
