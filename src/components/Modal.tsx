import { PropsWithChildren } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

type BackdropProps = {
  onCloseModal: () => void;
};

const Backdrop = ({ onCloseModal }: BackdropProps) => {
  return <div onClick={onCloseModal} className={styles.backdrop} />;
};

const ModalOverlay = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays")!;

const Modal = ({
  onCloseModal,
  children,
}: PropsWithChildren<BackdropProps>) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={onCloseModal} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
