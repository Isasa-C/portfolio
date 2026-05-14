'use client';

import { useState } from 'react';

type WorkProject = {
  number: string;
  title: string;
  detail: string;
  tags: string[];
  visual: 'governance' | 'copilot' | 'scorecard' | 'coupon' | 'portfolio' | 'apac';
};

const workProjects: WorkProject[] = [
  {
    number: '01',
    title: 'Global Tax Governance Dashboard',
    detail: 'Power BI monitoring system for SharePoint governance and access visibility.',
    tags: ['Power BI', 'SharePoint', 'Governance visibility'],
    visual: 'governance',
  },
  {
    number: '02',
    title: 'Copilot Adoption & AI Agent Enablement',
    detail: 'Practical GenAI workflows and AI-agent concepts for tax and finance teams.',
    tags: ['Copilot 365', 'Copilot Studio', 'GenAI adoption'],
    visual: 'copilot',
  },
  {
    number: '03',
    title: 'Digital Maturity Scorecard',
    detail: 'Structured maturity framework for stakeholder alignment and benchmarking.',
    tags: ['Digital strategy', 'Benchmarking', 'Stakeholder alignment'],
    visual: 'scorecard',
  },
  {
    number: '04',
    title: 'Dynamic Coupon GenAI Prototype',
    detail: 'AI prototype combining customer segmentation, predictive scoring, and GenAI copy.',
    tags: ['Python', 'GenAI', 'Personalization'],
    visual: 'coupon',
  },
  {
    number: '05',
    title: 'Personal Portfolio System',
    detail: 'Self-built interactive product story using AI-assisted front-end development.',
    tags: ['React', 'UX storytelling', 'AI-assisted coding'],
    visual: 'portfolio',
  },
  {
    number: '06',
    title: 'APAC Client Recovery Playbook',
    detail: 'Cross-border coordination system for client recovery and stakeholder alignment.',
    tags: ['APAC', 'Trilingual coordination', 'Stakeholder recovery'],
    visual: 'apac',
  },
];

function AbstractPreview({ visual }: { visual: WorkProject['visual'] }) {
  return (
    <div className={`work-preview-art work-preview-${visual}`} aria-hidden="true">
      <span className="work-art-grid" />
      <span className="work-art-node work-art-node-a" />
      <span className="work-art-node work-art-node-b" />
      <span className="work-art-node work-art-node-c" />
      <span className="work-art-line work-art-line-a" />
      <span className="work-art-line work-art-line-b" />
      <span className="work-art-card work-art-card-a" />
      <span className="work-art-card work-art-card-b" />
      <span className="work-art-card work-art-card-c" />
    </div>
  );
}

function ProjectPreview({ project, mobile = false }: { project: WorkProject; mobile?: boolean }) {
  return (
    <div key={project.title} className={mobile ? 'work-preview work-preview-mobile' : 'work-preview'}>
      <div className="work-preview-media">
        <AbstractPreview visual={project.visual} />
      </div>
      <p className="work-preview-detail">{project.detail}</p>
      <p className="work-preview-tags">{project.tags.join(' · ')}</p>
    </div>
  );
}

export default function SelectedProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = workProjects[activeIndex];

  return (
    <section id="projects" className="work-section project-section scroll-mt-24 px-4 py-14 sm:px-6 lg:py-20">
      <div className="work-rail content-rail">
        <header className="work-header">
          <p className="work-label">WORK</p>
          <div>
            <h2 className="work-heading">Selected systems I’ve built</h2>
            <p className="work-subtitle">
              A few examples of turning ambiguous needs into dashboards, AI workflows, prototypes, and operating systems.
            </p>
          </div>
        </header>

        <div className="work-split">
          <div className="work-list" aria-label="Selected systems">
            {workProjects.map((project, index) => {
              const isActive = index === activeIndex;

              return (
                <div key={project.title} className="work-row-wrap">
                  <button
                    type="button"
                    className={`work-row ${isActive ? 'is-active' : ''}`}
                    aria-pressed={isActive}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                  >
                    <span className="work-row-number">{project.number}</span>
                    <span className="work-row-title">{project.title}</span>
                  </button>

                  {isActive ? (
                    <div className="work-row-preview">
                      <ProjectPreview key={`${project.title}-mobile`} project={project} mobile />
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>

          <aside className="work-preview-column" aria-live="polite">
            <ProjectPreview key={activeProject.title} project={activeProject} />
          </aside>
        </div>
      </div>
    </section>
  );
}
