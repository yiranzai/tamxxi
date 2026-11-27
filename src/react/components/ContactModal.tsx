import { useEffect } from "react";

type ContactModalProps = {
  open: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
};

export default function ContactModal({ open, title, children, onClose }: ContactModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modal-layer">
      <button type="button" className="modal-backdrop" aria-label="Close" onClick={onClose} />
      <div className="modal" role="dialog" aria-modal="true" aria-label={title}>
        <button type="button" className="modal__close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <h2>{title}</h2>
        <div className="modal__body">{children}</div>
      </div>
    </div>
  );
}
