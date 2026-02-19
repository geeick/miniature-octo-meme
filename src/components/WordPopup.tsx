"use client";

import { ReactNode, useEffect, useId, useRef, useState } from "react";

type WordPopupProps = {
  trigger: ReactNode;          // what the user clicks (a word, phrase, icon)
  title: string;               // popup title
  children: ReactNode;         // popup body content
  className?: string;          // optional styling for the trigger
};

export default function WordPopup({
  trigger,
  title,
  children,
  className,
}: WordPopupProps) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const titleId = useId();

  // ESC to close
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // lock background scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // optional: focus the popup for accessibility
  useEffect(() => {
    if (open) dialogRef.current?.focus();
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={
          className ??
          "underline decoration-dotted underline-offset-4 hover:text-black font-medium"
        }
      >
        {trigger}
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          onClick={() => setOpen(false)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
            ref={dialogRef}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-2xl bg-white border border-black/10 p-6 shadow-lg outline-none"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 id={titleId} className="text-lg font-semibold">
                {title}
              </h3>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-xl border border-black/10 px-3 py-1.5 text-sm hover:bg-black/[0.03]"
              >
                Close
              </button>
            </div>

            <div className="mt-3 text-black/80">{children}</div>
          </div>
        </div>
      ) : null}
    </>
  );
}