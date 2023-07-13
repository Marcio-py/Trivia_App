import React, { useState } from "react";

import { AnswerObject } from "../App";

import { Wrapper, ButtonWrapper } from "./QuestionsCard.styles";

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

  <Wrapper>
    <p className="number">
      Question: {questionNr}/{totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {/* na props coorect esta a ser usado optional chaining,logo se a prop userAnswer  estiver vazia então vai retornar undefined ou  null em vez de erro */}
      {answers.map((answer) => (
        <ButtonWrapper
          key={answer}
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
        >
          <button
            disabled={userAnswer ? true : false}
            value={answer}
            onClick={callback}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }}></span>
          </button>
        </ButtonWrapper>
      ))}
    </div>
  </Wrapper>
);

export default QuestionCard;
