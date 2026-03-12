import { CircleX, X } from "lucide-react";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: string;
}

const Modal = ({ isOpen, onClose, children, maxWidth = "max-w-md" }: ModalProps) => {
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
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6">
      <div
        className={`bg-neutral-950 rounded-3xl shadow-2xl w-full ${maxWidth} relative overflow-hidden border border-white/10`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão de Fechar (X) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 text-white/50 hover:text-triton-red transition-colors p-2 bg-black/20 backdrop-blur-md rounded-full border border-white/5"
        >
          <X size={24} />
        </button>
        <div className="modal-content">{children}</div>
      </div>
      {/* Overlay click to close */}
      <div className="absolute inset-0 -z-10" onClick={onClose} />
    </div>,
    document.body,
  );
};

export default Modal;
