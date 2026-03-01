import { CircleX } from "lucide-react";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
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
      <div className="rounded-lg shadow-xl w-full max-w-md p-6 relative">
        {/* Botão de Fechar (X) */}
        <button
          onClick={onClose}
          className="absolute top-0 right-0 text-triton-red hover:opacity-70 text-6xl"
        >
          <CircleX />
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>,
    document.body, // Renderiza direto no body
  );
};

export default Modal;
