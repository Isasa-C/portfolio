'use client';

import Image from 'next/image';
import { Fragment, type KeyboardEvent, useEffect, useRef, useState } from 'react';
import { journeyData } from '@/data/journey';

export default function JourneyTimeline() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeLogoItemId, setActiveLogoItemId] = useState<string | null>(null);
  const [visibleItemIds, setVisibleItemIds] = useState<Set<string>>(() => new Set());
  const educationItems = journeyData.filter((item) => item.type === 'education');
  const careerItems = journeyData.filter((item) => item.type === 'career');

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const cards = Array.from(section.querySelectorAll<HTMLElement>('.journey-card'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => {
              const itemId = (entry.target as HTMLElement).dataset.journeyCardId;

              if (itemId) {
                setVisibleItemIds((currentIds) => {
                  const nextIds = new Set(currentIds);
                  nextIds.add(itemId);
                  return nextIds;
                });
              }
            }, index * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' },
    );

    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

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

  const cardClassName = (item: (typeof journeyData)[number], mobile = false) =>
    `${item.featured ? 'border-[color:var(--ring)] bg-[var(--surface-elevated)] shadow-lg' : 'border-[color:var(--ring)] bg-[var(--surface)]'} ${
      mobile ? 'flex-1' : item.type === 'education' ? 'w-88' : item.featured ? 'w-68' : 'w-56'
    } ${
      activeLogoItemId === item.id ? 'is-selected' : ''
    } ${
      visibleItemIds.has(item.id) ? 'is-visible' : ''
    } journey-card group cursor-pointer rounded-2xl border p-4 ring-1 ring-[var(--ring)] shadow-[var(--shadow-color)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent-border)]`;

  const logoClassName = (item: (typeof journeyData)[number]) =>
    `logo h-5 w-auto object-contain transition-[filter] duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
      activeLogoItemId === item.id
        ? '[filter:grayscale(0%)_opacity(1)]'
        : '[filter:grayscale(100%)_opacity(0.75)] group-hover:[filter:grayscale(0%)_opacity(1)]'
    }`;

  const activateItem = (item: (typeof journeyData)[number]) => {
    setActiveLogoItemId(item.id);
  };

  const handleCardKeyDown = (event: KeyboardEvent<HTMLDivElement>, item: (typeof journeyData)[number]) => {
    if (event.key !== 'Enter' && event.key !== ' ') {
      return;
    }

    event.preventDefault();
    activateItem(item);
  };

  const renderLogo = (item: (typeof journeyData)[number], placement: 'top' | 'bottom') => {
    const logo = getLogo(item);

    if (!logo) {
      return null;
    }

    return (
      <div
        className={
          placement === 'top'
            ? 'absolute left-1/2 top-0 z-10 flex -translate-x-1/2 -translate-y-1/2 justify-center'
            : '-mb-3 mt-6 flex justify-center'
        }
      >
        <div className="flex h-10 items-center justify-center rounded-full bg-[var(--surface-elevated)] px-4 ring-1 ring-[var(--ring)]">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={24}
            className={logoClassName(item)}
          />
        </div>
      </div>
    );
  };

  const renderBottomEdgeLogo = (item: (typeof journeyData)[number]) => {
    const logo = getLogo(item);

    if (!logo) {
      return null;
    }

    return (
      <div className="absolute -bottom-5 left-1/2 z-10 -translate-x-1/2">
        <div className="flex h-10 items-center justify-center rounded-full bg-[var(--surface-elevated)] px-4 ring-1 ring-[var(--ring)]">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={24}
            className={logoClassName(item)}
          />
        </div>
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="journey-section scroll-mt-24 border-t border-[color:var(--border)] bg-[var(--color-section-bg)] px-4 py-14 sm:px-6 lg:px-8 lg:py-18"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-[var(--accent-strong)]">Journey</p>
        </div>

        <div className="mt-12 hidden lg:block">
          <div className="relative">
            <div className="absolute left-0 right-0 top-[calc(50%-0.75rem)] h-px bg-[var(--border)]" />
            <p className="absolute left-[70%] top-[calc(50%-0.75rem)] flex -translate-x-1/2 flex-col items-center text-center text-[13px] font-normal italic text-[var(--accent-strong)]">
              <span className="absolute bottom-1 whitespace-nowrap">May 2023 ·</span>
              <span className="absolute top-1 whitespace-nowrap">China → France</span>
            </p>

            <div className="relative mb-12">
              <div className="mb-5 flex -translate-y-3 items-center justify-center">
                <h3 className="text-[15px] font-semibold uppercase tracking-[0.2em] text-[var(--muted-strong)]">
                  Education
                </h3>
              </div>
              <div className="flex items-end justify-between gap-4">
                {educationItems.map((item) => (
                  <Fragment key={item.id}>
                    <div className="flex flex-col items-center">
                      <div
                        role="button"
                        tabIndex={0}
                        data-journey-card-id={item.id}
                        onClick={() => activateItem(item)}
                        onKeyDown={(event) => handleCardKeyDown(event, item)}
                        className={`relative mb-4 overflow-visible pt-3 ${cardClassName(item)}`}
                      >
                        <div className="text-[13px] font-medium text-[var(--muted)]">{item.period}</div>
                        <h4 className="mt-2 text-base font-semibold leading-snug text-[var(--headline)]">
                          {item.title}
                        </h4>
                        <p className="mt-1.5 text-[13px] text-[var(--muted-strong)]">{item.subtitle}</p>
                        <p className="mt-1.5 text-[13px] text-[var(--muted)]">{item.location}</p>
                        {item.detail ? (
                          <p className="mt-2.5 mb-3 text-[13px] font-medium leading-6 text-[var(--accent-strong)]">
                            {item.detail}
                          </p>
                        ) : null}
                        {renderBottomEdgeLogo(item)}
                      </div>
                      <div className="h-5 w-px bg-[var(--border)]" />
                      <div className="h-3 w-3 rounded-full bg-[var(--accent)] ring-2 ring-[var(--background)]" />
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>

            <div className="relative mt-20">
              <div className="mb-6 flex items-center justify-center">
                <h3 className="text-[15px] font-semibold uppercase tracking-[0.2em] text-[var(--muted-strong)]">
                  Career
                </h3>
              </div>
              <div className="flex items-start justify-between gap-4">
                {careerItems.map((item, index) => (
                  <div key={item.id} className={`flex flex-col items-center self-start ${index === 1 ? '-ml-5' : ''}`}>
                    <div className="h-3 w-3 rounded-full bg-[var(--accent)] ring-2 ring-[var(--background)]" />
                    <div className="h-5 min-h-[20px] w-px bg-[var(--border)]" />
                    <div
                      role="button"
                      tabIndex={0}
                      data-journey-card-id={item.id}
                      onClick={() => activateItem(item)}
                      onKeyDown={(event) => handleCardKeyDown(event, item)}
                      className={`relative mt-5 overflow-visible pt-7 ${cardClassName(item)}`}
                    >
                      {renderLogo(item, 'top')}
                      <div className="text-[13px] font-medium text-[var(--muted)]">{item.period}</div>
                      <h4 className="mt-2 text-base font-semibold leading-snug text-[var(--headline)]">{item.title}</h4>
                      <p className="mt-1.5 text-[13px] text-[var(--muted-strong)]">{item.subtitle}</p>
                      <p className="mt-1.5 text-[13px] text-[var(--muted)]">{item.location}</p>
                      {item.detail ? (
                        <p className="mt-2.5 mb-3 text-[13px] font-medium leading-6 text-[var(--accent-strong)]">
                          {item.detail}
                        </p>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 lg:hidden">
          <div className="space-y-7">
            <div>
              <h3 className="mb-5 text-center text-[15px] font-semibold uppercase tracking-[0.2em] text-[var(--muted-strong)]">
                Education
              </h3>
              <div className="space-y-4">
                {educationItems.map((item, index) => (
                  <div key={item.id} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-3 w-3 rounded-full bg-[var(--accent)] ring-2 ring-[var(--background)]" />
                      {index < educationItems.length - 1 ? <div className="mt-2 h-14 w-px bg-[var(--border)]" /> : null}
                    </div>
                    <div
                      role="button"
                      tabIndex={0}
                      data-journey-card-id={item.id}
                      onClick={() => activateItem(item)}
                      onKeyDown={(event) => handleCardKeyDown(event, item)}
                      className={`relative mb-4 overflow-visible pt-3 ${cardClassName(item, true)}`}
                    >
                      <div className="text-[13px] font-medium text-[var(--muted)]">{item.period}</div>
                      <h4 className="mt-2 text-base font-semibold leading-snug text-[var(--headline)]">{item.title}</h4>
                      <p className="mt-1.5 text-[13px] text-[var(--muted-strong)]">{item.subtitle}</p>
                      <p className="mt-1.5 text-[13px] text-[var(--muted)]">{item.location}</p>
                      {item.detail ? (
                        <p className="mt-2.5 text-[13px] font-medium leading-6 text-[var(--accent-strong)]">
                          {item.detail}
                        </p>
                      ) : null}
                      {renderBottomEdgeLogo(item)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-5 text-center text-[15px] font-semibold uppercase tracking-[0.2em] text-[var(--muted-strong)]">
                Career
              </h3>
              <div className="space-y-4">
                {careerItems.map((item, index) => (
                  <div key={item.id} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-3 w-3 rounded-full bg-[var(--accent)] ring-2 ring-[var(--background)]" />
                      {index < careerItems.length - 1 ? <div className="mt-2 h-14 w-px bg-[var(--border)]" /> : null}
                    </div>
                    <div
                      role="button"
                      tabIndex={0}
                      data-journey-card-id={item.id}
                      onClick={() => activateItem(item)}
                      onKeyDown={(event) => handleCardKeyDown(event, item)}
                      className={`${cardClassName(item, true)} pt-5`}
                    >
                      {renderLogo(item, 'top')}
                      <div className="text-[13px] font-medium text-[var(--muted)]">{item.period}</div>
                      <h4 className="mt-2 text-base font-semibold leading-snug text-[var(--headline)]">{item.title}</h4>
                      <p className="mt-1.5 text-[13px] text-[var(--muted-strong)]">{item.subtitle}</p>
                      <p className="mt-1.5 text-[13px] text-[var(--muted)]">{item.location}</p>
                      {item.detail ? (
                        <p className="mt-2.5 text-[13px] font-medium leading-6 text-[var(--accent-strong)]">
                          {item.detail}
                        </p>
                      ) : null}
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
