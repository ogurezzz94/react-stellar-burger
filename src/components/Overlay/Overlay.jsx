import ModalIngridientInfo from "../ModalIngridientInfo/ModalIngridientInfo";
import ModalOrderAccepted from "../ModalOrderAccepted/ModalOrderAccepted";
import styles from "./Overlay.module.css";

export default function Overlay() {
  return (
    <div className={`${styles.overlay}`}>
      {/* <ModalOrderAccepted /> */}
      <ModalIngridientInfo />
    </div>
  );
}
