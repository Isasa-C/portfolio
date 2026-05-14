'use client';

import { useState } from 'react';

type StoryLine = {
  icon: string;
  text: string;
};

const loadingLines: string[] = [
  'Initializing memory reconstruction...',
  'Analyzing educational timeline...',
  'Connecting cross-country transitions...',
];

const finalStory: StoryLine[] = [
  { icon: '√', text: 'Started in China with a strong mathematics foundation.' },
  { icon: '⚙', text: 'Moved into engineering and high-pressure project delivery.' },
  { icon: '◉', text: 'Worked across APAC on automotive and smartphone programs.' },
  { icon: '文', text: 'Managed multilingual stakeholder coordination across countries.' },
  { icon: '◍', text: 'Transitioned into AI, analytics, and machine learning.' },
  { icon: '▲', text: 'Pursued advanced studies in Paris at ESCP Business School.' },
  { icon: '◇', text: 'Focused on NLP, AI systems, and intelligent business solutions.' },
  { icon: '✦', text: 'Currently building technology experiences that connect data, strategy, and human insight.' },
];

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function AskAIStoryCard() {
  const [loadingOutput, setLoadingOutput] = useState<string[]>([]);
  const [storyOutput, setStoryOutput] = useState<StoryLine[]>([]);
  const [running, setRunning] = useState(false);
  const hasResponse = loadingOutput.length > 0 || storyOutput.length > 0;

  async function runStory() {
    setRunning(true);
    setLoadingOutput([]);
    setStoryOutput([]);

    for (const line of loadingLines) {
      setLoadingOutput((prev) => [...prev, line]);
      await sleep(1000);
    }

    await sleep(1200);
    setLoadingOutput([]);

    for (const line of finalStory) {
      setStoryOutput((prev) => [...prev, line]);
      await sleep(1200);
    }
  }

  return (
    <div className="ask-ai-card mx-auto max-w-[980px] p-6 sm:p-8 lg:p-10">
      <p className="section-kicker">Ask AI</p>
      <h2 className="card-heading mt-3">
        How did this person get to Paris?
      </h2>
      <p className="body-copy mt-3 max-w-[640px]">
        A quick narrative view of my journey from operations and data delivery to AI product building.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button id="ask-ai-btn" type="button" className="contact-btn contact-btn-primary" onClick={runStory} disabled={running}>
          {running ? 'Thinking...' : 'Ask AI'}
        </button>
      </div>

      {hasResponse ? (
        <div id="ai-response" className="ask-ai-thread mt-7 rounded-2xl p-4 sm:p-5" aria-live="polite">
          {loadingOutput.map((line) => (
            <div key={line} className="ai-loading body-copy">
              {line}
            </div>
          ))}
          {storyOutput.map((line) => (
            <div key={line.text} className="ai-story body-copy">
              <span className="ai-story-icon" aria-hidden="true">{line.icon}</span>
              <span>{line.text}</span>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
