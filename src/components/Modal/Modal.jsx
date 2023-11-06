import styles from "./Modal.module.css";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import Overlay from "../Overlay/Overlay";
import ModalBody from "../ModalBody/ModalBody";

const modal = document.querySelector("#modal");

export default function Modal({ children, onClose }) {
  const handleBtn = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  });
  return createPortal(
    <div className={`${styles.modal}`}>
      <Overlay onClose={handleBtn} />
      <ModalBody onClose={handleBtn}>{children}</ModalBody>
    </div>,
    modal
  );
}
