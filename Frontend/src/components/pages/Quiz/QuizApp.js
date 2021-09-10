import "./quiz.css";
import React from 'react';
import { useEffect, useMemo, useState } from "react";
import Timer from "./Timer";
import Quiz from "./Quiz";
import axios from 'axios';

import { useParams } from "react-router-dom";

const  QuizApp = ({history}) => {

  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [score, setScore] = useState(0);
  const [quiz,setQuiz] =useState([]);

/* _______________QUIZ.JS___________________*/
  const [question, setQuestion] = useState();
  const [nbr, setNbr] = useState(1);
  const params =useParams();    
  const config = {
    baseURL: "http://localhost:5000",
    headers: {
      "Content-Type": "application/json"
      
    }
    };
  const addScore =async()=>{
    const scoreFinale = score / nbr *100
    await axios.put(`/api/quiz/${params.id}`,{scoreFinale},{
      baseURL: "http://localhost:5000"});
      history.push('/');
  }
  const addScoreFail = async() =>{
    const scoreFinale = score / nbr *100
    await axios.put(`/api/quiz/${params.id}`,{scoreFinale},{
      baseURL: "http://localhost:5000"});
      window.location.reload();
  }

  useEffect( ()=> {
    async function fetchData () {
      const res = await axios.get(`/api/quiz/${params.id}`,config);
      setQuiz(Object.entries(res.data));
      const nb = Object.entries(res.data)[4][1].length;
      setNbr(nb);
      setQuestion(res.data.questions[questionNumber - 1]);
    }
    fetchData();
  },[questionNumber]);


return (
    <div className="app">
        
        <>
          <div className="main">
            <div className="titre">
              <h2>QUIZ : {}</h2>
            </div>
            {timeOut ? (
              <>
              <h1 className="endText">You score: {score} / {nbr}</h1>
              {(score / nbr)>=0.6 ?(<>
                <h1 className="endText">Congratulation </h1>
               <button className="btn" onClick={addScore}>Next</button>
               </>)
              :( <>
              <h1 className="endText"> Sorry you fail  </h1>
              <button className="btn" onClick={addScoreFail}>Retry</button>
              </>)}
              </>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      nbr={nbr}
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                      setQuestionNumber ={setQuestionNumber}
                    />
                  </div>
                </div>
                
                <div className="bottom">
                  <Quiz quiz={quiz} 
                  question={question}
                  questionNumber={questionNumber} 
                  setQuestionNumber={setQuestionNumber}
                   setTimeOut={setTimeOut}
                   setScore={setScore}
                   />
                </div>
              </>
            )}
          </div>
    </>
      
    </div>
  );
}

export default QuizApp;