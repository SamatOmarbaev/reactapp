import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { closeModal } from "../../../store/tasks/modalReducer";

import styles from "./myModal.module.css";

const MyModal = ({ children }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.tasks.modal.isOpen);
  const rootClasses = [styles.myModal];

  if (isOpen) {
    rootClasses.push(styles.active);
  }

  return (
    <div
      className={rootClasses.join(" ")}
      onClick={() => dispatch(closeModal(false))}
    >
      <div
        className={styles.myModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default MyModal;
