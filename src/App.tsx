import React, { useState } from "react";
import { fetchQuizQuestions } from "./API";
// components
import QuestionCard from "./components/QuestionCard";
//Types dificulty
import { QuestionState, Difficulty } from "./API";

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  CorrectAnswer: string;
};

const TOTAL_QUESTION = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTION, Difficulty.EASY));

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};
  // Vamos trabalhar nesta questão a seguir
  const nextQuestion = (e: React.MouseEvent<HTMLButtonElement>) => {};

  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score</p>
      <p>loading Question</p>
      {/* <QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTION}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer = {userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;
