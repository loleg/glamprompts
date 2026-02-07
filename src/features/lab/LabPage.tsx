
import React from 'react';
import './LabPage.css';

function LabPage() {
  return (
    <div className="lab-page">
      <div className="lab-hero">
        <div className="lab-hero-decoration">
          <div className="lab-shape lab-shape--triangle" />
          <div className="lab-shape lab-shape--ring" />
          <div className="lab-shape lab-shape--dot-grid" />
        </div>
        <div className="lab-badge">Workshop Format</div>
        <h1>Humanities Innovation Lab</h1>
        <p className="lab-lead">
          Exploring digital tools with LLMs — A hackathon-based module for digital humanities training.
          Developed during a workshop at the University of Bern, February 6, 2026, with Apertus, the sovereign AI from Switzerland.
        </p>
      </div>

      <section className="lab-section">
        <h2>Objective</h2>
        <p>
          To introduce participants to the application of Large Language Models (LLMs) in digital humanities
          research and practice, while fostering critical thinking, collaboration, and innovation through a hackathon format.
        </p>
      </section>

      <section className="lab-section">
        <h2>Target Audience</h2>
        <div className="audience-grid">
          {[
            { icon: '🎓', label: 'Graduate students & researchers in humanities' },
            { icon: '📚', label: 'Digital humanities professionals & librarians' },
            { icon: '🏛', label: 'GLAM community & interested technologists' },
          ].map((a) => (
            <div className="audience-card" key={a.label}>
              <span className="audience-icon">{a.icon}</span>
              <span>{a.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="lab-section">
        <h2>Module Structure</h2>
        <p className="lab-structure-intro">A 2–3 day hackathon format with the following phases:</p>

        <div className="timeline">
          <div className="timeline-day">
            <div className="timeline-day-header">
              <div className="day-number">1</div>
              <div>
                <h3>Introduction & Problem Identification</h3>
                <span className="day-sub">Foundation & Team Formation</span>
              </div>
            </div>
            <div className="timeline-content">
              <div className="session">
                <div className="session-time">Morning</div>
                <div className="session-details">
                  <div className="session-item">
                    <div className="session-dot session-dot--purple" />
                    <div>
                      <strong>Introduction to LLMs & Digital Humanities</strong>
                      <p>Overview of LLMs, capabilities, limitations, and potential applications in humanities research — text analysis, content generation, and more.</p>
                    </div>
                  </div>
                  <div className="session-item">
                    <div className="session-dot session-dot--blue" />
                    <div>
                      <strong>Workshop: LLMs 101</strong>
                      <p>Hands-on session using a specific LLM (e.g., Hugging Face APIs or locally hosted). Focus on text generation, summarization, and sentiment analysis.</p>
                    </div>
                  </div>
                  <div className="session-item">
                    <div className="session-dot session-dot--pink" />
                    <div>
                      <strong>Problem Pitching</strong>
                      <p>Participants identify and pitch potential projects or challenges, focusing on how LLMs can support their research or practice.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="session">
                <div className="session-time">Afternoon</div>
                <div className="session-details">
                  <div className="session-item">
                    <div className="session-dot session-dot--green" />
                    <div>
                      <strong>Group Formation & Project Selection</strong>
                      <p>Teams form around pitched projects with a mix of humanities researchers, developers, and diverse skill sets.</p>
                    </div>
                  </div>
                  <div className="session-item">
                    <div className="session-dot session-dot--orange" />
                    <div>
                      <strong>Project Planning & Research</strong>
                      <p>Teams research their projects, identify specific LLM tasks, and plan their approach for the hackathon.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-day">
            <div className="timeline-day-header">
              <div className="day-number">2</div>
              <div>
                <h3>Hacking & Collaboration</h3>
                <span className="day-sub">Building & Iterating</span>
              </div>
            </div>
            <div className="timeline-content">
              <div className="session">
                <div className="session-time">Morning</div>
                <div className="session-details">
                  <div className="session-item">
                    <div className="session-dot session-dot--purple" />
                    <div>
                      <strong>Hacking Session 1</strong>
                      <p>Teams work on projects: content analysis on historical texts, educational chatbots, generating summaries, writing prompts, or creating new texts based on historical data.</p>
                    </div>
                  </div>
                  <div className="session-item">
                    <div className="session-dot session-dot--blue" />
                    <div>
                      <strong>Advanced LLM Techniques Workshop</strong>
                      <p>Deeper dive into fine-tuning, multimodal processing, and ethical considerations.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="session">
                <div className="session-time">Afternoon</div>
                <div className="session-details">
                  <div className="session-item">
                    <div className="session-dot session-dot--green" />
                    <div>
                      <strong>Hacking Session 2</strong>
                      <p>Continued development and iteration. Teams share progress and get feedback from peers and mentors.</p>
                    </div>
                  </div>
                  <div className="session-item">
                    <div className="session-dot session-dot--pink" />
                    <div>
                      <strong>Ethics & Critical Thinking Session</strong>
                      <p>Facilitated discussion on ethical implications: bias, copyright, responsible use of generated content.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-day">
            <div className="timeline-day-header">
              <div className="day-number">3</div>
              <div>
                <h3>Presentations & Reflection</h3>
                <span className="day-sub">Sharing & Looking Forward</span>
              </div>
            </div>
            <div className="timeline-content">
              <div className="session">
                <div className="session-time">Morning</div>
                <div className="session-details">
                  <div className="session-item">
                    <div className="session-dot session-dot--orange" />
                    <div>
                      <strong>Final Project Presentations</strong>
                      <p>Teams present projects highlighting LLM usage, challenges faced, and solutions developed.</p>
                    </div>
                  </div>
                  <div className="session-item">
                    <div className="session-dot session-dot--blue" />
                    <div>
                      <strong>Peer Feedback & Panel Discussion</strong>
                      <p>Constructive feedback from participants and an expert panel on the future of LLMs in humanities.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="session">
                <div className="session-time">Afternoon</div>
                <div className="session-details">
                  <div className="session-item">
                    <div className="session-dot session-dot--green" />
                    <div>
                      <strong>Reflection & Next Steps</strong>
                      <p>Participants reflect on learnings, discuss how skills apply to their own work, certificates distributed.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lab-section">
        <h2>Outcomes</h2>
        <div className="outcomes-grid">
          {[
            { color: '#6c63ff', title: 'Skills Gained', desc: 'Practical experience with LLMs, API usage, basic programming, and understanding of applications in humanities.' },
            { color: '#e74c8b', title: 'Critical Thinking', desc: 'Enhanced understanding of ethical, methodological, and theoretical considerations of using LLMs.' },
            { color: '#0984e3', title: 'Collaboration', desc: 'Experience working in diverse team settings, fostering knowledge sharing across disciplines.' },
            { color: '#00b894', title: 'Project Outcomes', desc: 'Tangible prototypes, proof-of-concepts, or publishable research based on hackathon projects.' },
          ].map((o) => (
            <div className="outcome-card" key={o.title}>
              <div className="outcome-bar" style={{ background: o.color }} />
              <h4>{o.title}</h4>
              <p>{o.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="lab-section">
        <h2>Ethical Considerations</h2>
        <div className="ethics-grid">
          <div className="ethics-card">
            <div className="ethics-icon">🔍</div>
            <h4>Transparency</h4>
            <p>Clearly communicate the capabilities and limitations of LLMs to participants.</p>
          </div>
          <div className="ethics-card">
            <div className="ethics-icon">⚖️</div>
            <h4>Ethical Use</h4>
            <p>Emphasize responsible use of generated content, including copyright and authorship.</p>
          </div>
          <div className="ethics-card">
            <div className="ethics-icon">🧠</div>
            <h4>Bias Awareness</h4>
            <p>Discuss potential biases in LLMs and strategies to mitigate them in projects.</p>
          </div>
        </div>
      </section>

      <section className="lab-section lab-section--cta">
        <div className="lab-cta">
          <h3>Ready to explore the prompts?</h3>
          <p>Browse the GLAMprompt library for ready-to-use AI prompts tailored to cultural institutions.</p>
        </div>
      </section>
    </div>
  );
}

export default LabPage;
