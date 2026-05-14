export interface JourneyProjectMetric {
  value: string;
  label: string;
}

export interface JourneyProjectApproachStep {
  title: string;
  body: string;
  success?: boolean;
}

export interface JourneyProject {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  hook: string;
  summary: string;
  metrics: JourneyProjectMetric[];
  problem: string;
  context?: string;
  approach: JourneyProjectApproachStep[];
  recognition?: string;
  demonstrates: string[];
}

export interface JourneyItem {
  id: string;
  type: 'education' | 'career';
  period: string;
  title: string;
  subtitle: string;
  location: string;
  detail?: string;
  projects?: JourneyProject[];
  featured?: boolean;
}

export const journeyData: JourneyItem[] = [
  // Education (above the line)
  {
    id: 'edu1',
    type: 'education',
    period: '2009–2013',
    title: "Bachelor's in Financial Engineering",
    subtitle: 'Donghua University',
    location: 'Shanghai, China',
    featured: true,
  },
  {
    id: 'edu2',
    type: 'education',
    period: '2023–2026',
    title: "Master's in Business Analytics & AI",
    subtitle: 'ESCP Business School',
    location: 'Paris, France & Berlin, Germany',
    featured: true,
  },
  // Career (below the line)
  {
    id: 'career1',
    type: 'career',
    period: 'Jul 2012–Oct 2012',
    title: 'Data Analyst Intern',
    subtitle: 'SKINFOOD',
    location: 'Shanghai, China',
  },
  {
    id: 'career2',
    type: 'career',
    period: 'Mar 2013–May 2015',
    title: 'Spare Parts Coordinator',
    subtitle: 'Husky Technologies',
    location: 'Shanghai, China',
  },
  {
    id: 'career3',
    type: 'career',
    period: 'Jun 2015–Mar 2023',
    title: 'Senior Project Engineer',
    subtitle: 'Husky Technologies',
    location: 'Shenzhen, China',
    projects: [
      {
        id: 'husky-smartphone',
        title: 'Project: A leading smartphone brand',
        subtitle: 'Senior Project Engineer · Husky Technologies · APAC',
        tags: ['Project engineering', 'Stakeholder management', 'Supply chain', 'Cross-functional delivery', 'APAC'],
        hook: 'Maximum requirements. Minimum budget. No room for a single late component. Every team watching.',
        summary:
          'A leading smartphone brand demanded a high-specification custom system at an unusually tight cost and lead time — a combination that put every internal team on edge from day one. By getting in front of the project early, aligning stakeholders before pressure built, and pre-ordering long-lead components before formal sign-off, the delivery landed on time. The result: the client placed multiple repeat orders.',
        metrics: [
          { value: 'Multi-team', label: 'Stakeholders aligned' },
          { value: 'On time', label: 'Compressed lead time met' },
          { value: 'Repeat orders', label: 'Customer outcome' },
        ],
        problem:
          'The client placed a brief for a custom injection moulding system with a demanding specification — high technical complexity, aggressive cost ceiling, and a lead time that left no margin for delays. The combination drew scrutiny from multiple internal teams simultaneously, each tracking whether their function could deliver within the constraints.',
        approach: [
          {
            title: 'Early cross-functional alignment',
            body: 'Engaged engineering, procurement, and production teams from the first day of the brief — before requirements were fully locked — so every team understood the constraints and had time to raise blockers early rather than late.',
          },
          {
            title: 'Pre-ordering long-lead components',
            body: 'Identified the components with the longest supplier lead times and initiated procurement ahead of formal project sign-off. This absorbed the most critical schedule risk before it could compound, protecting the delivery date even as other specs were still being finalised.',
          },
          {
            title: 'Continuous stakeholder management',
            body: 'Maintained visibility across all teams throughout delivery, catching dependency issues before they became delays.',
          },
          {
            title: 'On-time delivery',
            body: 'System delivered within the required lead time and cost envelope. Client placed multiple repeat orders.',
            success: true,
          },
        ],
        demonstrates: [
          'Translating a high-pressure brief into a structured delivery plan before the pressure peaks',
          'Supply chain foresight — pre-ordering before sign-off requires judgment and the authority to act on it',
          'Multi-team coordination under scrutiny, without losing momentum',
          'Repeat business as the measure of delivery, not just on-time completion',
        ],
      },
      {
        id: 'husky-sportscar',
        title: 'Project: A luxury European sports car brand',
        subtitle: 'Senior Project Engineer · Husky Technologies · APAC',
        tags: ['Market entry', 'Cross-cultural', 'Korean / Chinese / English', 'Design coordination', 'Stakeholder recovery', 'APAC'],
        hook: 'A damaged relationship, a new market, a one-week window to get four countries to agree on a design. The VP noticed.',
        summary:
          'Husky was entering the Korean automotive market — competing against entrenched local suppliers — with the added challenge of a client disappointed by a previous sales experience. The project required trilingual coordination (Korean, Chinese, English), a field trip to Seoul to extract design specs in person, and managing redesign sign-off across engineers in China, India, and Luxembourg — all within a week. Outcome: order secured, repeat orders followed, and a global VP appreciation letter sent to the entire team.',
        metrics: [
          { value: '4 countries', label: 'Design team coordinated' },
          { value: '1 week', label: 'Design approval window' },
          { value: 'VP recognition', label: 'Global appreciation letter' },
        ],
        context:
          'Husky Technologies — a Canadian global leader in injection moulding — was attempting to open the Korean automotive market, competing against established local suppliers. The strategy involved pairing a project engineer who could operate fluently in Korean, Chinese, and English to bridge the cultural and technical gap. The client had been let down by a previous Husky salesperson and carried real scepticism into the engagement.',
        problem:
          'Winning the initial order required rebuilding trust with a disappointed client while simultaneously competing on technical merit against local alternatives. But winning the order was only the beginning — what followed was the harder part.',
        approach: [
          {
            title: 'Rebuilding the client relationship',
            body: 'Took direct ownership of the Korean account. Operating in Korean and Chinese, addressed the legacy disappointment head-on — establishing personal credibility as the bridge between a Canadian company and a Korean client.',
          },
          {
            title: 'On-site design specification — Seoul',
            body: 'After securing the order, flew to Korea with a design specialist to meet the client in person and extract precise design requirements. Conducting the session in Korean ensured nothing was lost in translation and signalled a level of commitment the client had not seen from Husky before.',
          },
          {
            title: 'Cross-border design coordination — 4 countries, 1 week',
            body: 'Coordinated a full redesign with engineers in China, India, and Luxembourg simultaneously — managing time zones, technical language barriers, and conflicting design priorities. The completed redesign was presented to the Korean client the following day. Full sign-off achieved within the week.',
          },
          {
            title: 'Outcome',
            body: 'Project delivered successfully. Client placed repeat orders. The global VP sent a letter of appreciation to the full team globally, specifically recognising the cross-cultural coordination that made the market entry possible.',
            success: true,
          },
        ],
        recognition:
          'VP appreciation letter sent globally, specifically calling out the personal efforts that turned a damaged relationship into a successful market entry.',
        demonstrates: [
          'Stakeholder recovery — inheriting a damaged client relationship and turning it into a long-term account',
          'Trilingual fluency as a delivery mechanism, not a credential — the Korean conversation is what unlocked the specification and the trust',
          'Cross-border coordination under time pressure: four engineering locations, one week, zero misalignment',
          'Understanding that winning an order is the beginning of the work, not the end of it',
        ],
      },
    ],
  },
  {
    id: 'career4',
    type: 'career',
    period: 'Sep 2025–Dec 2025',
    title: 'Finance & Tax Digitalization Intern',
    subtitle: 'Danone',
    location: 'Paris, France',
  },
];
