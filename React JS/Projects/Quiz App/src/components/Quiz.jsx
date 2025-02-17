import { useState, useCallback } from "react";

import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  // Select active Question
  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  // When user select a option
  // It returns a memoized version of the callback that only changes if one of the dependencies has changed.
  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);
  console.log(userAnswers);

  // When the timer expires before selecting an option
  // Without useCallback, this function would be recreated on every render
  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}

// useCallback: it solve useEffect() problem of function(Object re-create).[It gives freedom for execution over the component render]
// (It used to memoize a function, ensuring that it only gets recreated when one of its dependencies changes.)
// which can be beneficial for performance, especially when passing the function to child components.
