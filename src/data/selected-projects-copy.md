# Selected Projects Copy

Use this file to revise project text in one place before updating the UI.

## Tennis Match Collapse Prediction
- Subtitle: `MSc Thesis - ESCP Business School · 2025`
- Hook: `The scoreboard tells you who's winning. It doesn't tell you who's about to fall apart. This model does.`
- Problem: `Match winner models are common in tennis, but they do not answer a more conditional question: given a player is already leading, why do they still lose? Collapse, defined as losing after winning the first set in best-of-three or leading 2-0 in best-of-five, occurs in roughly 18-20% of professional matches, yet no prior model had tackled this as a standalone prediction problem.`
- Solution: `Built a supervised learning framework on 48,997 ATP and WTA singles matches from 2015 to 2024, engineering 32 strictly pre-match features across ranking gaps, serve quality, recent form, fatigue, head-to-head history, and contextual match variables. Compared Logistic Regression, Random Forest, Gradient Boosting, and an ensemble under temporal validation: training on seasons through 2022, tuning on 2023, and testing on unseen 2024 matches. Gradient Boosting delivered the strongest performance, and SHAP analysis was used to interpret what actually drives collapse risk.`
- Impact: `The best model achieved an AUC of 0.64 on the unseen 2024 test set, about 14% above random on a problem driven by in-match psychological dynamics that pre-match data cannot fully capture. The most important predictors were ace difference, double-fault difference, and ranking difference, each showing a U-shaped pattern: collapse risk is highest when players are closely matched, not when one player is clearly stronger. This reframed collapse as a competitive balance problem rather than a fatigue story, with applications for coaching, broadcasting, tournament scheduling, and other domains where reversals after early advantage matter.`

## Global Tax Repository Monitoring Dashboard
- Subtitle: `Danone Internship - Power BI · Data Governance · Security`
- Hook: `65 countries. 238,000 files. Thousands of folders. Zero visibility until this dashboard.`
- Problem: `The global tax team’s SharePoint repository had grown to 238,000 files across 65 countries with no centralised visibility over who had access to what, who was editing which files, or whether permissions were correctly structured. When something looked wrong, the only path was raising an IT ticket and waiting. Governance reviews that should happen periodically were not happening because the effort to gather and cross-reference access data manually was prohibitive.`
- Solution: `Built a Power BI monitoring dashboard that ingests permission data from IT through ServiceNow extracts and Power Automate pipelines, then transforms it into a live, navigable view of the full repository. The dashboard is organised around two primary user questions: for a given folder, who has access and at what level; and for a given user, which folders can they reach across all 65 countries. Row-Level Security was implemented so each regional manager sees only their scope, and a behaviour monitoring layer tracks file edits over time without requiring IT involvement.`
- Impact: `Governance reviews that previously required days of manual IT cross-referencing now take under 20 minutes in the dashboard. The team can identify permission anomalies, spot overly broad access, and prepare audit-ready evidence without raising a single IT ticket. User behaviour monitoring gives managers visibility into file activity across the full 238,000-file repository, a capability that did not exist before.`

## Global Tax Process & Digitalization Survey
- Subtitle: `Danone Internship - Product Design · Excel · Data Architecture`
- Hook: `Two senior stakeholders. Two conflicting briefs. One instrument that answered both and produced a structured dataset on arrival.`
- Problem: `The Deputy VP of Global Tax needed a process documentation tool capturing RACI ownership across 75+ tax activities globally. The Tax Digitalization Director needed a maturity scorecard measuring automation levels by country and process. Running two separate instruments would have meant double the respondent burden, inconsistent data, and no way to join process ownership with automation maturity in a single analysis.`
- Solution: `I diagnosed that both briefs were the same data collection problem asked from two angles, and designed a unified Excel instrument. I evaluated Microsoft Forms and Visio against the requirements before selecting Excel as the best architecture. The final tool combined a validated taxonomy of 75+ activities, row-level capture of automation across four dimensions, live percentage validation, and a strategic layer for organisational constraints and priorities.`
- Impact: `The instrument produces a directly analysable matrix with no pivoting, no text cleaning, and no post-processing. Every row is a ready-made data point joinable across region, tax type, sub-process, ownership, and automation profile.`

## Copilot 365 & Copilot Studio Enablement
- Subtitle: `Danone Internship - AI Agent Training`
- Problem: `The tax team had access to Microsoft Copilot 365 but lacked the knowledge, confidence, and structured approach to integrate it into daily work. AI adoption was low despite tool availability.`
- Solution: `Designed and delivered a two-level AI training programme. Level 1 introduced Copilot 365 with practical use cases tailored to tax workflows such as document summarization, email drafting, data analysis in Excel, and responsible usage guidance. Level 2 focuses on Copilot Studio for custom agent design, data source connections, and building tax-specific Q&A and process guidance agents.`
- Impact: `Successfully upskilled a non-technical tax team on AI tools. Training materials were developed for reuse across future cohorts, and the next phase is designed to embed custom AI agents directly into tax workflows.`

## OneDrive to SharePoint Migration - Change Management
- Subtitle: `Danone Internship - Behaviour Change · Video · Adoption Strategy`
- Hook: `The tool was ready. The team wasn't. The real product wasn't SharePoint, it was the habit change.`
- Problem: `The global tax team had been storing files in OneDrive for years: fragmented, unshared, and invisible to colleagues. SharePoint was available, set up, and governed, but adoption was near zero. The barrier was not technical, it was behavioural. Tax professionals had no reason to change a habit that worked for them individually, even if it created problems for the team as a whole. New joiners had nowhere to learn, and managers had no scalable way to explain the system without repeated one-to-one effort.`
- Solution: `I reframed the problem as a change management initiative rather than a training task. The first move was a VP-level alignment meeting to establish the shared purpose, why SharePoint mattered for the team and not just for IT compliance. I then designed a short Canva video walkthrough that explained the why and the how in sequence. It was built for three audiences at once: sceptics who needed the reason first, newcomers who needed self-service onboarding, and managers who needed a reusable tool instead of repeating explanations.`
- Impact: `New joiners can now onboard to the repository structure independently without requiring a manager to explain the system. The video replaced an ongoing, repetitive explanation burden with a single reusable asset. Sceptical adoption was addressed proactively rather than through mandate because the VP alignment gave team members a credible answer to 'why are we doing this?' before they had to ask.`

## TripAdvisor Sentiment Analysis
- Subtitle: `Academic Project - NLP`
- Problem: `Online review platforms generate thousands of unstructured customer reviews that businesses struggle to interpret at scale, making it difficult to prioritize product or service improvements.`
- Solution: `Applied NLP techniques to classify and analyze sentiment in TripAdvisor reviews. Built a text preprocessing pipeline and trained classification models to identify positive, neutral, and negative sentiment, then extracted topic clusters to surface actionable themes within each sentiment group.`
- Impact: `Demonstrated that review sentiment clusters map to specific operational themes such as service speed, pricing, and ambiance, enabling more targeted response strategies than simple star-rating analysis.`

## Catalina Customer Segmentation
- Subtitle: `Academic Project - Python · Machine Learning`
- Hook: `Not all buyers are the same customer. This project built the framework to tell them apart and recommend to each one differently.`
- Problem: `A retail dataset spread across four sources, including transaction receipts, SKU-level line items, consumer profiles, and store metadata, had no reliable way to distinguish high-value loyal customers from dormant ones or identify who was most at risk of churn. Without meaningful segmentation, marketing spend could not be targeted and recommendations remained generic.`
- Solution: `Built an end-to-end retail intelligence pipeline joining four data sources, then scored customers on Recency, Frequency, and Monetary value to create 8 actionable segments with K-Means clustering. Added a supervised layer by training Random Forest and Gradient Boosting models on SMOTE-balanced data, using GridSearchCV and nested cross-validation to predict customer segment in real time. Persisted the winning model with joblib and paired it with a KNN recommender so new customer profiles could receive both an instant segment prediction and a tailored product or coupon recommendation.`
- Impact: `Scored and modeled more than 334,000 balanced training samples, achieving 95% classifier accuracy across 8 customer segments. The strongest predictor was transaction frequency at 51.7% feature importance, ahead of spend and quantity, turning the model output into a direct marketing insight: loyalty programs should optimize for visit frequency, not just basket value. The final system made segmentation actionable rather than descriptive by connecting model inference to real-time recommendations.`

## Apple High-Complexity Delivery
- Subtitle: `Senior Project Engineer - Husky Technologies · APAC`
- Hook: `Maximum requirements. Minimum budget. No room for a single late component. Every team watching.`
- Problem: `Apple commissioned a custom injection moulding system with an unusually difficult combination of constraints: high technical complexity, an aggressive cost ceiling, and a lead time with almost no room for delay. The brief drew scrutiny from multiple internal teams at once, and failure would not only have affected delivery but also Husky's reputation with a flagship APAC client.`
- Solution: `Structured the project early around cross-functional alignment before the requirements were fully locked, bringing engineering, procurement, and production into the discussion from day one so risks surfaced early. Identified the components with the longest supplier lead times and initiated procurement before formal project sign-off, absorbing the biggest schedule risk while the rest of the specification was still being finalized. Kept visibility high across teams throughout delivery so dependencies were resolved before they could turn into delays.`
- Impact: `The system was delivered within the required lead time and cost envelope despite the compressed schedule. Apple placed multiple repeat orders afterward, which validated both the delivery execution and the strength of the customer relationship created through the project.`

## Ferrari Korean Market Entry
- Subtitle: `Senior Project Engineer - Husky Technologies · APAC`
- Hook: `A damaged relationship, a new market, a one-week window to get four countries to agree on a design. The VP noticed.`
- Problem: `Husky was trying to open the Korean automotive market while competing against entrenched local suppliers and dealing with a customer already disappointed by a previous Husky sales experience. Winning the order meant rebuilding trust and overcoming home-market advantages, but the harder challenge came after the order: extracting the right design specifications and coordinating a redesign across multiple countries at speed without letting misalignment break the relationship again.`
- Solution: `Took direct ownership of the Korean account and worked in Korean, Chinese, and English to rebuild trust with the customer rather than sidestepping the prior disappointment. Traveled to Seoul with a design specialist to capture requirements in person, ensuring the technical conversation happened without translation loss. Then coordinated redesign and approval across engineering teams in China, India, and Luxembourg, managing time zones, design priorities, and communication gaps so the completed redesign could be presented back to the customer for approval within the week.`
- Impact: `The project was delivered successfully, repeat orders followed, and the global VP sent a letter of appreciation to the wider team recognizing the effort behind the market entry. The outcome showed that the relationship had not just been repaired but turned into a sustainable account in a difficult new market.`

## Pfizer Competitor AI Benchmarking
- Subtitle: `Academic Project - Competitive Intelligence`
- Problem: `Pharmaceutical companies are investing heavily in AI for drug discovery, clinical trials, and supply chain optimization, but Pfizer lacked a structured view of where competitors were gaining ground and what the strategic implications were.`
- Solution: `Built a competitor AI benchmarking framework assessing Roche, Novartis, J&J, and AstraZeneca across dimensions including AI investment levels, use case maturity, partnership strategies, and regulatory positioning. Translated findings into strategic options for Pfizer's AI roadmap.`
- Impact: `Identified three strategic gaps in Pfizer's AI positioning relative to competitors, with recommended actions prioritised by time horizon from 0-12 months through 1-3 years.`

## Prosuma POS vs. WMS Integration Analysis
- Subtitle: `Academic Project - Retail Operations`
- Problem: `A retail group operating across multiple store formats faced inconsistencies between point-of-sale transaction data and warehouse management system inventory records, causing stock discrepancies and reporting inaccuracies.`
- Solution: `Analysed the data flows and integration points between POS and WMS systems to identify root causes of discrepancy. Mapped the operational process and proposed a data reconciliation framework with validation checkpoints and escalation rules.`
- Impact: `Delivered a structured gap analysis with prioritised recommendations for system integration improvements, reducing projected inventory discrepancy rates and improving reporting reliability for management.`
