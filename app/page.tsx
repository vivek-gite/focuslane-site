/* eslint-disable @next/next/no-img-element */

const installUrl = "https://addons.mozilla.org/en-US/firefox/addon/focuslane/";

const focusModes = [
  {
    name: "Minimal",
    accent: "terracotta",
    copy: "Blocks Shorts and hides comments while keeping YouTube familiar.",
  },
  {
    name: "Study",
    accent: "sage",
    copy: "Removes recommendations, sidebars, end screens, live chat, and other distractions.",
  },
  {
    name: "Strict",
    accent: "ochre",
    copy: "Hides the home feed and major discovery surfaces for focused sessions.",
  },
  {
    name: "Custom",
    accent: "slate",
    copy: "Tune every surface manually so YouTube matches the way you work.",
  },
];

const features = [
  {
    title: "Block Shorts everywhere",
    copy: "Links, shelves, cards, sidebars, and direct Shorts pages stay out of view.",
    scene: "shorts",
  },
  {
    title: "Hide recommendations and home feed",
    copy: "Turn down the discovery surfaces that pull attention sideways.",
    scene: "feed",
  },
  {
    title: "Build a Learning Stack queue",
    copy: "Keep a deliberate list of videos for the session and stay inside it.",
    scene: "stack",
  },
  {
    title: "Use Pomodoro and focus hours",
    copy: "Apply cleanup rules only when it is time to study, work, or wind down.",
    scene: "timer",
  },
  {
    title: "Temporarily unlock with intent",
    copy: "Type FOCUS to relax browsing for a short, chosen window.",
    scene: "unlock",
  },
  {
    title: "Skip sponsors with SponsorBlock",
    copy: "Automatically skip or ask before skipping sponsor segments.",
    scene: "sponsor",
  },
  {
    title: "Restore estimated dislike counts",
    copy: "See estimated dislikes beside the YouTube dislike button.",
    scene: "dislike",
  },
  {
    title: "Track minutes saved",
    copy: "Watch Shorts blocked, recommendations hidden, focus minutes, and time saved.",
    scene: "stats",
  },
];

const stats = [
  ["Shorts blocked", "2,184"],
  ["Recommendations hidden", "8,912"],
  ["AI-filtered videos", "436"],
  ["Sponsor segments skipped", "93"],
  ["Focus minutes", "1,260"],
  ["Minutes saved", "512"],
];

const faqs = [
  [
    "What does focuslane block?",
    "focuslane can block Shorts, comments, the home feed, watch sidebars, end screens, info cards, live chat, notifications, community posts, autoplay, and other high-distraction YouTube surfaces.",
  ],
  [
    "Does focuslane collect data?",
    "No. The extension declares no data collection. Settings, stats, caches, overrides, and feedback corrections are stored locally or in Firefox extension storage.",
  ],
  [
    "How does AI filtering work?",
    "When enabled, focuslane sends visible video metadata and your natural-language rule to the classification backend, then caches the decision locally to reduce repeated requests.",
  ],
  [
    "Can I temporarily unlock YouTube?",
    "Yes. Temporary unlock lets you relax browsing for 5, 15, or 30 minutes after typing FOCUS, so the unlock is intentional.",
  ],
  [
    "Does it work outside Firefox?",
    "focuslane is currently built as a Firefox extension.",
  ],
  [
    "Can I customize every setting?",
    "Yes. Use Minimal, Study, or Strict for presets, or switch to Custom to control individual distraction surfaces yourself.",
  ],
];

export default function Home() {
  return (
    <main>
      <header className="site-header" aria-label="Primary navigation">
        <a className="brand-link" href="#top" aria-label="focuslane home">
          <img src="/focuslane-icon.svg" alt="" />
          <span>focuslane</span>
        </a>
        <nav className="nav-links" aria-label="Site sections">
          <a href="#features">Features</a>
          <a href="#ai-filter">AI Filter</a>
          <a href="#privacy">Privacy</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="nav-cta" href={installUrl}>
          Install for Firefox
        </a>
      </header>

      <section id="top" className="hero section-shell">
        <div className="hero-copy reveal">
          <p className="eyebrow">A calmer lane through YouTube</p>
          <h1>focuslane</h1>
          <p className="hero-subhead">Make YouTube calm and intentional.</p>
          <p className="hero-body">
            Block Shorts, hide recommendations, filter videos with AI, and stay
            focused without leaving YouTube.
          </p>
          <div className="hero-actions" aria-label="Hero actions">
            <a className="primary-button" href={installUrl}>
              Install for Firefox
            </a>
            <a className="secondary-button" href="#features">
              See how it works
            </a>
          </div>
          <div className="hero-proof" aria-label="focuslane highlights">
            <span>No data collection</span>
            <span>Firefox extension</span>
            <span>AI rules optional</span>
          </div>
        </div>

        <div className="hero-visual reveal" aria-label="focuslane product mockup">
          <div className="browser-window">
            <div className="browser-bar">
              <div className="window-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="address-field">youtube.com/watch/focused</div>
              <div className="status-orb" aria-hidden="true" />
            </div>
            <div className="youtube-clean">
              <div className="video-and-side">
                <div className="video-stage">
                  <div className="play-core" aria-hidden="true" />
                  <span>Deep work playlist</span>
                </div>
                <aside className="quiet-sidebar" aria-label="Hidden recommendations preview">
                  <span>Recommendations hidden</span>
                  <div />
                  <div />
                  <div />
                </aside>
              </div>
              <div className="watch-meta">
                <div>
                  <strong>System design interview deep dive</strong>
                  <span>Code Workshop</span>
                </div>
                <span className="mode-pill">Study Mode</span>
              </div>
              <div className="clean-grid">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>

          <div className="extension-popup">
            <div className="popup-head">
              <img src="/focuslane-icon.svg" alt="" />
              <div>
                <strong>focuslane</strong>
                <span>Study mode active</span>
              </div>
            </div>
            <div className="mode-control" aria-label="Focus mode preview">
              <span>Minimal</span>
              <span className="active">Study</span>
              <span>Strict</span>
            </div>
            <div className="toggle-list">
              <span>Shorts blocked</span>
              <span>Feed hidden</span>
              <span>Autoplay off</span>
            </div>
          </div>

          <div className="floating-pills" aria-label="focuslane capabilities">
            <span>Block Shorts</span>
            <span>Hide feed</span>
            <span>Study Mode</span>
            <span>AI filter</span>
            <span>Sponsor skipped</span>
          </div>
        </div>
      </section>

      <section id="features" className="section-shell modes-section">
        <div className="section-heading reveal">
          <p className="eyebrow">Focus modes</p>
          <h2>Choose how focused YouTube should feel</h2>
        </div>
        <div className="mode-grid">
          {focusModes.map((mode) => (
            <article className={`mode-card ${mode.accent}`} key={mode.name}>
              <span>{mode.name}</span>
              <p>{mode.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="ai-filter" className="section-shell ai-section">
        <div className="section-heading reveal">
          <p className="eyebrow">AI video filtering</p>
          <h2>Describe what belongs in your feed</h2>
          <p>
            Use natural language to tell focuslane what deserves attention, then
            tune the threshold and overrides when you want more control.
          </p>
        </div>
        <div className="ai-layout">
          <div className="rule-composer reveal">
            <label htmlFor="rule-preview">Filter rule</label>
            <div id="rule-preview" className="rule-text">
              Only show programming tutorials and tech reviews. Hide gaming,
              vlogs, and politics.
            </div>
            <div className="threshold-row">
              <span>Hide confidence</span>
              <strong>80%</strong>
            </div>
            <div className="threshold-track" aria-hidden="true">
              <span />
            </div>
            <div className="override-grid">
              <div>
                <strong>Always show</strong>
                <span>Code Workshop</span>
                <span>Systems Lab</span>
              </div>
              <div>
                <strong>Always hide</strong>
                <span>Celebrity gossip</span>
                <span>Reaction clips</span>
              </div>
            </div>
          </div>
          <div className="history-panel reveal">
            <div className="history-head">
              <span>Filtered history</span>
              <strong>Today</strong>
            </div>
            <div className="history-item show">
              <span />
              <div>
                <strong>React dashboard from scratch</strong>
                <small>Shown - matches programming tutorial</small>
              </div>
            </div>
            <div className="history-item hide">
              <span />
              <div>
                <strong>Viral streamer highlights</strong>
                <small>Hidden - outside current rule</small>
              </div>
            </div>
            <div className="history-item hide">
              <span />
              <div>
                <strong>Celebrity gossip recap</strong>
                <small>Hidden - keyword override</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-showcase">
        <div className="section-shell">
          <div className="section-heading reveal">
            <p className="eyebrow">Everything quieter</p>
            <h2>All the controls YouTube forgot to give you</h2>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <div className={`feature-scene ${feature.scene}`} aria-hidden="true">
                  <span className="scene-dot" />
                  <span className="scene-line long" />
                  <span className="scene-line" />
                  <span className="scene-badge" />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="privacy" className="section-shell privacy-section">
        <div className="privacy-copy reveal">
          <p className="eyebrow">Privacy</p>
          <h2>Private by default</h2>
          <p>
            focuslane declares no data collection. Settings and stats stay in
            Firefox extension storage, and optional services are used only when
            you enable their related features.
          </p>
        </div>
        <div className="privacy-list reveal">
          <span>No declared data collection</span>
          <span>Settings and stats stored in extension storage</span>
          <span>Optional services only run when enabled</span>
          <span>AI filtering sends video metadata and your rule only when active</span>
        </div>
      </section>

      <section className="section-shell stats-section">
        <div className="section-heading reveal">
          <p className="eyebrow">Stats</p>
          <h2>See what focus gives back</h2>
        </div>
        <div className="stats-dashboard reveal">
          {stats.map(([label, value]) => (
            <article key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="section-shell faq-section">
        <div className="section-heading reveal">
          <p className="eyebrow">FAQ</p>
          <h2>Questions before you take the lane</h2>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div className="section-shell final-inner reveal">
          <h2>Turn YouTube back into a tool.</h2>
          <p>Install focuslane and browse with intention.</p>
          <a className="primary-button" href={installUrl}>
            Install for Firefox
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <span>focuslane</span>
        <span>Calm YouTube. Clearer intent.</span>
      </footer>
    </main>
  );
}
