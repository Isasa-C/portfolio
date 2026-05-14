'use client';

import Image from 'next/image';
import { Fragment } from 'react';
import { journeyData } from '@/data/journey';

export default function JourneyTimeline() {
  const educationItems = journeyData.filter((item) => item.type === 'education');
  const careerItems = journeyData.filter((item) => item.type === 'career');

  const getLogo = (item: (typeof journeyData)[number]) => {
    if (item.subtitle === 'Donghua University') {
      return { src: '/logo/donghua.png', alt: 'Donghua University', width: 92 };
    }

    if (item.subtitle === 'Danone') {
      return { src: '/logo/danone.webp', alt: 'Danone', width: 88 };
    }

    if (item.subtitle === 'Husky Technologies') {
      return { src: '/logo/husky.png', alt: 'Husky Technologies', width: 96 };
    }

    if (item.subtitle === 'ESCP Business School') {
      return { src: '/logo/escp.png', alt: 'ESCP Business School', width: 86 };
    }

    if (item.subtitle === 'SKINFOOD') {
      return { src: '/logo/skinfood.png', alt: 'SKINFOOD', width: 92 };
    }

    return null;
  };

  const renderLogoChip = (item: (typeof journeyData)[number]) => {
    const logo = getLogo(item);

    if (!logo) {
      return null;
    }

    return (
      <div className="absolute -bottom-5 left-1/2 z-10 -translate-x-1/2 rounded-full border border-[var(--border)] bg-white px-3 py-1 dark:bg-[var(--surface)]">
        <Image src={logo.src} alt={logo.alt} width={logo.width} height={24} className="h-5 w-auto object-contain" />
      </div>
    );
  };

  return (
    <section id="journey" className="journey-section section-post scroll-mt-24 px-4 py-10 sm:px-6 lg:py-12">
      <div className="section-divider journey-shell mx-auto">
        <p className="section-kicker">JOURNEY</p>
        <h2 className="section-title mt-3">
          Journey.
        </h2>

        <div className="mt-8 hidden lg:block">
          <div className="relative w-full">
            <div className="absolute left-0 right-0 top-[calc(50%-0.75rem)] h-px bg-[var(--border)]" />

            <div className="relative mb-10">
              <div className="mb-5 flex -translate-y-3 items-center justify-center">
                <h3 className="timeline-group-title">Education</h3>
              </div>
              <div className="flex items-end justify-between gap-3">
                {educationItems.map((item) => (
                  <Fragment key={item.id}>
                    <div className="flex flex-col items-center">
                      <div className="relative mb-4 w-64 rounded-[22px] border border-[var(--border)] bg-[var(--surface)] p-3.5 shadow-[0_10px_26px_-22px_var(--shadow-color)]">
                        <div className="timeline-period">{item.period}</div>
                        <h4 className="timeline-title">{item.title}</h4>
                        <p className="timeline-meta">{item.subtitle}</p>
                        {item.detail ? <p className="timeline-detail mb-2">{item.detail}</p> : null}
                        {renderLogoChip(item)}
                      </div>
                      <div className="h-4 w-px bg-[var(--border)]" />
                      <div className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>

            <div className="relative mt-10">
              <div className="mb-5 flex items-center justify-center">
                <h3 className="timeline-group-title">Career</h3>
              </div>
              <div className="flex items-start justify-between gap-3">
                {careerItems.map((item) => (
                  <div key={item.id} className="flex flex-col items-center self-start">
                    <div className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                    <div className="h-4 min-h-[16px] w-px bg-[var(--border)]" />
                    <div className="relative mt-4 w-56 rounded-[22px] border border-[var(--border)] bg-[var(--surface)] p-3.5 pt-7 shadow-[0_10px_26px_-22px_var(--shadow-color)]">
                      <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--border)] bg-white px-3 py-1 dark:bg-[var(--surface)]">
                        {(() => {
                          const logo = getLogo(item);
                          if (!logo) {
                            return null;
                          }
                          return <Image src={logo.src} alt={logo.alt} width={logo.width} height={24} className="h-5 w-auto object-contain" />;
                        })()}
                      </div>

                      <div className="timeline-period">{item.period}</div>
                      <h4 className="timeline-title">{item.title}</h4>
                      <p className="timeline-meta">{item.subtitle}</p>
                      {item.detail ? <p className="timeline-detail mb-2">{item.detail}</p> : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 lg:hidden">
          <div className="space-y-6">
            <div>
              <h3 className="timeline-group-title mb-4 text-center">Education</h3>
              <div className="space-y-3">
                {educationItems.map((item, index) => (
                  <div key={item.id} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                      {index < educationItems.length - 1 ? <div className="mt-2 h-12 w-px bg-[var(--border)]" /> : null}
                    </div>
                    <div className="relative flex-1 rounded-[20px] border border-[var(--border)] bg-[var(--surface)] p-3.5 pt-3 shadow-[0_10px_26px_-22px_var(--shadow-color)]">
                      <div className="timeline-period">{item.period}</div>
                      <h4 className="timeline-title">{item.title}</h4>
                      <p className="timeline-meta">{item.subtitle}</p>
                      {item.detail ? <p className="timeline-detail">{item.detail}</p> : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="timeline-group-title mb-4 text-center">Career</h3>
              <div className="space-y-3">
                {careerItems.map((item, index) => (
                  <div key={item.id} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                      {index < careerItems.length - 1 ? <div className="mt-2 h-12 w-px bg-[var(--border)]" /> : null}
                    </div>
                    <div className="relative flex-1 rounded-[20px] border border-[var(--border)] bg-[var(--surface)] p-3.5 pt-5 shadow-[0_10px_26px_-22px_var(--shadow-color)]">
                      <div className="timeline-period">{item.period}</div>
                      <h4 className="timeline-title">{item.title}</h4>
                      <p className="timeline-meta">{item.subtitle}</p>
                      {item.detail ? <p className="timeline-detail">{item.detail}</p> : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
