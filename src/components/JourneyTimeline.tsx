import { journeyData, JourneyItem } from '@/data/journey';

export default function JourneyTimeline() {
  const educationItems = journeyData.filter(item => item.type === 'education');
  const careerItems = journeyData.filter(item => item.type === 'career');

  return (
    <section id="journey" className="border-t border-slate-800/70 bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/80">Journey</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            My professional and academic path.
          </h2>
          <p className="mt-4 text-slate-400">
            From engineering roots to data analytics, here's how my journey has shaped my expertise in AI, NLP, and business intelligence.
          </p>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="mt-16 hidden lg:block">
          <div className="relative">
            {/* Horizontal center line */}
            <div className="absolute left-0 right-0 top-1/2 h-px bg-slate-700"></div>

            {/* Education items above */}
            <div className="relative mb-16">
              <h3 className="mb-8 text-center text-xl font-semibold text-slate-300">Education</h3>
              <div className="flex justify-between">
                {educationItems.map((item, index) => (
                  <div key={item.id} className="flex flex-col items-center">
                    {/* Card above */}
                    <div className="mb-4 w-64 rounded-lg bg-slate-900/80 p-4 ring-1 ring-white/10 shadow-lg">
                      <div className="text-sm text-slate-400">{item.period}</div>
                      <h4 className="mt-2 font-semibold text-white">{item.title}</h4>
                      <p className="text-sm text-slate-300">{item.subtitle}</p>
                      <p className="text-xs text-slate-500">{item.location}</p>
                    </div>
                    {/* Vertical connector */}
                    <div className="h-8 w-px bg-slate-600"></div>
                    {/* Circle on line */}
                    <div className="h-4 w-4 rounded-full bg-cyan-500 ring-2 ring-slate-950"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Career items below */}
            <div className="relative mt-16">
              <h3 className="mb-8 text-center text-xl font-semibold text-slate-300">Career</h3>
              <div className="flex justify-between">
                {careerItems.map((item, index) => (
                  <div key={item.id} className="flex flex-col items-center">
                    {/* Circle on line */}
                    <div className="h-4 w-4 rounded-full bg-cyan-500 ring-2 ring-slate-950"></div>
                    {/* Vertical connector */}
                    <div className="h-8 w-px bg-slate-600"></div>
                    {/* Card below */}
                    <div className="mt-4 w-64 rounded-lg bg-slate-900/80 p-4 ring-1 ring-white/10 shadow-lg">
                      <div className="text-sm text-slate-400">{item.period}</div>
                      <h4 className="mt-2 font-semibold text-white">{item.title}</h4>
                      <p className="text-sm text-slate-300">{item.subtitle}</p>
                      <p className="text-xs text-slate-500">{item.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="mt-16 lg:hidden">
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-center text-xl font-semibold text-slate-300">Education</h3>
              <div className="space-y-6">
                {educationItems.map((item, index) => (
                  <div key={item.id} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-4 w-4 rounded-full bg-cyan-500 ring-2 ring-slate-950"></div>
                      {index < educationItems.length - 1 && <div className="mt-2 h-16 w-px bg-slate-600"></div>}
                    </div>
                    <div className="flex-1 rounded-lg bg-slate-900/80 p-4 ring-1 ring-white/10 shadow-lg">
                      <div className="text-sm text-slate-400">{item.period}</div>
                      <h4 className="mt-2 font-semibold text-white">{item.title}</h4>
                      <p className="text-sm text-slate-300">{item.subtitle}</p>
                      <p className="text-xs text-slate-500">{item.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-center text-xl font-semibold text-slate-300">Career</h3>
              <div className="space-y-6">
                {careerItems.map((item, index) => (
                  <div key={item.id} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-4 w-4 rounded-full bg-cyan-500 ring-2 ring-slate-950"></div>
                      {index < careerItems.length - 1 && <div className="mt-2 h-16 w-px bg-slate-600"></div>}
                    </div>
                    <div className="flex-1 rounded-lg bg-slate-900/80 p-4 ring-1 ring-white/10 shadow-lg">
                      <div className="text-sm text-slate-400">{item.period}</div>
                      <h4 className="mt-2 font-semibold text-white">{item.title}</h4>
                      <p className="text-sm text-slate-300">{item.subtitle}</p>
                      <p className="text-xs text-slate-500">{item.location}</p>
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