import { useEffect, useState } from "react";
import React from 'react';

export default function Quiz({quiz,question ,questionNumber,setQuestionNumber,setTimeOut,setScore}) {


  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(1000, () => {
      setClassName(a.correct ? "answer correct" : "answer wrong");
      setScore(a.correct ?  (prev)=>prev+1 : (prev)=> prev +0);
    });
      delay(2000, () => {
        if(questionNumber < quiz[4][1].length){
        setQuestionNumber((prev) => prev + 1);
        setSelectedAnswer(null);
        }
       else
       setTimeOut(true)
          
        });
    }
  return (
    <div className="trivia">
                    <div className="question">{question?.question}</div>
                      <div className="answers">
                        {question?.answers.map((a) => (
                      <div key ={a._id} className={selectedAnswer === a ? className : "answer"} onClick={() => !selectedAnswer && handleClick(a)}>
                        {a.choix}
                      </div>
                        ))}
                  </div>
                </div>
             
  );
}