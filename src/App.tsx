import React, { useState, useEffect } from 'react';
import { modules } from './data/modules';
import { r1TbsList } from './data/tbs_data';
import { QuestionCard } from './components/QuestionCard';
import { ResultsSummary } from './components/ResultsSummary';
import { BeckerTBS } from './components/BeckerTBS';
import './index.css';

const App: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<'mcq' | 'simulation'>('mcq');
  const [activeMode, setActiveMode] = useState<'mcq' | 'simulation'>('mcq');
  const [activeModuleId, setActiveModuleId] = useState<string>(modules[0].id);
  const [activeSimModuleId, setActiveSimModuleId] = useState<string>('TBS-1');
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeModule = modules.find(m => m.id === activeModuleId) || modules[0];
  const activeSimModule = modules.find(m => m.id === activeSimModuleId) || modules[0];
  const questions = activeModule.questions;

  const handleModuleChange = (moduleId: string) => {
    // If they have started answering, warn them about switching
    const answeredCount = Object.keys(answers).length;
    if (answeredCount > 0 && !isSubmitted) {
      if (!window.confirm("You have an exam in progress. Switching modules will clear your answers. Proceed?")) {
        return;
      }
    }
    
    setActiveModuleId(moduleId);
    setAnswers({});
    setIsSubmitted(false);
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSimModuleChange = (moduleId: string) => {
    setActiveSimModuleId(moduleId);
    setActiveMode('simulation');
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectOption = (questionId: number, optionIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const handleSubmit = () => {
    const answeredCount = Object.keys(answers).length;
    if (answeredCount < questions.length) {
      if (!window.confirm(`You have only answered ${answeredCount} out of ${questions.length} questions. Are you sure you want to submit?`)) {
        return;
      }
    }
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetake = () => {
    if (window.confirm("Are you sure you want to clear your answers and retake this module?")) {
      setAnswers({});
      setIsSubmitted(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Calculate scores for active MCQ module
  let score = 0;
  let mediumScore = 0;
  let hardScore = 0;
  
  let mediumTotal = 0;
  let hardTotal = 0;

  questions.forEach(q => {
    if (q.difficulty === 'Medium') mediumTotal++;
    if (q.difficulty === 'Hard') hardTotal++;

    if (answers[q.id] === q.correctAnswer) {
      score++;
      if (q.difficulty === 'Medium') mediumScore++;
      if (q.difficulty === 'Hard') hardScore++;
    }
  });

  const answeredCount = Object.keys(answers).length;

  return (
    <div className="app-layout">
      {/* Mobile Top Navigation Bar */}
      <header className="mobile-topbar">
        <button 
          className="hamburger-btn" 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label="Toggle Navigation"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <h1 className="mobile-brand">CPA REG Study</h1>
        <div style={{ width: '24px' }}></div> {/* Spacer for symmetry */}
      </header>

      {/* Mobile Backdrop Overlay */}
      {isSidebarOpen && (
        <div className="sidebar-backdrop" onClick={() => setIsSidebarOpen(false)} />
      )}

      {/* Left Sidebar Navigation */}
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>CPA REG Study</h2>
          <p>Interactive Practice Exams</p>
        </div>

        <nav className="sidebar-nav">
          {/* Root Tab 1: MCQ */}
          <div className="sidebar-accordion-group">
            <button
              className={`nav-parent-tab ${expandedSection === 'mcq' ? 'expanded' : ''}`}
              onClick={() => {
                setExpandedSection('mcq');
                setActiveMode('mcq');
              }}
            >
              <div className="parent-left">
                <span className="parent-icon">📘</span>
                <span className="parent-label">MCQ</span>
              </div>
              <span className="accordion-chevron">{expandedSection === 'mcq' ? '▼' : '▶'}</span>
            </button>

            {expandedSection === 'mcq' && (
              <ul className="nav-module-list">
                {modules.map(m => (
                  <li key={m.id} className="nav-module-item">
                    <button
                      className={`nav-module-btn ${activeMode === 'mcq' && activeModuleId === m.id ? 'active' : ''}`}
                      onClick={() => {
                        setActiveMode('mcq');
                        handleModuleChange(m.id);
                      }}
                    >
                      <span className="nav-module-id">{m.id}</span>
                      <span className="nav-module-title">{m.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Root Tab 2: Simulation */}
          <div className="sidebar-accordion-group simulation-group">
            <button
              className={`nav-parent-tab simulation-tab ${expandedSection === 'simulation' ? 'expanded' : ''}`}
              onClick={() => {
                setExpandedSection('simulation');
                setActiveMode('simulation');
              }}
            >
              <div className="parent-left">
                <span className="parent-icon">⚡</span>
                <span className="parent-label">Simulation</span>
              </div>
              <span className="accordion-chevron">{expandedSection === 'simulation' ? '▼' : '▶'}</span>
            </button>

            {expandedSection === 'simulation' && (
              <ul className="nav-module-list simulation-list">
                {r1TbsList.map(tbs => (
                  <li key={tbs.id} className="nav-module-item">
                    <button
                      className={`nav-module-btn sim-btn ${activeMode === 'simulation' && activeSimModuleId === tbs.code ? 'active' : ''}`}
                      onClick={() => handleSimModuleChange(tbs.code)}
                    >
                      <span className="nav-module-id sim-badge">R1</span>
                      <span className="nav-module-title">{tbs.code}: {tbs.title.replace('R1 - ', '')}</span>
                    </button>
                  </li>
                ))}
                {modules.slice(1).map(m => (
                  <li key={m.id} className="nav-module-item">
                    <button
                      className={`nav-module-btn sim-btn ${activeMode === 'simulation' && activeSimModuleId === m.id ? 'active' : ''}`}
                      onClick={() => handleSimModuleChange(m.id)}
                    >
                      <span className="nav-module-id sim-badge">{m.id}</span>
                      <span className="nav-module-title">{m.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>
      </aside>

      {/* Main Content Wrapper */}
      <div className="main-wrapper">
        <div className="main-content-container">
          <header className="app-header desktop-header">
            <h1>CPA REG Study Journey</h1>
            <p>Interactive Practice Exams & Simulations</p>
          </header>

          <main className="main-content">
            {activeMode === 'mcq' ? (
              /* ================== MCQ MODULE VIEW ================== */
              <>
                <div className="module-top-header-row">
                  <div className="module-title-banner flex-1">
                    <h2>{activeModule.id} - {activeModule.title}</h2>
                  </div>
                  
                  {(isSubmitted || answeredCount > 0) && (
                    <div className="top-retake-action">
                      <button className="btn secondary-btn top-retake-btn" onClick={handleRetake}>
                        Retake Module
                      </button>
                    </div>
                  )}
                </div>

                {isSubmitted ? (
                  <ResultsSummary
                    score={score}
                    total={questions.length}
                    mediumScore={mediumScore}
                    mediumTotal={mediumTotal}
                    hardScore={hardScore}
                    hardTotal={hardTotal}
                  />
                ) : (
                  <div className="progress-bar">
                    <span>Progress: {answeredCount} / {questions.length} Answered</span>
                    <div className="progress-track">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${(answeredCount / questions.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                <div className="questions-list">
                  {questions.map((q) => (
                    <QuestionCard
                      key={q.id}
                      question={q}
                      selectedOption={answers[q.id] ?? null}
                      onSelectOption={(optionIndex) => handleSelectOption(q.id, optionIndex)}
                      isSubmitted={isSubmitted}
                    />
                  ))}
                </div>

                <div className="action-buttons">
                  {!isSubmitted && (
                    <button className="btn primary-btn" onClick={handleSubmit}>
                      Submit Exam
                    </button>
                  )}
                </div>
              </>
            ) : (
              /* ================== SIMULATION MODULE VIEW ================== */
              (() => {
                const activeTbs = r1TbsList.find(t => t.code === activeSimModuleId);
                if (activeTbs) {
                  return (
                    <BeckerTBS 
                      tbs={activeTbs} 
                      onExit={() => {
                        setActiveMode('mcq');
                        setExpandedSection('mcq');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }} 
                    />
                  );
                }
                return (
                  <>
                    <div className="module-top-header-row">
                      <div className="module-title-banner simulation-title-banner flex-1">
                        <h2>{activeSimModule.id} - {activeSimModule.title}</h2>
                      </div>
                    </div>

                    <div className="simulation-placeholder-card">
                      <div className="simulation-icon-banner">
                        <span className="sim-large-icon">⚡</span>
                      </div>
                      <h2>Simulations for {activeSimModule.title} coming soon.</h2>
                      <p className="simulation-subtext">
                        Sample questions will be added from Becker / Gleim / UWorld.
                      </p>
                      <div className="simulation-feature-preview">
                        <div className="feature-item">
                          <span className="feature-check">✓</span>
                          <span>Task-Based Simulations (TBS)</span>
                        </div>
                        <div className="feature-item">
                          <span className="feature-check">✓</span>
                          <span>Document Review & Research Prompts</span>
                        </div>
                        <div className="feature-item">
                          <span className="feature-check">✓</span>
                          <span>Official AICPA Exam Formats</span>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })()
            )}
          </main>

          <footer className="app-footer">
            <p>This is a practice tool for educational purposes. Always consult official IRS guidance and current tax laws.</p>
          </footer>
        </div>
      </div>

      {/* Floating Scroll To Top Button */}
      {showScrollTop && (
        <button 
          className="scroll-to-top-btn" 
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <svg className="arrow-icon" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      )}
    </div>
  );
};

export default App;
