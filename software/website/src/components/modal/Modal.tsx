import React, { useState } from "react";
import ReactModal from "react-modal";
import CSS from "csstype";

const reactModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

interface ModalProps {
  title: String;
  modalOpen: boolean;
  children: JSX.Element;
  closeModal: () => void;
}

function Modal({ title, children, modalOpen, closeModal }: ModalProps) {
  const [isHover, setIsHover] = useState(false);

  return (
    <ReactModal
      isOpen={modalOpen}
      style={reactModalStyles}
      contentLabel={title}
      onRequestClose={() => closeModal()}
      ariaHideApp={false}
    >
      <h2>{title}</h2>
      <span
        style={{
          font: "Montserrat",
          fontSize: "24px",
          fontWeight: "900",
          color: isHover ? "#2a2a2a" : "black",
          cursor: "pointer",
          position: "absolute",
          top: "20px",
          right: "20px",
        }}
        onClick={() => closeModal()}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        X
      </span>
      <div style={{ minWidth: "300px" }}>{children}</div>
    </ReactModal>
  );
}

export default Modal;
