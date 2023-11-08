import styles from "./Overlay.module.css";
import PropTypes from "prop-types";

export default function Overlay({ onClose }) {
  return <div className={`${styles.overlay}`} onClick={onClose}></div>;
}

Overlay.propTypes = {
  onClose: PropTypes.func,
};
