import styles from "./Modal.module.css";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, modalSelector } from "../../store/modalSlice";
import Overlay from "../Overlay/Overlay";
import Popup from "../Popup/Popup";

const modal = document.querySelector("#modal");

export default function Modal({ children }) {
  const dispatch = useDispatch();
  const opened = useSelector(modalSelector);

  const onClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(closeModal());
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        dispatch(closeModal());
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);
  return createPortal(
    <>
      {opened && (
        <div className={`${styles.modal}`}>
          <Overlay onClose={onClose} />
          <Popup onClose={onClose}>{children}</Popup>
        </div>
      )}
    </>,
    modal
  );
}
