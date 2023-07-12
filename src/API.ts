import { shuffleArray } from "./utils";

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}
//exporta questão e especifica as suas variaveis
export type Question ={
    category:string;
    correct_answer:string;
    difficulty:string;
    incorrect_answers:string[];
    question:string;
    type:string;
}
//Queremos todas as respostas no mesmo local para adicionar ao UI 
export type QuestionState = Question & { answers: string[]};


export const fetchQuizQuestions = async (amount: number, difficulty:Difficulty) =>{
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
    // Duplo await primeiro esperamos o fetch, depois esperamos converter para json
    const data = await(await fetch(endpoint)).json();
    console.log(data)
    return data.results.map((question: Question) =>({
            ...question,
            answer: shuffleArray([...question.incorrect_answers, question.correct_answer])
        }
    ))
}