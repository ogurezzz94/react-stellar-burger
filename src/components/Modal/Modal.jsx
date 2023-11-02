import { useEffect } from "react";
import Overlay from "../Overlay/Overlay";
import styles from "./Modal.module.css";
import { createPortal } from "react-dom";
import Popup from "../Popup/Popup";

const modal = document.querySelector("#modal");

export default function Modal({ children, content, setter }) {
  const onClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setter();
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setter();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);
  return createPortal(
    <>
      {content && (
        <div className={`${styles.modal}`}>
          <Overlay onClose={onClose} />
          <Popup onClose={onClose}>{children}</Popup>
        </div>
      )}
    </>,
    modal
  );
}
