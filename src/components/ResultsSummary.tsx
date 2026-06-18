import React from 'react';

interface ResultsSummaryProps {
  score: number;
  total: number;
  mediumScore: number;
  mediumTotal: number;
  hardScore: number;
  hardTotal: number;
}

export const ResultsSummary: React.FC<ResultsSummaryProps> = ({
  score,
  total,
  mediumScore,
  mediumTotal,
  hardScore,
  hardTotal,
}) => {
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="results-summary">
      <h2>Exam Results</h2>
      <div className="score-main">
        <div className="score-circle">
          <span className="score-text">{score}/{total}</span>
          <span className="score-percentage">{percentage}%</span>
        </div>
      </div>
      
      <div className="score-breakdown">
        <div className="breakdown-item">
          <span className="difficulty-badge medium">Medium</span>
          <span className="breakdown-score">{mediumScore}/{mediumTotal}</span>
        </div>
        <div className="breakdown-item">
          <span className="difficulty-badge hard">Hard</span>
          <span className="breakdown-score">{hardScore}/{hardTotal}</span>
        </div>
      </div>

      {percentage >= 75 ? (
        <p className="feedback success">Great job! You have a solid grasp of Module 1.</p>
      ) : (
        <p className="feedback warning">Keep studying. Review the explanations below to improve your understanding of the rules.</p>
      )}
    </div>
  );
};
