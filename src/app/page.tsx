import JourneyTimeline from '@/components/JourneyTimeline';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-30 border-b border-slate-800/70 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="text-lg font-semibold tracking-tight text-white">
            Xuejing
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#value" className="transition hover:text-white">
              Value
            </a>
            <a href="#journey" className="transition hover:text-white">
              Journey
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>
            <a href="#contact" className="rounded-full border border-slate-700 px-4 py-2 transition hover:border-slate-500 hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-cyan-500/20 to-transparent" />

        <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full bg-cyan-400/10 px-4 py-1 text-sm font-semibold text-cyan-300 ring-1 ring-cyan-300/20">
                AI & Data Transformation Analyst
              </span>
              <h1 className="mt-8 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Turning operations, data, and automation into practical business solutions.
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                {/* Subheadline can be integrated or removed if not needed */}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-slate-800"
                >
                  Contact Me
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl bg-slate-900/80 p-5 ring-1 ring-white/10">
                  <p className="text-3xl font-semibold text-white">10+ Years</p>
                  <p className="mt-2 text-sm text-slate-400">Engineering, operations, and delivery experience</p>
                </div>
                <div className="rounded-3xl bg-slate-900/80 p-5 ring-1 ring-white/10">
                  <p className="text-3xl font-semibold text-white">Focus</p>
                  <p className="mt-2 text-sm text-slate-400">Data, automation, and business transformation</p>
                </div>
                <div className="rounded-3xl bg-slate-900/80 p-5 ring-1 ring-white/10">
                  <p className="text-3xl font-semibold text-white">Approach</p>
                  <p className="mt-2 text-sm text-slate-400">Business-first, execution-driven</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-lg"></div>
                <img
                  src="/profilepic.png"
                  alt="Xuejing Cao - AI & Data Transformation Analyst"
                  className="relative h-80 w-80 rounded-[2rem] object-cover ring-1 ring-white/10 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-slate-800/70 bg-slate-950/90 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/80">
                About
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                About
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 mx-auto">
                Former Senior Project Engineer with 10+ years in operations and project delivery, now focused on analytics, automation, and AI-enabled transformation. I combine business understanding with data tools to improve decision-making, streamline processes, and deliver practical, scalable solutions across teams.
              </p>
            </div>
          </div>
        </section>

        <section id="value" className="border-t border-slate-800/70 bg-slate-950/90 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/80">How I Create Value</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                How I Create Value
              </h2>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="rounded-3xl bg-slate-900/80 p-8 ring-1 ring-white/10 text-center">
                <h3 className="text-xl font-semibold text-white">Data Analytics</h3>
                <p className="mt-4 text-slate-300">Turn data into clear, actionable insight.</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-8 ring-1 ring-white/10 text-center">
                <h3 className="text-xl font-semibold text-white">AI / Automation</h3>
                <p className="mt-4 text-slate-300">Simplify workflows with practical automation.</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-8 ring-1 ring-white/10 text-center">
                <h3 className="text-xl font-semibold text-white">Business Transformation</h3>
                <p className="mt-4 text-slate-300">Align strategy, operations, and execution.</p>
              </div>
            </div>
          </div>
        </section>

        <JourneyTimeline />

        <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/80">Selected Projects</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Selected Projects
              </h2>
              <p className="mt-4 text-slate-400">
                Data, automation, and business-focused case studies.
              </p>
            </div>

            <div className="mt-12 space-y-16">
              {/* Data Analytics */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-8">  Data Analytics</h3>
                <div className="grid gap-8 xl:grid-cols-1">
                  <article className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/40 transition hover:-translate-y-1 hover:bg-slate-900/95">
                    <h3 className="mt-6 text-2xl font-semibold text-white">Tennis Match Collapse Prediction</h3>
                    <div className="mt-6 space-y-3 text-sm">
                      <div><strong className="text-white">Problem:</strong> Predict performance drops during matches</div>
                      <div><strong className="text-white">Solution:</strong> Built ML model using historical match data</div>
                      <div><strong className="text-white">Tools:</strong> Python, Machine Learning</div>
                      <div><strong className="text-white">Impact:</strong> Improved performance insights for coaching and planning</div>
                    </div>
                  </article>
                </div>
              </div>

              {/* AI / Automation */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-8">  AI / Automation</h3>
                <div className="grid gap-8 xl:grid-cols-1">
                  <article className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/40 transition hover:-translate-y-1 hover:bg-slate-900/95">
                    <h3 className="mt-6 text-2xl font-semibold text-white">TripAdvisor Sentiment Analysis (NLP)</h3>
                    <div className="mt-6 space-y-3 text-sm">
                      <div><strong className="text-white">Problem:</strong> Large volume of unstructured customer reviews</div>
                      <div><strong className="text-white">Solution:</strong> NLP pipeline to extract sentiment and key themes</div>
                      <div><strong className="text-white">Tools:</strong> Python, NLP</div>
                      <div><strong className="text-white">Impact:</strong> Enabled targeted service improvements</div>
                    </div>
                  </article>
                </div>
              </div>

              {/* Business / Strategy */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-8">  Business / Strategy</h3>
                <div className="grid gap-8 xl:grid-cols-1">
                  <article className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/40 transition hover:-translate-y-1 hover:bg-slate-900/95">
                    <h3 className="mt-6 text-2xl font-semibold text-white">Financial Forecasting Dashboard</h3>
                    <div className="mt-6 space-y-3 text-sm">
                      <div><strong className="text-white">Problem:</strong> Limited visibility for financial planning</div>
                      <div><strong className="text-white">Solution:</strong> Interactive dashboard with forecasting features</div>
                      <div><strong className="text-white">Tools:</strong> Power BI, SQL</div>
                      <div><strong className="text-white">Impact:</strong> Improved decision-making and planning speed</div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="border-t border-slate-800/70 bg-slate-950/90 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/80">Tools & Technologies</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Tools & Technologies
              </h2>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {[
                "Python",
                "SQL",
                "Machine Learning",
                "NLP",
                "Power BI",
              ].map((skill) => (
                <div key={skill} className="rounded-3xl bg-slate-900/80 p-6 text-center ring-1 ring-white/10">
                  <p className="text-lg font-semibold text-white">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-slate-900/90 p-10 shadow-2xl shadow-slate-950/40">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/80">Let's Connect</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Ready to drive your next transformation project.
                </h2>
                <p className="mt-6 text-slate-300 leading-7">
                  I'm open to consulting, data analytics, and digital transformation roles where I can leverage my expertise in AI, operations, and business strategy to deliver measurable impact. Let's discuss how we can work together.
                </p>
              </div>
              <div className="rounded-3xl bg-slate-950 p-8 text-center">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Email</p>
                <a href="mailto:xuejingcao@outlook.com" className="mt-4 inline-flex rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                  xuejingcao@outlook.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
