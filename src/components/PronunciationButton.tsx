'use client';

import { useEffect, useId, useState } from 'react';

type PronunciationButtonProps = {
  text: string;
  pronunciation: string;
  className?: string;
};

export default function PronunciationButton({
  text,
  pronunciation,
  className = '',
}: PronunciationButtonProps) {
  const [status, setStatus] = useState<'idle' | 'playing' | 'unsupported'>('idle');
  const liveRegionId = useId();

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handlePronounce = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setStatus('unsupported');
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(pronunciation);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    utterance.pitch = 1;

    utterance.onstart = () => {
      setStatus('playing');
    };

    utterance.onend = () => {
      setStatus('idle');
    };

    utterance.onerror = () => {
      setStatus('idle');
    };

    window.speechSynthesis.speak(utterance);
  };

  return (
    <span className={`inline-flex items-end ${className}`}>
      <button
        type="button"
        onClick={handlePronounce}
        aria-label={`Hear how to pronounce ${text}`}
        aria-describedby={liveRegionId}
        className="inline-flex h-5 w-5 items-center justify-center text-[var(--accent-strong)] transition hover:text-[var(--headline)] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent-border)]"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M3 10v4c0 .6.4 1 1 1h3l5 4V5L7 9H4c-.6 0-1 .4-1 1Zm12.8-2.6a1 1 0 0 1 1.4 0A7.9 7.9 0 0 1 19.5 13a7.9 7.9 0 0 1-2.3 5.6 1 1 0 0 1-1.4-1.4 5.9 5.9 0 0 0 1.7-4.2c0-1.6-.6-3.1-1.7-4.2a1 1 0 0 1 0-1.4Zm-2.9 2.9a1 1 0 0 1 1.4 0c.7.7 1.2 1.7 1.2 2.7s-.4 2-1.2 2.7a1 1 0 1 1-1.4-1.4c.4-.4.6-.8.6-1.3s-.2-1-.6-1.3a1 1 0 0 1 0-1.4Z" />
        </svg>
      </button>

      <span id={liveRegionId} aria-live="polite" className="sr-only">
        {status === 'playing' && `Playing pronunciation for ${text}`}
        {status === 'unsupported' && 'Speech playback is not supported in this browser'}
      </span>
    </span>
  );
}
