import React, { useState } from 'react';
import { questions } from './data/questions';
import { QuestionCard } from './components/QuestionCard';
import { ResultsSummary } from './components/ResultsSummary';
import './index.css';

const App: React.FC = () => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelectOption = (questionId: number, optionIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const handleSubmit = () => {
    // Optional: add a confirmation if not all questions are answered
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
    if (window.confirm("Are you sure you want to clear your answers and retake the exam?")) {
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
        <h1>CPA REG Exam Practice</h1>
        <p>Module 1: Filing Requirements and Filing Status</p>
      </header>

      <main className="main-content">
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
              Retake Exam
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
