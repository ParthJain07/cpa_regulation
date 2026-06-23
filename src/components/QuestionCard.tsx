import React from 'react';
import type { Question } from '../data/r1_questions';

interface QuestionCardProps {
  question: Question;
  selectedOption: number | null;
  onSelectOption: (optionIndex: number) => void;
  isSubmitted: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedOption,
  onSelectOption,
  isSubmitted,
}) => {
  return (
    <div className={`question-card ${isSubmitted ? 'submitted' : ''}`}>
      <div className="question-header">
        <span className="question-number">Question {question.id}</span>
        <span className={`difficulty-badge ${question.difficulty.toLowerCase()}`}>
          {question.difficulty}
        </span>
      </div>
      <p className="question-text">{question.text}</p>

      <div className="options-container">
        {question.options.map((option: string, index: number) => {
          let optionClass = 'option';
          if (isSubmitted) {
            if (index === question.correctAnswer) {
              optionClass += ' correct';
            } else if (index === selectedOption) {
              optionClass += ' incorrect';
            }
          } else {
            if (index === selectedOption) {
              optionClass += ' selected';
            }
          }

          return (
            <label key={index} className={optionClass}>
              <input
                type="radio"
                name={`question-${question.id}`}
                value={index}
                checked={selectedOption === index}
                onChange={() => !isSubmitted && onSelectOption(index)}
                disabled={isSubmitted}
              />
              <span className="option-text">{option}</span>
            </label>
          );
        })}
      </div>

      {isSubmitted && (
        <div className="explanation-section">
          <h4>Explanation</h4>
          <div className="explanation-block">
            <strong>Why:</strong> {question.explanation.why}
          </div>
          <div className="explanation-block">
            <strong>Why others are wrong:</strong> {question.explanation.whyIncorrect}
          </div>
          <div className="explanation-block">
            <strong>How:</strong> {question.explanation.how}
          </div>
          <div className="explanation-block">
            <strong>When:</strong> {question.explanation.when}
          </div>
          <div className="explanation-source">
            <em>Source: {question.explanation.source}</em>
          </div>
        </div>
      )}
    </div>
  );
};
