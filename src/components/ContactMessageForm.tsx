'use client';

import { useMemo, useState } from 'react';

type ContactMessageFormProps = {
  contactEmail: string;
  cvUrl: string | null;
};

export default function ContactMessageForm({ contactEmail, cvUrl }: ContactMessageFormProps) {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const mailtoHref = useMemo(() => {
    const resolvedSubject = subject.trim() || 'Portfolio inquiry';
    const bodyLines = [message.trim() || 'Hello, I would like to connect with you.'];

    return `mailto:${contactEmail}?subject=${encodeURIComponent(resolvedSubject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
  }, [contactEmail, subject, message]);

  return (
    <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
      <label className="contact-label">
        Subject
        <input
          className="contact-input"
          type="text"
          name="subject"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
        />
      </label>
      <label className="contact-label">
        Message
        <textarea
          className="contact-input contact-textarea"
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </label>
      <div className="flex flex-wrap items-center justify-end gap-3">
        <a href={mailtoHref} className="contact-icon contact-icon-send" aria-label="Send message by email">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5 fill-none stroke-current stroke-2"
            style={{ transform: 'rotate(-90deg)' }}
          >
            <path d="M22 2 11 13" />
            <path d="m22 2-7 20-4-9-9-4Z" />
          </svg>
        </a>
        {cvUrl ? (
          <a href={cvUrl} target="_blank" rel="noreferrer" className="contact-btn contact-btn-secondary">Download CV</a>
        ) : null}
      </div>
    </form>
  );
}
