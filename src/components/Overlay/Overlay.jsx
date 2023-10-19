import ModalIngridientInfo from "../ModalIngridientInfo/ModalIngridientInfo";
import ModalOrderAccepted from "../ModalOrderAccepted/ModalOrderAccepted";
import styles from "./Overlay.module.css";
import { createPortal } from "react-dom";

const modal = document.querySelector("#modal");

export default function Overlay({ selected, setSelected, order, setOrder }) {
  return createPortal(
    <div className={`${styles.overlay}`}>
      {order && <ModalOrderAccepted order={order} setOrder={setOrder} />}
      {selected && (
        <ModalIngridientInfo selected={selected} setSelected={setSelected} />
      )}
    </div>,
    modal
  );
}
