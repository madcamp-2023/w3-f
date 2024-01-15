import React, { Dispatch, SetStateAction, useState } from "react";
import ReactModal from "react-modal";

interface LoginModalProps {
  children: React.ReactNode;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function LoginModal({
  children,
  isModalOpen,
  setIsModalOpen,
}: LoginModalProps) {
  const customModalStyles: ReactModal.Styles = {
    overlay: {
      backgroundColor: " rgba(0, 0, 0, 0.4)",
      width: "100%",
      height: "100vh",
      zIndex: "10",
      position: "fixed",
      top: "0",
      left: "0",
    },
    content: {
      width: "25vw",
      height: "50vh",
      zIndex: "150",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
      boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
      backgroundColor: "white",
      justifyContent: "center",
      overflow: "auto",
    },
  };

  return (
    <ReactModal
      isOpen={isModalOpen}
      style={customModalStyles}
      onRequestClose={() => setIsModalOpen(false)}
      shouldCloseOnOverlayClick={false}
    >
      {children}
    </ReactModal>
  );
}
