import React, { createContext, useContext, useState } from "react";
import { Modal } from "react-bootstrap";

const ModalContext = createContext();
const SetModal = ({ children }) => {
  const [show, setShow] = useState(false);

  const [modalContent, setModalContent] = useState();

  const [modalTitle, setModalTitle] = useState("Modal Title");
  const [size, setSize] = useState("sm");

  const setModal = (title, content, size = "lg") => {
    setModalContent(content);
    setModalTitle(title);
    setShow(true);
    setSize(size);
  };

  const unsetModal = () => {
    setModalContent(null);
    setModalTitle("Modal Title");

    setShow(false);
  };
  return (
    <ModalContext.Provider value={{ setModal, unsetModal }}>
      {children}
      <Modal
        show={show}
        onHide={unsetModal}
        backdrop="static"
        centered
        keyboard={false}
        size={size}
      >
        <Modal.Header closeButton>{modalTitle}</Modal.Header>

        <Modal.Body>{modalContent}</Modal.Body>
      </Modal>
    </ModalContext.Provider>
  );
};

export default SetModal;

export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be used within a SetModal provider");
  }
  return context;
};
