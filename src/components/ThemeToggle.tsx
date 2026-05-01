'use client';

import { useEffect, useId, useState } from 'react';

const STORAGE_KEY = 'portfolio-theme';
const HANDLE_SIZE = 32;
const TRACK_WIDTH = 88;
const TRACK_HEIGHT = 40;
const HANDLE_INSET = 4;
const LIGHT_HANDLE_X = HANDLE_INSET;
const DARK_HANDLE_X = TRACK_WIDTH - HANDLE_SIZE - HANDLE_INSET;

type ThemeToggleProps = {
  onChange?: (isDark: boolean) => void;
};

function getPreferredTheme() {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const savedTheme = window.localStorage.getItem(STORAGE_KEY);
  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function SunIcon({ visible }: { visible: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="absolute h-6 w-6 transition-all duration-300 ease-in-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: `scale(${visible ? 1 : 0.7}) rotate(${visible ? '0deg' : '-16deg'})`,
        filter: 'drop-shadow(0 2px 4px rgba(255, 255, 255, 0.28))',
      }}
    >
      <g fill="none" stroke="rgba(255, 255, 255, 0.96)" strokeLinecap="round" strokeWidth="1.8">
        <circle cx="12" cy="12" r="4.1" fill="rgba(255, 255, 255, 0.98)" stroke="rgba(255, 255, 255, 0.98)" />
        <path d="M12 1.9v3.1" />
        <path d="M12 19v3.1" />
        <path d="M1.9 12H5" />
        <path d="M19 12h3.1" />
        <path d="M4.8 4.8l2.2 2.2" />
        <path d="M17 17l2.2 2.2" />
        <path d="M4.8 19.2L7 17" />
        <path d="M17 7l2.2-2.2" />
      </g>
    </svg>
  );
}

function MoonIcon({ visible }: { visible: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="absolute h-6 w-6 transition-all duration-300 ease-in-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: `scale(${visible ? 1 : 0.7}) rotate(${visible ? '0deg' : '16deg'})`,
        filter: 'drop-shadow(0 0 8px rgba(196, 213, 255, 0.32))',
      }}
    >
      <path
        d="M15.4 2.7a8.7 8.7 0 1 0 5.9 15.2A9.6 9.6 0 0 1 15.4 2.7Z"
        fill="rgba(255, 255, 255, 0.96)"
      />
    </svg>
  );
}

export default function ThemeToggle({ onChange }: ThemeToggleProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => getPreferredTheme());
  const isDark = theme === 'dark';
  const handleX = isDark ? DARK_HANDLE_X : LIGHT_HANDLE_X;
  const glowX = handleX + HANDLE_SIZE / 2;
  const liveRegionId = useId();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
    onChange?.(isDark);
  }, [isDark, onChange, theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="relative">
      <button
        type="button"
        role="switch"
        aria-checked={isDark}
        aria-label="Toggle dark mode"
        aria-describedby={liveRegionId}
        onClick={toggleTheme}
        className="relative rounded-full outline-none transition duration-300 ease-in-out hover:brightness-105 focus-visible:ring-2 focus-visible:ring-[rgba(130,154,255,0.55)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] active:scale-[0.985]"
        style={{
          width: `${TRACK_WIDTH}px`,
          height: `${TRACK_HEIGHT}px`,
          background: isDark
            ? 'linear-gradient(135deg, #1A1F3A 0%, #0A0E27 100%)'
            : 'linear-gradient(135deg, #73CEFF 0%, #38B8F8 52%, #0D99DF 100%)',
          boxShadow: isDark ? 'inset 0 2px 8px rgba(0, 0, 0, 0.4)' : 'inset 0 2px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
        >
          <span
            className="absolute top-1/2 h-14 w-14 -translate-y-1/2 rounded-full blur-[8px] transition-all duration-[500ms]"
            style={{
              left: `${glowX - 28}px`,
              opacity: 0.4,
              background: isDark
                ? 'radial-gradient(circle, rgba(58, 69, 128, 0.82) 0%, rgba(58, 69, 128, 0.38) 48%, rgba(58, 69, 128, 0) 100%)'
                : 'radial-gradient(circle, rgba(191, 231, 255, 0.95) 0%, rgba(115, 206, 255, 0.45) 48%, rgba(115, 206, 255, 0) 100%)',
            }}
          />
        </span>

        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-[44px] text-[14px] font-medium text-white transition-all duration-300 ease-in-out"
          style={{
            opacity: isDark ? 0 : 1,
            transform: `translateX(${isDark ? '6px' : '0px'}) scale(${isDark ? 0.96 : 1})`,
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.18)',
            fontSize: '12px',
            paddingLeft: '43px',
          }}
        >
          Light
        </span>

        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-[14px] font-medium text-white transition-all duration-300 ease-in-out"
          style={{
            opacity: isDark ? 1 : 0,
            transform: `translateX(${isDark ? '0px' : '-6px'}) scale(${isDark ? 1 : 0.96})`,
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.22)',
            fontSize: '12px',
            paddingLeft: '14px',
          }}
        >
          Dark
        </span>

        <span
          aria-hidden="true"
          className="absolute top-1 flex items-center justify-center rounded-full transition-transform duration-[500ms] ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]"
          style={{
            width: `${HANDLE_SIZE}px`,
            height: `${HANDLE_SIZE}px`,
            transform: `translateX(${handleX}px)`,
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1.5px solid rgba(255, 255, 255, 0.4)',
            boxShadow:
              '0 4px 12px rgba(0, 0, 0, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.6), inset 0 -1px 2px rgba(0, 0, 0, 0.2)',
          }}
        >
          <span
            className="pointer-events-none absolute inset-[1px] rounded-full"
            style={{
              background:
                'conic-gradient(from 210deg at 28% 28%, rgba(255, 255, 255, 0.78), rgba(255, 255, 255, 0.14) 28%, rgba(255, 255, 255, 0) 54%, rgba(255, 255, 255, 0.34) 80%, rgba(255, 255, 255, 0.78))',
              mixBlendMode: 'screen',
              opacity: 0.72,
            }}
          />
          <span className="relative flex h-[18px] w-[18px] items-center justify-center">
            <SunIcon visible={!isDark} />
            <MoonIcon visible={isDark} />
          </span>
        </span>
      </button>

      <span id={liveRegionId} aria-live="polite" className="sr-only">
        {isDark ? 'Dark mode enabled' : 'Light mode enabled'}
      </span>
    </div>
  );
}
