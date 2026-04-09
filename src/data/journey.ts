export interface JourneyItem {
  id: string;
  type: 'education' | 'career';
  period: string;
  title: string;
  subtitle: string;
  location: string;
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
  },
  {
    id: 'edu2',
    type: 'education',
    period: '2024–2026',
    title: "Master's in Business Analytics & AI",
    subtitle: 'ESCP Business School',
    location: 'Paris, France & Berlin, Germany',
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