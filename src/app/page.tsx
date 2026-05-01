import Image from 'next/image';
import InterestsSection from '@/components/InterestsSection';
import JourneyTimeline from '@/components/JourneyTimeline';
import SelectedProjects from '@/components/SelectedProjects';
import BackToTopButton from '@/components/BackToTopButton';
import ContactActions from '@/components/ContactActions';
import ThemeToggle from '@/components/ThemeToggle';
import PronunciationButton from '@/components/PronunciationButton';

export default function Home() {
  const emailSubject = 'Interview Invitation - [XXX Position] at [XXX Company]';
  const emailBody = `Dear Xuejing,


I hope this message finds you well.
My name is [XXX Your Name], and I am reaching out on behalf of [XXX Company Name] in my capacity as [XXX Your Title / HR / Talent Acquisition].

Having reviewed your portfolio, I was impressed by your profile and believe your background aligns well with what we are looking for in the [XXX Position] role.
I would love the opportunity to connect and learn more about your experience and aspirations.

I would like to invite you to a [XXX duration, e.g. 30-minute] video call interview via [Zoom / Microsoft Teams].
Please find below a few time slots for your consideration:

- [XXX Day, Date - Time, Timezone]
- [XXX Day, Date - Time, Timezone]
- [XXX Day, Date - Time, Timezone]

Please let me know which slot works best for you, or feel free to suggest an alternative time if none of the above are convenient.

Once confirmed, I will send over a calendar invitation with the meeting link and any further details.

Should you have any questions in the meantime, please do not hesitate to reach out.

I look forward to speaking with you.





`;
  const contactMailto = `mailto:xuejingcao@outlook.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  const phoneDisplay = '+33 7 00 00 00 45';
  const phoneCopyValue = '+33700000045';
  const linkedInUrl = 'https://www.linkedin.com/in/xuejingisacao/';

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="sticky top-0 z-30 border-b border-[color:var(--border)] bg-[var(--surface-strong)] backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="text-lg font-semi bold italic text-[var(--accent-strong)]">
            XC
          </a>
          <div className="flex items-center gap-3 sm:gap-4">
            <ThemeToggle />
            <nav className="hidden items-center gap-8 text-sm font-medium text-[var(--muted-strong)] md:flex">
              <a href="#journey" className="transition hover:text-[var(--headline)]">
                Journey
              </a>
              <a href="#projects" className="transition hover:text-[var(--headline)]">
                Projects
              </a>
              <a href="#interests" className="transition hover:text-[var(--headline)]">
                Interests
              </a>
              <a
                href="#contact"
                className="rounded-full border border-[color:var(--border)] px-4 py-2 transition hover:border-[color:var(--accent-border)] hover:text-[var(--headline)]"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main id="top" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-[var(--accent-soft)] to-transparent" />

        <section
          id="contact"
          className="relative mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
        >
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="max-w-xl">
              <div className="mt-8">
                <div className="mt-4">
                  <h1
                    className="mb-7 text-[clamp(52px,10vw,80px)] font-extrabold leading-none tracking-[-0.04em] text-[var(--headline)]"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    <span className="flex items-end gap-2 not-italic">
                      <span>Xuějīng</span>
                      <PronunciationButton text="Xuějīng" pronunciation="Shweh-jing" className="mb-1" />
                    </span>
                    <span className="-mt-1 block italic text-[var(--accent-strong)]">CAO</span>
                  </h1>
                </div>
                <div className="relative mt-6 max-w-[22rem]">
                  <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-[var(--accent-soft)] to-transparent blur-lg" />
                  <Image
                    src="/profilepic.png"
                    alt="Xuejing Cao - AI & Data Transformation Analyst"
                    width={384}
                    height={512}
                    priority
                    className="relative h-80 w-60 rounded-[2rem] object-cover object-top ring-1 ring-[var(--ring)] shadow-2xl shadow-[var(--shadow-color)] sm:h-[22rem] sm:w-72"
                  />
                </div>
              </div>
            </div>

            <div className="max-w-3xl pt-34 lg:pt-38">
              <p className="text-[21px] font-semibold leading-tight tracking-[-0.04em] text-[var(--muted-strong)]">
                Hello ! 
              </p>
              <p className="mt-6 max-w-[720px] text-base leading-[1.8] text-[var(--muted-strong)]">
                I&apos;m Xuejing (Isa). For{' '}
                <span className="inline-flex rounded-full bg-[rgba(191,231,255,0.85)] px-[10px] py-0 leading-none text-[rgba(15,23,42,0.92)] dark:text-[rgba(15,23,42,0.92)]">
                  10 years
                </span>
                , I have turned ambiguous, high-stakes problems into structured solutions across engineering, supply
                chain, and now data &amp; AI.
              </p>
              <p className="mt-3 max-w-[720px] text-base leading-[1.8] text-[var(--muted-strong)]">
                I spent 8 years as an engineer at Husky Technologies, delivering complex custom systems with{' '}
                <span className="inline-flex rounded-full bg-[rgba(191,231,255,0.85)] px-[10px] py-0 leading-none text-[rgba(15,23,42,0.92)] dark:text-[rgba(15,23,42,0.92)]">
                  21% faster timelines
                </span>{' '}
                and a{' '}
                <span className="inline-flex rounded-full bg-[rgba(191,231,255,0.85)] px-[10px] py-0 leading-none text-[rgba(15,23,42,0.92)] dark:text-[rgba(15,23,42,0.92)]">
                  0.01% return rate
                </span>
                .
              </p>
              <p className="mt-3 max-w-[720px] text-base leading-[1.8] text-[var(--muted-strong)]">
                I now apply the same logic to data and AI. I hold an MSc in Big Data &amp; Business Analytics from
                ESCP Business School{' '}
                <span className="inline-flex rounded-full bg-[rgba(191,231,255,0.85)] px-[10px] py-0 leading-none text-[rgba(15,23,42,0.92)] dark:text-[rgba(15,23,42,0.92)]">
                  GPA 3.8
                </span>
                .
              </p>
              <p className="mt-3 max-w-[720px] text-base leading-[1.8] text-[var(--muted-strong)]">
                At Danone, I delivered Power BI governance dashboards, led Copilot AI enablement, and restructured
                SharePoint across{' '}
                <span className="inline-flex rounded-full bg-[rgba(191,231,255,0.85)] px-[10px] py-0 leading-none text-[rgba(15,23,42,0.92)] dark:text-[rgba(15,23,42,0.92)]">
                  200,000+ files
                </span>
                .
              </p>
              <p
                className="mt-5 text-[20px] italic text-[var(--accent-strong)]"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Different domains. Same operating system.
              </p>

              <ContactActions
                contactMailto={contactMailto}
                phoneDisplay={phoneDisplay}
                phoneCopyValue={phoneCopyValue}
                linkedInUrl={linkedInUrl}
              />

              <p className="mt-4 text-sm text-[var(--muted)]">
                Paris-based · Available immediately · Talent Passport visa holder
              </p>
            </div>
          </div>

        </section>

        <JourneyTimeline />

        <SelectedProjects />
        <InterestsSection />

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-[color:var(--border)] bg-[var(--surface)] p-8 ring-1 ring-[var(--ring)] shadow-2xl shadow-[var(--shadow-color)] sm:p-10 lg:p-14">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent-strong)]">
              What Colleagues Say
            </p>
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              <figure className="rounded-2xl bg-[var(--surface-soft)] p-5">
                <blockquote className="text-sm leading-7 text-[var(--muted-strong)] sm:text-[15px]">
                  &ldquo;Dynamic, efficient, always thinks things through. Strong soft skills and an optimistic energy
                  that consistently moves teams forward, even in ambiguous, high-pressure situations.&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                  Deputy VP, Global Tax Digitalization · Danone
                </figcaption>
              </figure>
              <figure className="rounded-2xl bg-[var(--surface-soft)] p-5">
                <blockquote className="text-sm leading-7 text-[var(--muted-strong)] sm:text-[15px]">
                  &ldquo;Brings ownership to every stage, not just her scope, but the outcome. She inherited a broken
                  client relationship, flew to Seoul, coordinated four engineering teams across four countries in a
                  week, and closed it. That&apos;s not project management. That&apos;s judgment.&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                  Recognition letter · Global VP · Husky Technologies
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
      </main>
      <footer className="px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl border-t border-[color:var(--border)] pt-6 text-center text-sm text-[var(--muted)]">
          <a href={contactMailto} className="transition hover:text-[var(--headline)]">
            xuejingcao@outlook.com
          </a>{' '}
          ·{' '}
          <a
            href="https://www.linkedin.com/in/xuejingisacao/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-[var(--headline)]"
          >
            LinkedIn
          </a>{' '}
          · Paris-based · Available immediately
        </div>
      </footer>
      <BackToTopButton />
    </div>
  );
}
