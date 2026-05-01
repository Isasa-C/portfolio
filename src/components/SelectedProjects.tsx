'use client';

import Link from 'next/link';
import { useState } from 'react';

type Project = {
  id: string;
  title: string;
  subtitle: string;
  hook?: string;
  metrics?: Array<{
    value: string;
    label: string;
    detailLines?: string[];
  }>;
  problem: string;
  solution: string;
  tools: string[];
  impact: string;
  values?: string[];
  tags: string[];
  demo: string | null;
};

type ProjectMetric = NonNullable<Project['metrics']>[number];

const projects: Project[] = [
  {
    id: 'repo-monitoring',
    title: 'Global Tax Repository Monitoring Dashboard',
    subtitle: 'Danone Internship - Power BI · Data Governance · Security',
    hook: '65 countries. 238,000 files. Thousands of folders. Zero visibility until this dashboard.',
    problem:
      'The global tax team’s SharePoint repository had grown to 238,000 files across 65 countries with no centralised visibility over who had access to what, who was editing which files, or whether permissions were correctly structured. When something looked wrong, the only path was raising an IT ticket and waiting. Governance reviews that should happen periodically were not happening because the effort to gather and cross-reference access data manually was prohibitive.',
    solution:
      'Built a Power BI monitoring dashboard that ingests permission data from IT through ServiceNow extracts and Power Automate pipelines, then transforms it into a live, navigable view of the full repository. The dashboard is organised around two primary user questions: for a given folder, who has access and at what level; and for a given user, which folders can they reach across all 65 countries. Row-Level Security was implemented so each regional manager sees only their scope, and a behaviour monitoring layer tracks file edits over time without requiring IT involvement.',
    tools: ['Power BI', 'Power Query', 'DAX', 'Row-Level Security', 'ServiceNow', 'Power Automate', 'SharePoint API'],
    impact:
      'Governance reviews that previously required days of manual IT cross-referencing now take under 20 minutes in the dashboard. The team can identify permission anomalies, spot overly broad access, and prepare audit-ready evidence without raising a single IT ticket. User behaviour monitoring gives managers visibility into file activity across the full 238,000-file repository, a capability that did not exist before.',
    values: [
      'Designed the product around governance questions rather than generic reporting.',
      'Made access visibility itself secure with Row-Level Security.',
      'Removed IT as the day-to-day bottleneck for investigation.',
    ],
    tags: ['Power BI', 'Governance', 'Dashboard'],
    demo: null,
  },
  {
    id: 'copilot-enablement',
    title: 'Copilot 365 & Copilot Studio Enablement',
    subtitle: 'Danone Internship - AI Agent Training',
    problem:
      'The tax team had access to Microsoft Copilot 365 but lacked the knowledge, confidence, and structured approach to integrate it into daily work. AI adoption was low despite tool availability.',
    solution:
      'Designed and delivered a two-level AI training programme. Level 1 introduced Copilot 365 with practical use cases tailored to tax workflows such as document summarization, email drafting, data analysis in Excel, and responsible usage guidance. Level 2 focuses on Copilot Studio for custom agent design, data source connections, and building tax-specific Q&A and process guidance agents.',
    tools: ['Microsoft Copilot 365', 'Copilot Studio', 'PowerPoint', 'SharePoint'],
    impact:
      'Successfully upskilled a non-technical tax team on AI tools. Training materials were developed for reuse across future cohorts, and the next phase is designed to embed custom AI agents directly into tax workflows.',
    values: [
      'Turned AI access into operational adoption instead of passive license ownership.',
      'Designed training around real tax workflows rather than generic AI demos.',
      'Created a reusable enablement structure for future teams.',
    ],
    tags: ['AI', 'Enablement', 'Change Management'],
    demo: null,
  },
  {
    id: 'catalina-customer-segmentation',
    title: 'Dynamic Coupon Generation with Applied GenAI',
    subtitle: 'Academic Project - Python · Machine Learning',
    hook:
      'Not all buyers are the same customer. This hackathon project built the framework to tell them apart — and tell each segment a different story.',
    metrics: [
      { value: '334K', label: 'Customers Modeled' },
      { value: '8', label: 'Segments × Tones' },
      { value: '4', label: 'Data Sources' },
      { value: 'Endorsed', label: 'By Marketing Lead' },
    ],
    problem:
      'A retail dataset spread across four sources — transaction receipts, SKU-level line items, consumer profiles, and store metadata — had no reliable way to separate loyal customers from dormant ones, or to identify who was most at risk of churn. Without meaningful segmentation, marketing spend stayed generic and recommendation logic could not personalize at scale. The brief: turn raw retail data into something a marketing team could actually act on, end to end, within a hackathon timebox.',
    solution:
      'Built a three-layer personalization pipeline: Segmentation. Joined four data sources and scored customers on Recency, Frequency, and Monetary value to produce 8 actionable segments using K-Means clustering — Loyal, High-Value, Occasional, At-Risk, Churned, and others. Prediction. Trained Random Forest and Gradient Boosting classifiers on SMOTE-balanced data, with GridSearchCV and nested cross-validation, so a new customer profile could be assigned to a segment in real time. The winning model was persisted with joblib for inference. Personalized delivery. Paired the segment prediction with a KNN recommender for product matches, then routed each segment through a Generative AI layer that produced segment-specific coupon copy — "Dedicated Item" tones for loyal customers, "Hurry, limited time" for occasional buyers, "Exclusive offer" for high-value, "We miss you" for churned. The output: a real-time, per-customer coupon message ready for automated delivery.',
    tools: ['Python', 'scikit-learn', 'Generative AI APIs', 'K-Means', 'Random Forest'],
    impact:
      'The strongest predictor of segment behavior was transaction frequency at 51.7% feature importance — ahead of basket value and quantity. The model did not just classify customers; it produced a concrete strategic insight for the marketing team: loyalty programs should optimize for visit frequency, not basket size. The hackathon marketing-manager judge validated the approach as production-viable, with particular interest in how the GenAI layer turned a static segmentation output into dynamic, deployable customer messaging — closing the loop between model inference and marketing action.',
    values: [
      'Owned the full pipeline from raw retail data to deployment-ready inference under hackathon time pressure.',
      'Connected three different ML approaches (unsupervised, supervised, recommender) into a single coherent system.',
      'Added the GenAI layer that turned descriptive analytics into a marketing-ready application.',
      'Translated model behavior into a concrete loyalty-program insight the marketing judge could act on.',
    ],
    tags: ['2025', 'Machine Learning', 'Segmentation', 'Retail'],
    demo: null,
  },
  {
    id: 'tripadvisor-sentiment-analysis',
    title: 'TripAdvisor Sentiment Analysis',
    subtitle: 'Academic Project - NLP',
    problem:
      'Online review platforms generate thousands of unstructured customer reviews that businesses struggle to interpret at scale, making it difficult to prioritize product or service improvements.',
    solution:
      'Applied NLP techniques to classify and analyze sentiment in TripAdvisor reviews. Built a text preprocessing pipeline and trained classification models to identify positive, neutral, and negative sentiment, then extracted topic clusters to surface actionable themes within each sentiment group.',
    tools: ['Python', 'NLTK / spaCy', 'scikit-learn', 'pandas', 'Matplotlib', 'TF-IDF', 'Logistic Regression'],
    impact:
      'Demonstrated that review sentiment clusters map to specific operational themes such as service speed, pricing, and ambiance, enabling more targeted response strategies than simple star-rating analysis.',
    tags: ['NLP', 'Sentiment Analysis', 'Text Mining', 'Python'],
    demo: null,
  },
  {
    id: 'ferrari-korea-market-entry',
    title: 'Luxury Sports Car Korean Market Entry',
    subtitle: 'Senior Project Engineer - Husky Technologies · APAC',
    hook:
      'A damaged relationship, a new market, a one-week window to get four countries to agree on a design. The VP noticed.',
    metrics: [
      { value: '4', label: 'Countries coordinated' },
      { value: '1 week', label: 'Approval window' },
      { value: 'VP letter', label: 'Recognition' },
      { value: 'CROSS-CULTURAL', label: 'Chinese · English · Korean' },
    ],
    problem:
      'Husky was trying to open the Korean automotive market while competing against entrenched local suppliers and dealing with a customer already disappointed by a previous Husky sales experience. Winning the order meant rebuilding trust and overcoming home-market advantages, but the harder challenge came after the order: extracting the right design specifications and coordinating a redesign across multiple countries at speed without letting misalignment break the relationship again.',
    solution:
      'Took direct ownership of the Korean account and worked in Korean, Chinese, and English to rebuild trust with the customer rather than sidestepping the prior disappointment. Traveled to Seoul with a design specialist to capture requirements in person, ensuring the technical conversation happened without translation loss. Then coordinated redesign and approval across engineering teams in China, India, and Luxembourg so the completed redesign could be presented back to the customer for approval within the week.',
    tools: ['Market entry', 'Cross-cultural stakeholder management', 'Design coordination', 'Trilingual communication', 'APAC account management'],
    impact:
      'The project was delivered successfully, repeat orders followed, and the global VP sent a letter of appreciation to the wider team recognizing the effort behind the market entry. The outcome showed that the relationship had not just been repaired but turned into a sustainable account in a difficult new market.',
    values: [
      'Recovered a damaged client relationship and turned it into repeat business.',
      'Used trilingual fluency as an operational capability, not a credential.',
      'Coordinated four engineering locations under a one-week deadline.',
    ],
    tags: ['2016-2023', 'Market Entry', 'Cross-Cultural', 'APAC'],
    demo: null,
  },
  {
    id: 'apple-delivery',
    title: 'Smartphone Brand High-Complexity Delivery',
    subtitle: 'Senior Project Engineer - Husky Technologies · APAC',
    hook:
      'Maximum requirements. Minimum budget. No room for a single late component. Every team watching.',
    metrics: [
      { value: 'On time', label: 'Lead time met' },
      { value: 'Repeat orders', label: 'Customer outcome' },
      { value: 'Multi-team', label: 'Alignment required' },
    ],
    problem:
      'A flagship smartphone client commissioned a custom injection moulding system with an unusually difficult combination of constraints: high technical complexity, an aggressive cost ceiling, and a lead time with almost no room for delay. The brief drew scrutiny from multiple internal teams at once, and failure would not only have affected delivery but also Husky’s reputation with a flagship APAC client.',
    solution:
      'Structured the project early around cross-functional alignment before the requirements were fully locked, bringing engineering, procurement, and production into the discussion from day one so risks surfaced early. Identified the components with the longest supplier lead times and initiated procurement before formal project sign-off, absorbing the biggest schedule risk while the rest of the specification was still being finalized.',
    tools: ['Project engineering', 'Stakeholder management', 'Supply chain coordination', 'Cross-functional delivery', 'Risk management'],
    impact:
      'The system was delivered within the required lead time and cost envelope despite the compressed schedule. The client placed multiple repeat orders afterward, validating both the delivery execution and the strength of the relationship created through the project.',
    values: [
      'Turned a vague, high-pressure brief into a delivery plan before pressure peaked.',
      'Protected the timeline with an early procurement judgment call.',
      'Measured success through repeat business, not just shipment.',
    ],
    tags: ['2016-2023', 'Engineering', 'Supply Chain', 'APAC'],
    demo: null,
  },
];

const projectMeta: Record<
  string,
  {
    label: string;
    description: string;
    imageTone: string;
    accent: string;
  }
> = {
  'repo-monitoring': {
    label: '2025 · AI · GOVERNANCE · POWER BI',
    description:
      'Built a governance dashboard that gave a 65-country tax team live visibility into access, permissions, and file behaviour across a 238,000-file repository.',
    imageTone:
      'bg-[radial-gradient(circle_at_top_left,rgba(56,184,248,0.28),transparent_36%),linear-gradient(135deg,#0f172a_0%,#0b2440_48%,#102d46_100%)]',
    accent: 'text-[#8ED8FF]',
  },
  'copilot-enablement': {
    label: '2025 · AI · ENABLEMENT · CHANGE',
    description:
      'Designed and delivered a Copilot adoption programme that moved a non-technical team from tool access to practical, repeatable daily use.',
    imageTone:
      'bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.22),transparent_34%),linear-gradient(135deg,#111827_0%,#0b3b5a_52%,#123c54_100%)]',
    accent: 'text-[#BFE7FF]',
  },
  'catalina-customer-segmentation': {
    label: '2025 · HACKATHON · GENERATIVE AI · RETAIL',
    description:
      'Built an end-to-end personalization pipeline for a 334K-customer retail dataset: RFM segmentation into 8 customer types, predictive scoring for product recommendations, and Generative AI to produce segment-specific coupon copy. The marketing manager judging the hackathon validated the approach as production-viable.',
    imageTone:
      'bg-[radial-gradient(circle_at_bottom_left,rgba(29,158,117,0.24),transparent_34%),linear-gradient(135deg,#0f172a_0%,#173528_46%,#21453d_100%)]',
    accent: 'text-[#7EE0C2]',
  },
  'tripadvisor-sentiment-analysis': {
    label: 'ACADEMIC PROJECT · NLP · TEXT MINING · PYTHON',
    description:
      'Used NLP to classify TripAdvisor review sentiment and surface topic clusters that point to actionable operational improvements.',
    imageTone:
      'bg-[radial-gradient(circle_at_top_left,rgba(255,214,102,0.2),transparent_32%),linear-gradient(135deg,#1a1a12_0%,#283618_44%,#455d2a_100%)]',
    accent: 'text-[#F4D58D]',
  },
  'ferrari-korea-market-entry': {
    label: '2016-2023 · MARKET ENTRY · APAC · DELIVERY',
    description:
      'Recovered a damaged client relationship, coordinated four countries in one week, and turned a difficult market entry into repeat business. Fluent in English, Mandarin, and Korean, used not as a credential, but as an operational capability that unlocks trust, specification accuracy, and cultural alignment on complex multi-country deliveries.',
    imageTone:
      'bg-[radial-gradient(circle_at_top_right,rgba(255,99,71,0.22),transparent_34%),linear-gradient(135deg,#140d0d_0%,#2d1414_50%,#3f1b1b_100%)]',
    accent: 'text-[#FFB4A3]',
  },
  'apple-delivery': {
    label: '2016-2023 · ENGINEERING · SUPPLY CHAIN · APAC',
    description:
      'Delivered a high-complexity custom system under severe cost and lead-time pressure by aligning teams early and protecting the critical path.',
    imageTone:
      'bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.16),transparent_34%),linear-gradient(135deg,#0f172a_0%,#1e293b_48%,#334155_100%)]',
    accent: 'text-[#E5EEF9]',
  },
};

export default function SelectedProjects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <section id="projects" className="scroll-mt-24 bg-[var(--surface-elevated)] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent-strong)]">
            PROJECTS
          </p>
          <p className="mt-4 text-lg leading-8 text-[var(--muted-strong)]">
            Six projects, one operating system: structure the chaos, ship the outcome.
          </p>
        </div>

        <div>
          {[
            { title: 'AI & Digital Transformation', items: projects.slice(0, 4) },
            { title: 'Operations & Engineering', items: projects.slice(4) },
          ].map((group) => (
            <section key={group.title}>
              <h3 className="category-header">
                {group.title}
              </h3>
              <div className="projects-row">
                {group.items.map((project) => {
            const meta = projectMeta[project.id];
            const isExpanded = expandedProject === project.id;
            const projectIndex = projects.findIndex((item) => item.id === project.id);
            const imageFirst = projectIndex % 2 === 0;
            const visualMetrics: ProjectMetric[] =
              project.metrics ?? project.tools.slice(0, 4).map((tool) => ({ value: tool, label: 'Focus' }));

            const visualPanel = (
              <div className={`relative min-h-[200px] ${meta.imageTone}`}>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0)_100%)]" />
                <div className="relative flex h-full min-h-[200px] flex-col justify-between p-8 text-white">
                  <div>
                    <p className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${meta.accent}`}>{meta.label}</p>
                    <h3 className="mt-4 max-w-md text-3xl font-extrabold uppercase leading-[1.02] tracking-[-0.05em]">
                      {project.title}
                    </h3>
                  </div>

                  <div className="grid max-w-xl gap-3 sm:grid-cols-4">
                    {visualMetrics.slice(0, 4).map((item) => (
                      <div key={`${project.id}-${item.label}-${item.value}`} className="border border-white/12 bg-white/6 p-4 backdrop-blur-sm">
                        <p className="text-lg font-semibold leading-none">{item.value}</p>
                        {item.detailLines?.length ? (
                          <div className="mt-2 space-y-1 text-[10px] uppercase tracking-[0.12em] text-white/68">
                            {item.detailLines.map((line) => (
                              <p key={`${project.id}-${item.value}-${line}`}>{line}</p>
                            ))}
                          </div>
                        ) : (
                          <p className="mt-2 text-[10px] uppercase tracking-[0.12em] text-white/68">{item.label}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );

            const contentPanel = (
              <div className="panel-light flex min-h-[200px] flex-col bg-white p-10 text-black dark:bg-[var(--surface)] dark:text-[var(--headline)]">
                <div className="flex flex-wrap gap-2">
                  {meta.label.split(' · ').map((item) => (
                    <span
                      key={`${project.id}-${item}`}
                      className="border border-[rgba(0,0,0,0.1)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.1em] text-[#888] dark:border-[color:var(--border)] dark:text-[var(--muted)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <p className="mt-7 max-w-xl text-sm leading-[1.7] text-[#555] dark:text-[var(--muted-strong)]">
                  {meta.description}
                </p>

                {project.id === 'catalina-customer-segmentation' ? (
                  <p className="mt-4 text-xs font-medium leading-6 text-[#555] dark:text-[var(--muted-strong)]">
                    <span className="font-semibold text-black dark:text-[var(--headline)]">Built with:</span>{' '}
                    {project.tools.join(' · ')}
                  </p>
                ) : null}

                <div className="mt-auto pt-10">
                  {project.id === 'catalina-customer-segmentation' ? (
                    <Link
                      href="/projects/catalina-customer-segmentation"
                      className="text-xs font-semibold uppercase tracking-[0.08em] text-black underline underline-offset-4 transition hover:text-[var(--accent-strong)] dark:text-[var(--headline)]"
                    >
                      View Full Case Study →
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setExpandedProject(isExpanded ? null : project.id)}
                      className="text-xs font-semibold uppercase tracking-[0.08em] text-black underline underline-offset-4 transition hover:text-[var(--accent-strong)] dark:text-[var(--headline)]"
                    >
                      {isExpanded ? 'Hide Case Study ↑' : 'View Case Study →'}
                    </button>
                  )}
                </div>
              </div>
            );

            const leftPanel = imageFirst ? visualPanel : contentPanel;
            const rightPanel = imageFirst ? contentPanel : visualPanel;
            const topPanel = imageFirst ? leftPanel : rightPanel;
            const bottomPanel = imageFirst ? rightPanel : leftPanel;

            return (
              <article
                key={project.id}
                className="project-card overflow-hidden rounded-[20px] border border-[rgba(0,0,0,0.08)] bg-transparent dark:border-[color:var(--border)]"
              >
                <div className="grid min-h-[400px] grid-rows-2">
                  {topPanel}
                  {bottomPanel}
                </div>

                {isExpanded ? (
                  <div className="border-t border-[rgba(0,0,0,0.08)] bg-[var(--surface)] px-6 py-6 dark:border-[color:var(--border)] sm:px-10 sm:py-8">
                    {project.hook ? (
                      <p className="max-w-5xl text-lg font-medium leading-8 text-[var(--headline)]">{project.hook}</p>
                    ) : null}

                    <div className="mt-6 grid gap-8">
                      <div className="space-y-6">
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--muted)]">Problem</p>
                          <p className="mt-3 text-sm leading-7 text-[var(--muted-strong)]">{project.problem}</p>
                        </div>

                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--muted)]">Solution</p>
                          <p className="mt-3 text-sm leading-7 text-[var(--muted-strong)]">{project.solution}</p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        {project.metrics?.length && project.id !== 'catalina-customer-segmentation' ? (
                          <div className="grid gap-3 sm:grid-cols-2">
                            {project.metrics.map((metric) => (
                              <div key={`${project.id}-${metric.label}`} className="border border-[color:var(--border)] bg-[var(--surface-soft)] px-4 py-4">
                                <p className="text-2xl font-semibold text-[var(--headline)]">{metric.value}</p>
                                {metric.detailLines?.length ? (
                                  <div className="mt-2 space-y-1 text-[11px] uppercase tracking-[0.1em] text-[var(--muted)]">
                                    {metric.detailLines.map((line) => (
                                      <p key={`${project.id}-${metric.value}-${line}`}>{line}</p>
                                    ))}
                                  </div>
                                ) : (
                                  <p className="mt-1 text-[11px] uppercase tracking-[0.1em] text-[var(--muted)]">{metric.label}</p>
                                )}
                              </div>
                            ))}
                          </div>
                        ) : null}

                        {project.id !== 'catalina-customer-segmentation' ? (
                          <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--muted)]">Tools & Technologies</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                              {project.tools.map((tool) => (
                                <span
                                  key={tool}
                                  className="border border-[color:var(--border)] bg-[var(--surface-soft)] px-3 py-1.5 text-xs font-medium text-[var(--muted-strong)]"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                        ) : null}

                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--muted)]">Impact</p>
                          <p className="mt-3 text-sm leading-7 text-[var(--muted-strong)]">{project.impact}</p>
                        </div>

                        {project.values?.length ? (
                          <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--muted)]">
                              What I Brought To This
                            </p>
                            <div className="mt-3 space-y-3">
                              {project.values.map((value) => (
                                <div key={value} className="border border-[color:var(--border)] bg-[var(--surface-soft)] px-4 py-4">
                                  <p className="text-sm leading-7 text-[var(--muted-strong)]">{value}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ) : null}
              </article>
            );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
