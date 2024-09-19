import Modal from "react-modal";
import clsx from "clsx";

import css from "./ConfirmationModal.module.css";

const customStyles = {
  overlay: {
    backgroundColor: "#00000066",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "1px solid #ba88f8",
    borderRadius: "8px",
    backgroundColor: "#e9d8ff",
    width: "86%"
  },
};

Modal.setAppElement("#root");

const ConfirmationModal = ({ isOpen, onRequestClose, onConfirm }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Confirm Deletion"
    >
      <h2 className={css.text}>
        Are you sure you want to delete this contact?
      </h2>
      <div className={css["btn-wrapper"]}>
        <button
          onClick={onRequestClose}
          className={clsx(css.btn, css["btn-cancel"])}
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className={clsx(css.btn, css["btn-delete"])}
        >
          Delete
        </button>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
