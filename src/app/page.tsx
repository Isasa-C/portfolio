import Image from 'next/image';
import JourneyTimeline from '@/components/JourneyTimeline';
import SelectedProjects from '@/components/SelectedProjects';
import ThemeToggle from '@/components/ThemeToggle';
import ContactMessageForm from '@/components/ContactMessageForm';
import AskAIStoryCard from '@/components/AskAIStoryCard';

type FloatingCard = {
  label: string;
  value: string;
};

type BuilderLabProject = {
  title: string;
  url: string;
  imageSrc: string;
  imageAlt: string;
  imageClass: 'builder-image-coffee' | 'builder-image-afterme';
  imageVersion: string;
  isLcp: boolean;
  summary: string;
  tags: string[];
};

type NavItem = {
  label: string;
  href: string;
};

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  body?: string;
  titleClassName?: string;
};

const builderLabProjects: BuilderLabProject[] = [
  {
    title: 'Coffee Today',
    url: 'https://coffeebeans.vercel.app/',
    imageSrc: '/coffeebeans.png',
    imageAlt: 'Coffee Daily app homepage showing coffee cards and navigation',
    imageClass: 'builder-image-coffee',
    imageVersion: '20260513-1',
    isLcp: true,
    summary: 'Caffeine habit tracker.',
    tags: ['React'],
  },
  {
    title: 'AfterMe',
    url: 'https://afterme-eight.vercel.app/',
    imageSrc: '/afterme.png',
    imageAlt: 'AfterMe app preview showing swim essentials checklist',
    imageClass: 'builder-image-afterme',
    imageVersion: '20260512-1',
    isLcp: true,
    summary: 'Activity checklist prototype.',
    tags: ['React'],
  },
];

const navItems: NavItem[] = [
  { label: 'System', href: '#operating-system' },
  { label: 'Projects', href: '#projects' },
  { label: 'Lab', href: '#builder-lab' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

const floatingProofCards: FloatingCard[] = [
  { label: 'Review Cycle', value: '95%+ faster' },
  { label: 'Governance', value: '238K files' },
  { label: 'AI Workflow', value: 'Copilot workflows' },
  { label: 'Build Style', value: 'AI prototypes' },
];

const operatingSystemSteps = [
  {
    number: '01',
    title: 'Frame',
    body: 'Turn ambiguity into a product-shaped problem.',
  },
  {
    number: '02',
    title: 'Build',
    body: 'Prototype the smallest useful workflow.',
  },
  {
    number: '03',
    title: 'Ship',
    body: 'Package proof into a repeatable system.',
  },
];

function SectionIntro({ eyebrow, title, body, titleClassName }: SectionIntroProps) {
  return (
    <div className="section-intro">
      <p className="section-kicker">{eyebrow}</p>
      <h2 className={`section-title mt-3 ${titleClassName ?? ''}`}>{title}</h2>
      {body ? <p className="section-subtitle mt-4">{body}</p> : null}
    </div>
  );
}

function BuilderProjectCard({ project }: { project: BuilderLabProject }) {
  return (
    <article className="builder-project-card">
      <a href={project.url} target="_blank" rel="noreferrer" className="builder-link-title">
        {project.title}
      </a>
      <p className="builder-info-body">{project.summary}</p>
      <div className="builder-info-tags">
        {project.tags.map((tag) => (
          <span key={`${project.title}-${tag}`} className="builder-info-pill">{tag}</span>
        ))}
      </div>
      <Image
        src={`${project.imageSrc}?v=${project.imageVersion}`}
        alt={project.imageAlt}
        width={432}
        height={847}
        className={`builder-image ${project.imageClass}`}
        sizes="(max-width: 767px) 90vw, (max-width: 1200px) 45vw, 520px"
        loading={project.isLcp ? 'eager' : 'lazy'}
        priority={project.isLcp}
        unoptimized
      />
    </article>
  );
}

export default function Home() {
  const email = 'xuejingcao@outlook.com';
  const linkedInUrl = 'https://www.linkedin.com/in/xuejingisacao/';
  const contactMailto = `mailto:${email}`;
  const cvUrl: string | null = null;

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-[var(--nav-surface)] backdrop-blur-xl">
        <div className="content-rail flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#home" className="brand-badge rounded-full px-3 py-1.5 shadow-sm">
            XC
          </a>
          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <div className="scale-90"><ThemeToggle /></div>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero-sky-section px-4 pb-12 pt-8 sm:px-6 sm:pt-8 lg:pb-14">
          <div className="hero-panel content-rail">
            <div className="hero-cloud hero-cloud-main" aria-hidden="true" />
            <div className="hero-cloud hero-cloud-left" aria-hidden="true" />
            <div className="hero-cloud hero-cloud-right" aria-hidden="true" />

            <div className="relative z-20 mx-auto flex max-w-[760px] flex-col items-center px-0 pt-6 text-center lg:pt-8">
              <h1 className="hero-title mt-5 max-w-[760px] text-center">
                Hello!
              </h1>

              <p className="hero-lede mt-4 text-center">
                AI workflows, dashboards, and product prototypes.
              </p>
            </div>

            <div className="hero-visual-wrap">
              <article className="hero-profile-card">
                <Image
                  src="/profilepic.png"
                  alt="Xuejing Cao"
                  width={72}
                  height={72}
                  className="h-[72px] w-[72px] rounded-full object-cover object-top"
                  priority
                />
                <p className="hero-profile-name mt-4">Xuejing Cao</p>
                <p className="hero-profile-role mt-1">AI Product Builder</p>
                <p className="hero-profile-meta mt-3">Paris</p>
              </article>

              {floatingProofCards.map((item, index) => (
                <article key={item.label} className={`hero-float-card hero-float-${index + 1}`}>
                  <span className="hero-float-dot" aria-hidden="true" />
                  <p className="hero-float-label">{item.label}</p>
                  <p className="hero-float-value mt-1">{item.value}</p>
                </article>
              ))}
            </div>

            <div className="relative z-20 mt-8">
              <AskAIStoryCard />
            </div>
          </div>
        </section>

        <div className="post-hero-wrap">
          <section id="operating-system" className="operating-section scroll-mt-24 px-4 py-10 sm:px-6 lg:py-12">
            <div className="content-rail grid gap-8 lg:grid-cols-[0.9fr_1.3fr] lg:items-start">
              <SectionIntro eyebrow="SYSTEM" title="Idea to product." />

              <div className="operating-list">
                {operatingSystemSteps.map((step) => (
                  <article key={step.number} className="operating-item">
                    <span className="operating-number">{step.number}</span>
                    <div>
                      <h3 className="operating-title">{step.title}</h3>
                      <p className="operating-body">{step.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <SelectedProjects />

          <section id="builder-lab" className="builder-lab-section scroll-mt-24 px-4 py-10 sm:px-6 lg:py-12">
            <div className="content-rail">
              <SectionIntro eyebrow="LAB" title="Working prototypes." />

              <div className="builder-lab-grid mt-8">
                {builderLabProjects.map((project) => (
                  <BuilderProjectCard key={project.title} project={project} />
                ))}
              </div>
            </div>
          </section>

          <JourneyTimeline />

          <section id="contact" className="section-post contact-section scroll-mt-24 px-4 pb-8 pt-10 sm:px-6 lg:pb-8 lg:pt-12">
            <div className="section-divider content-rail">
              <div className="contact-shell rounded-[24px] p-5 sm:p-7 lg:p-8">
                <div className="grid gap-5">
                  <div className="contact-heading-row">
                    <SectionIntro
                      eyebrow="CONTACT"
                      title="Let's connect."
                      titleClassName="contact-title-blue"
                    />
                    <div className="contact-actions" aria-label="Contact links">
                      <a className="contact-icon" href={contactMailto} aria-label="Email Xuejing">
                        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
                          <path d="M4 7h16v10H4z" />
                          <path d="m4 8 8 6 8-6" />
                        </svg>
                      </a>
                      <a
                        className="contact-icon"
                        href={linkedInUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Open LinkedIn profile"
                      >
                        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                          <path d="M6.94 8.5A1.56 1.56 0 1 1 6.93 5.4a1.56 1.56 0 0 1 0 3.1ZM5.56 9.75h2.75V18H5.56V9.75Zm4.53 0h2.63v1.13h.04c.37-.7 1.26-1.44 2.6-1.44 2.78 0 3.29 1.83 3.29 4.22V18h-2.75v-3.84c0-.92-.02-2.1-1.28-2.1-1.28 0-1.47 1-1.47 2.03V18H10.1V9.75Z" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div className="contact-form-card">
                    <ContactMessageForm contactEmail={email} cvUrl={cvUrl} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="editorial-footer px-6 py-8 sm:px-10 lg:px-16">
        <div className="editorial-footer-inner content-rail flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="editorial-muted">© 2026 Xuejing Cao</p>
          <nav aria-label="Footer links" className="minimal-footer-links">
            <a href={contactMailto}>Email</a>
            <a href={linkedInUrl} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="#projects">Work</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
