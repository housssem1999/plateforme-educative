import { useEffect, useState } from "react";

export default function Timer({ nbr , setTimeOut, questionNumber,setQuestionNumber }) {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) {
       if(questionNumber < nbr)
        setQuestionNumber((prev) => prev + 1);
       else
       setTimeOut(true)
      }
    
    if(timer !== 0){ 
    const interval = setInterval(() => {
    setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);}
    
   
  }, [timer, setTimeOut]);

  useEffect(() => {
    setTimer(30);
  }, [questionNumber]);
  return timer;
}
