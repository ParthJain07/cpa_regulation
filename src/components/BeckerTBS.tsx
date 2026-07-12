import React, { useState, useEffect } from 'react';
import type { TBS, TBSRow } from '../data/tbs_data';

interface BeckerTBSProps {
  tbs: TBS;
  onExit?: () => void;
}

export const BeckerTBS: React.FC<BeckerTBSProps> = ({ tbs, onExit }) => {
  const [activeTabId, setActiveTabId] = useState<number>(tbs.tabs[0].id);
  // answers mapping: { `${tabId}-${rowId}`: optionIndex }
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isExplanationOpen, setIsExplanationOpen] = useState<boolean>(false);
  const [explanationFilter, setExplanationFilter] = useState<'all' | 'correct' | 'incorrect' | 'unanswered'>('all');
  
  // Timer state
  const [secondsElapsed, setSecondsElapsed] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Dropdown modal state
  const [modalRow, setModalRow] = useState<{ tabId: number; row: TBSRow } | null>(null);
  const [tempSelectedOption, setTempSelectedOption] = useState<number | null>(null);

  // Overview modal state
  const [isOverviewOpen, setIsOverviewOpen] = useState<boolean>(false);

  // Tools modals state
  const [isCalcOpen, setIsCalcOpen] = useState<boolean>(false);
  const [isSpreadsheetOpen, setIsSpreadsheetOpen] = useState<boolean>(false);

  // Bookmark toggle
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

  useEffect(() => {
    // Reset state whenever switching to a new TBS
    setActiveTabId(tbs.tabs[0].id);
    setAnswers({});
    setIsSubmitted(false);
    setIsExplanationOpen(false);
    setSecondsElapsed(0);
    setIsPaused(false);
  }, [tbs]);

  useEffect(() => {
    let interval: any = null;
    if (!isPaused && !isSubmitted) {
      interval = setInterval(() => {
        setSecondsElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPaused, isSubmitted]);

  const activeTab = tbs.tabs.find(t => t.id === activeTabId) || tbs.tabs[0];

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const openCellModal = (tabId: number, row: TBSRow) => {
    if (isSubmitted) {
      // Post-submit, clicking cell opens explanation instead or focuses row
      setIsExplanationOpen(true);
      return;
    }
    const key = `${tabId}-${row.id}`;
    const currentAns = answers[key] !== undefined ? answers[key] : null;
    setTempSelectedOption(currentAns);
    setModalRow({ tabId, row });
  };

  const handleAcceptOption = () => {
    if (!modalRow) return;
    const key = `${modalRow.tabId}-${modalRow.row.id}`;
    if (tempSelectedOption !== null) {
      setAnswers(prev => ({
        ...prev,
        [key]: tempSelectedOption
      }));
    } else {
      // If none selected, delete key
      const newAnswers = { ...answers };
      delete newAnswers[key];
      setAnswers(newAnswers);
    }
    setModalRow(null);
  };

  const handleResetRowOption = () => {
    if (!modalRow) return;
    const key = `${modalRow.tabId}-${modalRow.row.id}`;
    const newAnswers = { ...answers };
    delete newAnswers[key];
    setAnswers(newAnswers);
    setTempSelectedOption(null);
    setModalRow(null);
  };

  const handleSubmitSimulation = () => {
    // Count total rows across all tabs
    let totalRows = 0;
    tbs.tabs.forEach(t => { totalRows += t.rows.length; });
    const answeredCount = Object.keys(answers).length;

    if (answeredCount < totalRows) {
      if (!window.confirm(`You have only answered ${answeredCount} of ${totalRows} cells across all tabs. Are you sure you want to submit?`)) {
        return;
      }
    }
    setIsSubmitted(true);
    setIsExplanationOpen(true);
  };

  const handleRetakeSimulation = () => {
    if (window.confirm("Are you sure you want to clear your answers and retake this simulation?")) {
      setAnswers({});
      setIsSubmitted(false);
      setIsExplanationOpen(false);
      setSecondsElapsed(0);
      setIsPaused(false);
    }
  };

  // Helper for checking row status
  const getRowStatus = (tabId: number, row: TBSRow) => {
    const key = `${tabId}-${row.id}`;
    const ans = answers[key];
    if (ans === undefined) return 'unanswered';
    if (!isSubmitted) return 'answered';
    return ans === row.correctAnswer ? 'correct' : 'incorrect';
  };

  // Calculate overall stats for Explanation header
  let correctCount = 0;
  let incorrectCount = 0;
  let unansweredCount = 0;

  activeTab.rows.forEach(r => {
    const status = getRowStatus(activeTab.id, r);
    if (status === 'correct') correctCount++;
    else if (status === 'incorrect') incorrectCount++;
    else unansweredCount++;
  });

  // Filtered rows for explanation panel
  const explanationRows = activeTab.rows.filter(r => {
    const status = getRowStatus(activeTab.id, r);
    if (explanationFilter === 'all') return true;
    if (explanationFilter === 'correct') return status === 'correct';
    if (explanationFilter === 'incorrect') return status === 'incorrect';
    if (explanationFilter === 'unanswered') return status === 'unanswered';
    return true;
  });

  return (
    <div className="becker-tbs-container">
      {/* ================== STICKY DARK NAVY TOP BAR ================== */}
      <header className="becker-top-bar">
        <div className="becker-top-left">
          <span className="becker-breadcrumb">TBSs | R1 - {tbs.code}</span>
        </div>

        <div className="becker-top-center">
          <button 
            className={`becker-pause-btn ${isPaused ? 'paused' : ''}`}
            onClick={() => setIsPaused(!isPaused)}
            title={isPaused ? "Resume Timer" : "Pause Timer"}
          >
            {isPaused ? '▶ Resume' : '⏸ Pause'}
          </button>
          <div className="becker-timer-box">
            <span className="becker-timer-time">{formatTime(secondsElapsed)}</span>
            <span className="becker-timer-label">QUESTION TIME ELAPSED</span>
          </div>
        </div>

        <div className="becker-top-right">
          <button className="becker-tool-btn" onClick={() => setIsCalcOpen(!isCalcOpen)}>
            <span>🖩</span> CALC
          </button>
          <button className="becker-tool-btn" onClick={() => setIsSpreadsheetOpen(!isSpreadsheetOpen)}>
            <span>📊</span> SPREADSHEET
          </button>
          <button className="becker-tool-btn" onClick={() => setIsOverviewOpen(true)}>
            <span>📑</span> OVERVIEW
          </button>
          <button className="becker-end-session-btn" onClick={onExit || (() => {})}>
            END SESSION
          </button>
        </div>
      </header>

      {/* ================== TAB ROW BELOW TOP BAR ================== */}
      <nav className="becker-tab-row">
        {tbs.tabs.map(tab => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              className={`becker-tab-btn ${isActive ? 'active' : ''}`}
              onClick={() => setActiveTabId(tab.id)}
            >
              <span className="becker-tab-num">{tab.id}</span>
              <span className="becker-tab-title">{tab.title}</span>
            </button>
          );
        })}
      </nav>

      {/* ================== MAIN CONTENT AREA: QUESTION & EXPLANATION PANELS ================== */}
      <div className="becker-main-split">
        {/* Question Panel (~60% width when explanation open, 100% when closed) */}
        <div className={`becker-question-panel ${isExplanationOpen && isSubmitted ? 'with-explanation' : 'full-width'}`}>
          <div className="becker-question-header">
            <div className="becker-header-left">
              <button 
                className="becker-arrow-btn"
                disabled={activeTabId === tbs.tabs[0].id}
                onClick={() => {
                  const idx = tbs.tabs.findIndex(t => t.id === activeTabId);
                  if (idx > 0) setActiveTabId(tbs.tabs[idx - 1].id);
                }}
              >
                ←
              </button>
              <button 
                className="becker-arrow-btn"
                disabled={activeTabId === tbs.tabs[tbs.tabs.length - 1].id}
                onClick={() => {
                  const idx = tbs.tabs.findIndex(t => t.id === activeTabId);
                  if (idx < tbs.tabs.length - 1) setActiveTabId(tbs.tabs[idx + 1].id);
                }}
              >
                →
              </button>
              <button 
                className={`becker-bookmark-btn ${isBookmarked ? 'bookmarked' : ''}`}
                onClick={() => setIsBookmarked(!isBookmarked)}
                title="Bookmark Task"
              >
                🔖
              </button>
              <span className="becker-tbs-id">{tbs.id}</span>
            </div>
            <div className="becker-header-right">
              <span className="becker-badge">{tbs.badge}</span>
            </div>
          </div>

          {/* Scenario Text at top */}
          <div className="becker-scenario-box">
            <h3 className="scenario-heading">Scenario</h3>
            <p className="scenario-text">{tbs.scenario}</p>
          </div>

          {/* Spreadsheet-style Table */}
          <div className="becker-table-wrapper">
            <table className="becker-spreadsheet-table">
              <thead>
                <tr>
                  <th className="becker-row-num-th">#</th>
                  <th className="becker-col-a-th">{activeTab.columnAHeader}</th>
                  <th className="becker-col-b-th">{activeTab.columnBHeader}</th>
                </tr>
              </thead>
              <tbody>
                {activeTab.rows.map(row => {
                  const key = `${activeTab.id}-${row.id}`;
                  const selectedIdx = answers[key];
                  const status = getRowStatus(activeTab.id, row);

                  return (
                    <tr key={row.id} className={`becker-tr ${status}`}>
                      <td className="becker-row-num-td">Row {row.id}</td>
                      <td className="becker-col-a-td">{row.item}</td>
                      <td 
                        className={`becker-col-b-td ${status}`}
                        onClick={() => openCellModal(activeTab.id, row)}
                      >
                        <div className="becker-cell-content">
                          <span className={`becker-cell-text ${selectedIdx !== undefined ? 'selected' : 'placeholder'}`}>
                            {selectedIdx !== undefined ? row.options[selectedIdx] : 'Select an answer...'}
                          </span>
                          <span className="becker-cell-trigger">≡</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Fixed Bottom Action Panel */}
          <div className="becker-panel-footer">
            <div className="becker-footer-arrows">
              <button 
                className="becker-footer-nav-btn"
                disabled={activeTabId === tbs.tabs[0].id}
                onClick={() => {
                  const idx = tbs.tabs.findIndex(t => t.id === activeTabId);
                  if (idx > 0) setActiveTabId(tbs.tabs[idx - 1].id);
                }}
              >
                ← Prev Tab
              </button>
              <button 
                className="becker-footer-nav-btn"
                disabled={activeTabId === tbs.tabs[tbs.tabs.length - 1].id}
                onClick={() => {
                  const idx = tbs.tabs.findIndex(t => t.id === activeTabId);
                  if (idx < tbs.tabs.length - 1) setActiveTabId(tbs.tabs[idx + 1].id);
                }}
              >
                Next Tab →
              </button>
            </div>

            <div className="becker-footer-submit">
              {!isSubmitted ? (
                <button className="becker-submit-btn" onClick={handleSubmitSimulation}>
                  Submit Answer
                </button>
              ) : (
                <div className="becker-post-submit-actions">
                  {!isExplanationOpen && (
                    <button className="becker-toggle-exp-btn" onClick={() => setIsExplanationOpen(true)}>
                      Show Explanation Panel
                    </button>
                  )}
                  <button className="becker-retake-btn" onClick={handleRetakeSimulation}>
                    Retake Simulation
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Explanation Panel (~40% width, appears after Submit) */}
        {isExplanationOpen && isSubmitted && (
          <aside className="becker-explanation-panel">
            <div className="becker-exp-header">
              <div className="becker-exp-title-row">
                <h4>Explanation</h4>
                <div className="becker-exp-pills">
                  <span className="skillbuilder-pill">SkillBuilder Video</span>
                  <span className="newt-pill">Ask Newt</span>
                </div>
              </div>
              <button className="becker-exp-close" onClick={() => setIsExplanationOpen(false)} title="Close Explanation">
                ✕
              </button>
            </div>

            {/* Filter Tabs */}
            <div className="becker-exp-filters">
              <button 
                className={`exp-filter-tab correct ${explanationFilter === 'correct' ? 'active' : ''}`}
                onClick={() => setExplanationFilter('correct')}
              >
                ✓ Correct ({correctCount})
              </button>
              <button 
                className={`exp-filter-tab incorrect ${explanationFilter === 'incorrect' ? 'active' : ''}`}
                onClick={() => setExplanationFilter('incorrect')}
              >
                ✕ Incorrect ({incorrectCount})
              </button>
              <button 
                className={`exp-filter-tab unanswered ${explanationFilter === 'unanswered' ? 'active' : ''}`}
                onClick={() => setExplanationFilter('unanswered')}
              >
                Unanswered ({unansweredCount})
              </button>
              <button 
                className={`exp-filter-tab all ${explanationFilter === 'all' ? 'active' : ''}`}
                onClick={() => setExplanationFilter('all')}
              >
                All ({activeTab.rows.length})
              </button>
            </div>

            {/* Scrollable Explanations per Row */}
            <div className="becker-exp-list">
              {explanationRows.length === 0 ? (
                <div className="exp-empty">No rows match the selected filter on this tab.</div>
              ) : (
                explanationRows.map(row => {
                  const status = getRowStatus(activeTab.id, row);
                  const selectedIdx = answers[`${activeTab.id}-${row.id}`];
                  const isCorrect = status === 'correct';

                  return (
                    <div key={row.id} className={`becker-exp-item ${status}`}>
                      <div className="becker-exp-row-header">
                        <span className={`exp-row-label ${status}`}>Row {row.id}:</span>
                        <span className="exp-correct-ans">{row.options[row.correctAnswer]}</span>
                      </div>
                      
                      {!isCorrect && selectedIdx !== undefined && (
                        <div className="exp-user-ans">
                          Your Answer: <span className="wrong-text">{row.options[selectedIdx]}</span>
                        </div>
                      )}
                      
                      <p className="exp-paragraph">{row.explanation}</p>
                    </div>
                  );
                })
              )}
            </div>
          </aside>
        )}
      </div>

      {/* ================== DROPDOWN MODAL (on ≡ click) ================== */}
      {modalRow && (
        <div className="becker-modal-backdrop" onClick={() => setModalRow(null)}>
          <div className="becker-dropdown-modal" onClick={e => e.stopPropagation()}>
            <div className="becker-modal-header">
              <h4>Select an option below</h4>
              <button className="becker-modal-x" onClick={() => setModalRow(null)}>✕</button>
            </div>
            
            <div className="becker-modal-body">
              <div className="modal-item-context">
                <span className="modal-row-tag">Row {modalRow.row.id}:</span>
                <span className="modal-row-desc">{modalRow.row.item}</span>
              </div>

              <div className="becker-radio-list">
                {modalRow.row.options.map((opt, idx) => (
                  <label key={idx} className={`becker-radio-label ${tempSelectedOption === idx ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="becker-modal-radio"
                      checked={tempSelectedOption === idx}
                      onChange={() => setTempSelectedOption(idx)}
                    />
                    <span className="radio-text">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="becker-modal-footer">
              <button className="becker-btn-reset" onClick={handleResetRowOption}>
                RESET
              </button>
              <button className="becker-btn-cancel" onClick={() => setModalRow(null)}>
                CANCEL
              </button>
              <button className="becker-btn-accept" onClick={handleAcceptOption}>
                ACCEPT
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================== OVERVIEW MODAL ================== */}
      {isOverviewOpen && (
        <div className="becker-modal-backdrop" onClick={() => setIsOverviewOpen(false)}>
          <div className="becker-overview-modal" onClick={e => e.stopPropagation()}>
            <div className="becker-modal-header">
              <h4>Simulation Overview & Completion Status</h4>
              <button className="becker-modal-x" onClick={() => setIsOverviewOpen(false)}>✕</button>
            </div>

            <div className="becker-overview-body">
              {tbs.tabs.map(t => (
                <div key={t.id} className="overview-tab-group">
                  <div 
                    className="overview-tab-header"
                    onClick={() => {
                      setActiveTabId(t.id);
                      setIsOverviewOpen(false);
                    }}
                  >
                    <h5>Tab {t.id}: {t.title}</h5>
                    <span className="jump-link">Jump to Tab →</span>
                  </div>
                  <div className="overview-row-grid">
                    {t.rows.map(r => {
                      const status = getRowStatus(t.id, r);
                      return (
                        <div 
                          key={r.id} 
                          className={`overview-row-chip ${status}`}
                          onClick={() => {
                            setActiveTabId(t.id);
                            setIsOverviewOpen(false);
                          }}
                        >
                          <span className="chip-row-num">Row {r.id}</span>
                          <span className="chip-status">
                            {status === 'correct' && '✓ Correct'}
                            {status === 'incorrect' && '✕ Incorrect'}
                            {status === 'answered' && '● Answered'}
                            {status === 'unanswered' && '○ Unanswered'}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="becker-overview-footer">
              <button className="becker-btn-accept" onClick={() => setIsOverviewOpen(false)}>
                CLOSE OVERVIEW
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================== CALCULATOR MODAL ================== */}
      {isCalcOpen && (
        <div className="becker-tool-popover calc-popover">
          <div className="tool-header">
            <span>🖩 Becker CPA Calculator</span>
            <button onClick={() => setIsCalcOpen(false)}>✕</button>
          </div>
          <div className="tool-body">
            <p style={{ color: '#cbd5e1', fontSize: '0.9rem', textAlign: 'center', margin: '1rem 0' }}>
              Standard CPA Exam On-Screen Calculator (Use your keyboard or desktop keypad for quick calculations).
            </p>
          </div>
        </div>
      )}

      {/* ================== SPREADSHEET MODAL ================== */}
      {isSpreadsheetOpen && (
        <div className="becker-tool-popover spreadsheet-popover">
          <div className="tool-header">
            <span>📊 Scratchpad Spreadsheet</span>
            <button onClick={() => setIsSpreadsheetOpen(false)}>✕</button>
          </div>
          <div className="tool-body">
            <table className="scratch-grid">
              <tbody>
                {[1, 2, 3, 4, 5].map(r => (
                  <tr key={r}>
                    <td className="grid-hdr">{r}</td>
                    <td><input type="text" placeholder="" /></td>
                    <td><input type="text" placeholder="" /></td>
                    <td><input type="text" placeholder="" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
