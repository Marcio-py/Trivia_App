import React, { useState } from "react";

import { AnswerObject } from "../App";

//definir os tipos das props para este componente
type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};
// Antes de usar as props
// Especifica que é um componente funcional, e coloca as props dentro das angle bracker
const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (
  //Como estamos a usar tsx quando quisermos pegar expressões de react colocamos o codigo dentro de chavetas
  <div>
    <p className="number">
      Question: {questionNr}/{totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers.map((answer) => (
        <div key={answer}>
          {/* <button disabled={userAnswer} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }}></span>
          </button> */}
        </div>
      ))}
    </div>
  </div>
);

export default QuestionCard;
