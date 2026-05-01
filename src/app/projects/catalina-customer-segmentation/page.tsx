import type { Metadata } from 'next';
import { Fraunces } from 'next/font/google';
import Link from 'next/link';
import styles from './page.module.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
});

const tools = [
  { name: 'Python', role: 'Pipeline core', glyph: 'Py', tone: styles.python },
  { name: 'scikit-learn', role: 'ML stack', glyph: 'SK', tone: styles.sklearn },
  { name: 'GenAI APIs', role: 'Personalization', glyph: 'AI', tone: styles.genai },
  { name: 'K-Means', role: '8 segments', glyph: 'K', tone: styles.kmeans },
  { name: 'Random Forest', role: 'Classification', glyph: 'RF', tone: styles.rf },
  { name: 'SMOTE', role: 'Class balance', glyph: 'S', tone: styles.smote },
  { name: 'KNN', role: 'Recommender', glyph: 'N', tone: styles.knn },
];

export const metadata: Metadata = {
  title: 'Dynamic Coupon Generation | Xuejing CAO',
  description:
    'Case study for a hackathon project using retail customer segmentation, machine learning, and GenAI coupon personalization.',
};

export default function CatalinaCustomerSegmentationPage() {
  return (
    <main className={`${styles.casePage} ${fraunces.variable}`}>
      <nav className={styles.topNav} aria-label="Case study navigation">
        <Link href="/#projects" className={styles.navBack}>
          ← All Projects
        </Link>
        <div className={styles.navLinks}>
          <Link href="/#journey">Journey</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#interests">Interests</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      </nav>

      <header className={styles.heroHeader}>
        <p className={styles.breadcrumb}>2025 · Hackathon · Generative AI · Retail</p>
        <h1 className={styles.caseTitle}>Dynamic Coupon Generation with Applied GenAI</h1>
        <p className={styles.caseTagline}>
          Not all buyers are the same customer. This hackathon project built the framework to tell them apart — and
          tell each segment a different story.
        </p>
      </header>

      <section className={styles.splitHero} aria-label="Project summary">
        <div className={styles.visualPanel}>
          <div className={styles.visualContent}>
            <div className={styles.bigStat}>334K</div>
            <div className={styles.bigStatLabel}>Customers Modeled</div>
            <div className={styles.statRow}>
              <div>
                <div className={styles.statValue}>8</div>
                <div className={styles.statLabel}>Segments × Tones</div>
              </div>
              <div>
                <div className={styles.statValue}>4</div>
                <div className={styles.statLabel}>Data Sources</div>
              </div>
              <div>
                <div className={styles.statValue}>★</div>
                <div className={styles.statLabel}>Endorsed</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.infoPanel}>
          <p className={styles.infoEyebrow}>Project at a glance</p>
          <div className={styles.infoSection}>
            <h2>Context</h2>
            <p>
              Hackathon brief: turn raw retail data into something a marketing team could act on, end-to-end, within a
              tight timebox.
            </p>
          </div>
          <div className={styles.infoSection}>
            <h2>Role</h2>
            <p>
              Owned the full pipeline — from data integration through model selection to the GenAI personalization
              layer that produced segment-specific coupon copy.
            </p>
          </div>
          <div className={styles.infoSection}>
            <h2>Validation</h2>
            <p>
              The hackathon&apos;s marketing-manager judge endorsed the approach as production-viable, citing the closed
              loop between segmentation and dynamic customer messaging.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.toolsSection}>
        <h2 className={styles.sectionLabel}>Tools &amp; Methods</h2>
        <div className={styles.toolsGrid}>
          {tools.map((tool) => (
            <div className={styles.toolTile} key={tool.name}>
              <div className={`${styles.toolIcon} ${tool.tone}`}>
                <div className={styles.toolGlyph}>{tool.glyph}</div>
              </div>
              <div className={styles.toolName}>{tool.name}</div>
              <div className={styles.toolRole}>{tool.role}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.stepsSection}>
        <div className={styles.stepsContainer}>
          <h2 className={styles.sectionLabel}>The Walkthrough</h2>

          <article className={styles.step}>
            <div className={styles.stepNumber}>01</div>
            <div className={styles.stepContent}>
              <h3>The Problem</h3>
              <p>
                A retail dataset spread across four sources — transaction receipts, SKU-level line items, consumer
                profiles, and store metadata — had no reliable way to separate loyal customers from dormant ones, or to
                identify who was most at risk of churn.
              </p>
              <p>
                Without meaningful segmentation, marketing spend stayed generic and recommendation logic could not
                personalize at scale. The brief: turn raw retail data into something a marketing team could actually
                act on, end-to-end, within a hackathon timebox.
              </p>
            </div>
          </article>

          <article className={styles.step}>
            <div className={styles.stepNumber}>02</div>
            <div className={styles.stepContent}>
              <h3>Segmentation</h3>
              <p>
                Joined four data sources and scored customers on Recency, Frequency, and Monetary value — the classic
                RFM model — then applied K-Means clustering to produce 8 actionable segments.
              </p>
              <ul>
                <li>
                  <strong>Loyal · High-Value · Occasional · At-Risk · Churned</strong> — and three more, each with
                  distinct purchasing rhythms
                </li>
                <li>
                  The strongest predictor of segment behavior was{' '}
                  <strong>transaction frequency at 51.7% feature importance</strong>, ahead of basket value and
                  quantity
                </li>
              </ul>
              <div className={styles.stepCallout}>
                <div className={styles.stepCalloutLabel}>Strategic insight</div>
                <p>
                  Loyalty programs should optimize for visit frequency, not basket size. The model didn&apos;t just
                  classify — it produced a concrete marketing strategy.
                </p>
              </div>
            </div>
          </article>

          <article className={styles.step}>
            <div className={styles.stepNumber}>03</div>
            <div className={styles.stepContent}>
              <h3>Prediction</h3>
              <p>
                Trained Random Forest and Gradient Boosting classifiers on SMOTE-balanced data, with GridSearchCV and
                nested cross-validation, so a new customer profile could be assigned to a segment in real time. The
                winning model was persisted with joblib for inference.
              </p>
            </div>
          </article>

          <article className={styles.step}>
            <div className={styles.stepNumber}>04</div>
            <div className={styles.stepContent}>
              <h3>Personalized Delivery</h3>
              <p>
                Paired the segment prediction with a KNN recommender for product matches, then routed each segment
                through a Generative AI layer that produced segment-specific coupon copy.
              </p>
              <ul>
                <li>
                  <strong>Loyal customers</strong> → &ldquo;Dedicated item&rdquo; tone
                </li>
                <li>
                  <strong>Occasional customers</strong> → &ldquo;Hurry, limited time&rdquo; tone
                </li>
                <li>
                  <strong>High-value customers</strong> → &ldquo;Exclusive offer&rdquo; tone
                </li>
                <li>
                  <strong>Churned customers</strong> → &ldquo;We miss you&rdquo; tone
                </li>
              </ul>
              <p>
                The output: a real-time, per-customer coupon message ready for automated delivery — closing the loop
                between model inference and marketing action.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.impactSection}>
        <p className={styles.impactEyebrow}>The Impact</p>
        <h2 className={styles.impactHeadline}>
          From <span className={styles.accentText}>descriptive analytics</span> to a{' '}
          <span className={styles.accentText}>marketing-ready application</span> — within a hackathon timebox.
        </h2>

        <div className={styles.impactGrid}>
          <div className={styles.impactTile}>
            <div className={styles.impactValue}>51.7%</div>
            <div className={styles.impactLabel}>
              Top feature importance — transaction frequency, ahead of spend and quantity
            </div>
          </div>
          <div className={styles.impactTile}>
            <div className={styles.impactValue}>8 × 4</div>
            <div className={styles.impactLabel}>Eight segments, each with a distinct GenAI-generated message tone</div>
          </div>
          <div className={styles.impactTile}>
            <div className={styles.impactValue}>★</div>
            <div className={styles.impactLabel}>
              Endorsed by the hackathon marketing-manager judge as production-viable
            </div>
          </div>
        </div>
      </section>

      <section className={styles.broughtSection}>
        <div className={styles.broughtContainer}>
          <h2 className={styles.sectionLabel}>What I Brought To This</h2>
          <div className={styles.broughtGrid}>
            <div className={styles.broughtTile}>
              <h3>Pipeline ownership under pressure</h3>
              <p>
                Owned the full pipeline from raw retail data to deployment-ready inference within hackathon time
                constraints — no handoffs, no gaps.
              </p>
            </div>
            <div className={styles.broughtTile}>
              <h3>Three ML approaches, one system</h3>
              <p>
                Connected unsupervised clustering, supervised classification, and a recommender into a single coherent
                application — not three disconnected experiments.
              </p>
            </div>
            <div className={styles.broughtTile}>
              <h3>From model output to marketing strategy</h3>
              <p>
                Translated model behavior into a concrete loyalty-program insight the marketing judge could act on. The
                work didn&apos;t end at the classifier.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        Xuejing CAO · Paris · <Link href="/#projects">View next case study →</Link>
      </footer>

      <div className={styles.floatingBar} aria-label="Case study actions">
        <div className={styles.floatingMeta}>Case 3 of 6</div>
        <Link href="/#projects" className={styles.navButton}>
          ← Previous
        </Link>
        <Link href="/#projects" className={styles.navButton}>
          Save
        </Link>
        <Link href="/#projects" className={styles.navButton}>
          Next →
        </Link>
        <Link href="/#contact" className={styles.ctaButton}>
          Contact Me
        </Link>
      </div>
    </main>
  );
}
