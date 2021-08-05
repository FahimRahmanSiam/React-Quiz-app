import React,{ useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts.js';
import '../App.css';
import { Questions } from '../Helpers/QuestionBank';

export default function EndScreen(){

    const {score,setScore,setGameState}=useContext(QuizContext);
    const restartQuiz=()=>{      
        setScore(0);
        setGameState("menu");
    }
    return(
        <div className='EndScreen'>
            <h3>Quiz is finished!!</h3>Thank you for participating.
            <h3>You answered <b>{score}</b> correctly out of <b>{Questions.length} </b>Questions</h3>
            <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
    )
}