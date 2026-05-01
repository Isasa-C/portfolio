'use client';

import { useEffect, useId, useRef, useState } from 'react';

type ContactActionsProps = {
  contactMailto: string;
  phoneDisplay: string;
  phoneCopyValue: string;
  linkedInUrl: string;
};

export default function ContactActions({
  contactMailto,
  phoneDisplay,
  phoneCopyValue,
  linkedInUrl,
}: ContactActionsProps) {
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [copyState, setCopyState] = useState<'idle' | 'copied'>('idle');
  const callButtonRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const copyButtonRef = useRef<HTMLButtonElement | null>(null);
  const bottomCloseButtonRef = useRef<HTMLButtonElement | null>(null);
  const titleId = useId();

  useEffect(() => {
    if (!isCallModalOpen) {
      return;
    }

    const triggerButton = callButtonRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setIsCallModalOpen(false);
        return;
      }

      if (event.key !== 'Tab') {
        return;
      }

      const focusableElements = [
        closeButtonRef.current,
        copyButtonRef.current,
        bottomCloseButtonRef.current,
      ].filter((element): element is HTMLButtonElement => Boolean(element));

      if (focusableElements.length === 0) {
        return;
      }

      const currentIndex = focusableElements.indexOf(document.activeElement as HTMLButtonElement);
      const nextIndex = event.shiftKey
        ? currentIndex <= 0
          ? focusableElements.length - 1
          : currentIndex - 1
        : currentIndex === focusableElements.length - 1
          ? 0
          : currentIndex + 1;

      event.preventDefault();
      focusableElements[nextIndex]?.focus();
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      triggerButton?.focus();
    };
  }, [isCallModalOpen]);

  useEffect(() => {
    if (copyState !== 'copied') {
      return;
    }

    const timeout = window.setTimeout(() => {
      setCopyState('idle');
    }, 2000);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [copyState]);

  const openModal = () => {
    setIsCallModalOpen(true);
  };

  const closeModal = () => {
    setIsCallModalOpen(false);
  };

  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText(phoneCopyValue);
      setCopyState('copied');
    } catch {
      setCopyState('idle');
    }
  };

  return (
    <>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <a
          href="#projects"
          className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold !text-white shadow-lg shadow-[var(--accent-shadow)] transition hover:bg-[var(--accent-strong)]"
        >
          View Projects
        </a>
        <a
          href={contactMailto}
          className="inline-flex items-center justify-center rounded-full border border-[color:var(--accent-border)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--headline)] transition hover:bg-[var(--accent-soft)]"
        >
          Email
        </a>
        <button
          ref={callButtonRef}
          type="button"
          onClick={openModal}
          className="inline-flex items-center justify-center rounded-full border border-[color:var(--accent-border)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--headline)] transition hover:bg-[var(--accent-soft)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent-border)]"
        >
          Call
        </button>
        <a
          href={linkedInUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-[color:var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--headline)] transition hover:border-[color:var(--accent-border)] hover:bg-[var(--surface-soft)]"
        >
          LinkedIn
        </a>
      </div>

      {isCallModalOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-[8px] animate-[fadeIn_200ms_ease-out]"
          onClick={closeModal}
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative w-[min(92%,560px)] rounded-2xl border border-[color:var(--border)] bg-[var(--surface)] px-6 py-8 shadow-[0_20px_60px_rgba(0,0,0,0.15)] sm:px-10 sm:py-12 animate-[modalIn_250ms_cubic-bezier(0.16,1,0.3,1)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Close"
              onClick={closeModal}
              className="absolute top-4 right-4 inline-flex h-8 w-8 items-center justify-center rounded-full text-[var(--muted)] transition hover:text-[var(--headline)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent-border)]"
            >
              <span aria-hidden="true" className="text-xl leading-none">
                ×
              </span>
            </button>

            <div
              id={titleId}
              className="flex items-center justify-center gap-2 text-center text-[12px] font-medium tracking-[0.15em] text-[var(--accent-strong)] uppercase"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M6.6 3.8c.4-.4 1-.5 1.5-.3l2.2.9c.6.2.9.8.8 1.4l-.4 2c-.1.5-.4.9-.8 1.1l-1 .5a15 15 0 0 0 5.8 5.8l.5-1c.2-.4.6-.7 1.1-.8l2-.4c.6-.1 1.2.2 1.4.8l.9 2.2c.2.5.1 1.1-.3 1.5l-1.5 1.5c-.6.6-1.5.9-2.4.8-3.1-.5-6-2-8.4-4.4S4.1 10.3 3.6 7.2c-.1-.9.2-1.8.8-2.4l1.5-1.5Z" />
              </svg>
              <span>Call Me</span>
            </div>

            <p
              className="mt-6 text-center text-[28px] font-semibold tracking-[0.02em] text-[var(--headline)] select-all whitespace-nowrap sm:text-[42px]"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {phoneDisplay}
            </p>

            <p className="text-center text-sm text-[var(--muted)]">Click to copy · or dial from your phone</p>

            <div className="mt-6 flex justify-center">
              <button
                ref={copyButtonRef}
                type="button"
                onClick={copyNumber}
                className="inline-flex items-center justify-center rounded-full border border-[color:var(--border)] bg-[var(--surface)] px-5 py-2 text-sm font-semibold text-[var(--headline)] transition hover:border-[color:var(--accent-border)] hover:bg-[var(--surface-soft)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent-border)]"
              >
                {copyState === 'copied' ? 'Copied ✓' : 'Copy number'}
              </button>
            </div>

            <button
              ref={bottomCloseButtonRef}
              type="button"
              onClick={closeModal}
              className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-[color:var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--headline)] transition hover:border-[color:var(--accent-border)] hover:bg-[var(--surface-soft)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent-border)]"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
