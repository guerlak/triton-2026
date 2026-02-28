import React, { useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  // Fecha o modal ao apertar ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-10 backdrop-blur-sm m-2">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative">
        {/* Botão de Fechar (X) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-triton-red hover:text-black text-5xl"
        >
          &times;
        </button>

        <h2 className="text-xl font-bold mb-4">{title}</h2>

        <div className="modal-content">{children}</div>
      </div>
    </div>,
    document.body, // Renderiza direto no body
  );
};

export default Modal;
