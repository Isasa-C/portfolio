'use client';

import { useEffect, useState } from 'react';

const VISIBILITY_SCROLL_OFFSET = 400;
const BUTTON_SIZE = 48;

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > VISIBILITY_SCROLL_OFFSET);
    };

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      onClick={scrollToTop}
      className={`group fixed right-8 bottom-8 z-40 hidden items-center justify-center overflow-hidden rounded-full outline-2 outline-offset-2 outline-transparent transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] min-[480px]:inline-flex hover:scale-[1.05] focus-visible:outline-[rgba(100,100,255,0.5)] ${
        isVisible
          ? 'pointer-events-auto opacity-100 scale-100'
          : 'pointer-events-none opacity-0 scale-95'
      }`}
      style={{
        width: `${BUTTON_SIZE}px`,
        height: `${BUTTON_SIZE}px`,
        background: 'var(--back-to-top-surface)',
        backdropFilter: 'blur(24px) saturate(180%)',
        WebkitBackdropFilter: 'blur(24px) saturate(180%)',
        border: '1px solid var(--back-to-top-border)',
        boxShadow: 'var(--back-to-top-shadow)',
      }}
      onMouseEnter={(event) => {
        event.currentTarget.style.boxShadow = 'var(--back-to-top-hover-shadow)';
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.boxShadow = 'var(--back-to-top-shadow)';
      }}
      onMouseDown={(event) => {
        event.currentTarget.style.boxShadow = 'var(--back-to-top-active-shadow)';
      }}
      onMouseUp={(event) => {
        event.currentTarget.style.boxShadow = 'var(--back-to-top-hover-shadow)';
      }}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full blur-[20px]"
        style={{
          opacity: 0.6,
          background: 'var(--back-to-top-glow)',
          transform: 'translate3d(0, 0, 0)',
        }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-[1px] rounded-full"
        style={{ background: 'var(--back-to-top-highlight)' }}
      />

      <span
        aria-hidden="true"
        className="relative flex items-center justify-center text-center font-semibold leading-none tracking-normal transition-opacity duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:opacity-85"
        style={{ color: 'var(--back-to-top-icon)', fontSize: '18px' }}
      >
        不
      </span>
    </button>
  );
}
