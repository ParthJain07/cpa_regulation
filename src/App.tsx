import React, { useState } from 'react';
import { modules } from './data/modules';
import { QuestionCard } from './components/QuestionCard';
import { ResultsSummary } from './components/ResultsSummary';
import './index.css';

const App: React.FC = () => {
  const [activeModuleId, setActiveModuleId] = useState<string>(modules[0].id);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const activeModule = modules.find(m => m.id === activeModuleId) || modules[0];
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

  // Calculate scores
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
    <div className="app-container">
      <header className="app-header">
        <h1>CPA REG Study Journey</h1>
        <p>Interactive Practice Exams</p>
      </header>

      <nav className="module-tabs">
        {modules.map(m => (
          <button
            key={m.id}
            className={`tab-btn ${activeModuleId === m.id ? 'active' : ''}`}
            onClick={() => handleModuleChange(m.id)}
          >
            {m.id}: {m.title.split(' ').slice(0, 2).join(' ')}...
          </button>
        ))}
      </nav>

      <main className="main-content">
        <div className="module-title-banner">
          <h2>{activeModule.id} - {activeModule.title}</h2>
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
          {!isSubmitted ? (
            <button className="btn primary-btn" onClick={handleSubmit}>
              Submit Exam
            </button>
          ) : (
            <button className="btn secondary-btn" onClick={handleRetake}>
              Retake Module
            </button>
          )}
        </div>
      </main>

      <footer className="app-footer">
        <p>This is a practice tool for educational purposes. Always consult official IRS guidance and current tax laws.</p>
      </footer>
    </div>
  );
};

export default App;
