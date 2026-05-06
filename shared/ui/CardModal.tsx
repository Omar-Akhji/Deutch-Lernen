"use client";

import { useRef, useEffect, type MouseEvent as ReactMouseEvent } from "react";
import { useRouter } from "next/navigation";

const EMPTY_ARRAY: string[] = [];

interface CardModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string | undefined;
  description?: string | undefined;
  href: string;
  previewTitles?: string[] | undefined;
}

export function CardModal({
  isOpen,
  onClose,
  title,
  subtitle,
  description,
  href,
  previewTitles = EMPTY_ARRAY,
}: CardModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { push } = useRouter();

  // Side Effect: Sync dialog state and manage body scroll lock (Outside the room)
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !isOpen) return;

    // "Setting up the room" after render
    dialog.showModal();
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // "Cleanup function" when moving out or re-rendering
    return () => {
      dialog.close();
      document.body.style.overflow = originalOverflow || "unset";
    };
  }, [isOpen]);

  const handleNavigate = () => {
    onClose();
    push(href);
  };

  const handleBackdropClick = (e: ReactMouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          e.preventDefault();
          onClose();
        }
      }}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      className="fixed inset-0 z-100 m-0 flex items-center justify-center bg-transparent px-4 pbs-4 pbe-4 block-full inline-full max-block-full max-inline-full"
    >
      {/* Backdrop */}
      <button
        type="button"
        className="absolute inset-0 cursor-default border-none bg-black/80 backdrop-blur-sm"
        // Deutsch Lernen - High-Performance React Architecture

        onClick={onClose}
        aria-label="Dialog schließen"
      />

      {/* Modal Content */}
      <div
        role="document"
        aria-labelledby="modal-title"
        className="relative z-10 flex flex-col overflow-hidden rounded-xl border-2 border-gray-400/30 bg-[#0a0a0a] shadow-2xl inline-full max-block-[90vh] max-inline-lg sm:max-block-[85vh]"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        {/* Header Content */}
        <div className="shrink-0 border-be-2 border-gray-400/30 px-4 pbs-4 pbe-4 sm:px-6 sm:pbs-6 sm:pbe-6">
          <div className="mbe-3 flex items-center gap-2">
            {subtitle ?
              <span className="rounded-full border border-yellow/30 bg-yellow/20 px-3 pbs-1 pbe-1 text-xs font-bold text-yellow">
                {subtitle}
              </span>
            : null}
            <span className="text-xs font-medium text-mist-500">
              • Deutsch A1
            </span>
          </div>
          <h2
            id="modal-title"
            className="text-xl font-bold text-yellow text-shadow-sm sm:text-2xl"
          >
            {title}
          </h2>
          {description ?
            <p className="mbs-2 text-sm text-mist-500">{description}</p>
          : null}
        </div>

        {/* Scrollable Content */}
        <div className="modal-scroll flex-1 space-y-3 overflow-y-auto px-4 pbs-4 pbe-4 sm:space-y-4 sm:px-6 sm:pbs-6 sm:pbe-6">
          {previewTitles.length > 0 ?
            previewTitles.map((previewTitle, index) => (
              <div
                key={previewTitle}
                className="overflow-hidden rounded-xl border-2 border-gray-400/30 bg-mist-900/50"
              >
                <div className="flex items-center gap-3 px-3 pbs-3 pbe-3 sm:px-4 sm:pbs-4 sm:pbe-4">
                  <span className="rounded-full border border-yellow/30 bg-yellow/20 px-2.5 pbs-0.5 pbe-0.5 text-xs font-bold text-yellow">
                    Kapitel {index + 1}
                  </span>
                  <span className="text-sm font-medium text-white sm:text-base">
                    {previewTitle}
                  </span>
                </div>
              </div>
            ))
          : <div className="rounded-xl border-2 border-gray-400/30 bg-mist-900/50 px-4 pbs-4 pbe-4 text-center text-mist-500">
              Keine Vorschau verfügbar
            </div>
          }
        </div>

        {/* Footer Actions */}
        <div className="shrink-0 border-bs-2 border-gray-400/30 px-4 pbs-4 pbe-4 sm:px-6 sm:pbs-6 sm:pbe-6">
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 cursor-pointer rounded-full border-2 border-gray-400/30 px-4 pbs-2.5 pbe-2.5 font-semibold text-mist-500 transition-colors hover:border-gray-400/50 hover:text-white"
            >
              Schließen
            </button>
            <button
              onClick={handleNavigate}
              className="flex-1 cursor-pointer rounded-full bg-linear-to-br from-yellow to-orange px-4 pbs-2.5 pbe-2.5 font-semibold text-black transition-all hover:brightness-110"
            >
              Öffnen
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
