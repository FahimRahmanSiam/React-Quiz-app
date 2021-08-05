import './App.css';
import React,{useState,useContext} from 'react';
import MainMenu from './components/MainMenu.js';
import Quiz from './components/Quiz.js';
import EndScreen from './components/EndScreen.js';
import { QuizContext } from './Helpers/Contexts.js';

function App() {

  const[gameState,setGameState]=useState("menu");
  const[score,setScore]=useState(0);

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <h2>Test Your knowledge</h2>
      <QuizContext.Provider value={{gameState,setGameState,score,setScore}}>
        {gameState==="menu" && <MainMenu/>}
        {gameState==="quiz" && <Quiz/>}
        {gameState==="endScreen" && <EndScreen/>}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
