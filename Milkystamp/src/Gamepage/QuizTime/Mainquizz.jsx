import React, { useContext, useEffect, useRef, useState } from 'react';
import { CounterContext } from '../../context/Contextapi';
import './Quiz.css'; 

function Mainquizz() {
  const counterState = useContext(CounterContext);
  const [index, setIndex] = useState(0);
  const [lock, setLock] = useState(false);
  const [question, setQuestion] = useState(counterState.data[index]);
  const [correct, setCorrect] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameOver, setGameover] = useState(true);

  const option1 = useRef(null);
  const option2 = useRef(null);
  const option3 = useRef(null);
  const option4 = useRef(null);

  let optionArry = [option1, option2, option3, option4];


  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleNext(); 
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [index]);






  const handleNext = () => {
    setLock(false);
    setTimeLeft(30); 
    if (index < counterState.data.length - 1) {
      const newIndex = index + 1;
      setIndex(newIndex);
      setQuestion(counterState.data[newIndex]);
    }else{
      setGameover(false);
    }
    optionArry.forEach((e) => {
      if (e.current) {
        e.current.classList.remove('correct');
        e.current.classList.remove('wrong');
      }
    });
  };

  const checkAnswer = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add('correct');
        setLock(true);
        setCorrect(prev => prev + 1);
      } else {
        e.target.classList.add('wrong');
        optionArry[question.ans - 1].current.classList.add('correct');
        setLock(true);
      }
      clearInterval(); 
      // setTimeLeft(30); 
    }
  };

  return (
    <>
    {
      gameOver==true?
      <div className="quiz-container">
        <h1 className="quiz-title">{timeLeft}: MILKY BITE</h1>
        <hr className="quiz-divider" />
        <h2 className="quiz-question">{index + 1}. {question.question}</h2>
        <ul className="quiz-options">
          <li className="quiz-option" onClick={(e) => { checkAnswer(e, 1) }} ref={option1}>{question.option1}</li>
          <li className="quiz-option" onClick={(e) => { checkAnswer(e, 2) }} ref={option2}>{question.option2}</li>
          <li className="quiz-option" onClick={(e) => { checkAnswer(e, 3) }} ref={option3}>{question.option3}</li>
          <li className="quiz-option" onClick={(e) => { checkAnswer(e, 4) }} ref={option4}>{question.option4}</li>
        </ul>
        <div className="timer">{timeLeft} seconds left</div>
        <button className="quiz-button" onClick={handleNext}>NEXT</button>
        <button className="quiz-button" onClick={()=>setGameover(false)}>STOP</button>
        <div className="quiz-indexes">{index + 1} of {counterState.data.length} questions</div>
      </div>
      : 
      <div className="result-popup animate">
          <h2 className="result-title">Game Over!</h2>
          <div className="result-score">{correct}/{index+1} Correct</div>
        </div>
    }
    </>
    
  )
}

export default Mainquizz;
