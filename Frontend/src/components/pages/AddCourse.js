import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import './AddCourse.css'

function AddCourse({history}) {
    
    const [error, setError] = useState("");
    const [titre, setTitre] = useState("");
    const [title, setTitle] = useState("");
    const [comp, setComp] = useState(0);
    const [ lengthFile, setlengthFile] = useState(1);
    const [ lengthModule, setlengthModule] = useState(1);
    const [ file, setFile] = useState();
    const [ description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [type, setType] = useState("");
    const [numquestion , setNumQuestions] = useState(1);
    const [questions , setQuestions] = useState([]);
    const [qq,setQq] = useState("");
    
    const [niveau,setNiveau] = useState(1);
    const [correct1,setCorrect1] = useState(false);
    const [correct2,setCorrect2] = useState(false);
    const [correct3,setCorrect3] = useState(false);
    const [correct4,setCorrect4] = useState(false);

    const [choix1,setChoix1] = useState("");
    const [choix2,setChoix2] = useState("");
    const [choix3,setChoix3] = useState("");
    const [choix4,setChoix4] = useState("");

        
    const checkCorr = (e,i) => {
      const check = e.target.checked
      const str = "setCorrect"+`${i}`
      if(check) {
        switch (str) {
          case "setCorrect1": setCorrect1(true); break;
          case "setCorrect2": setCorrect2(true); break;
          case "setCorrect3": setCorrect3(true); break;
          case "setCorrect4": setCorrect4(true); break;
          default:console.log("error");break;
        }
      }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const config = {
            baseURL: "http://localhost:5000",
            headers: {
              "Content-Type": "application/json"
          }};
        try {
          const { data } = await axios.post('/api/courses', {titre, description ,date, type}, config);
          console.log(data._id)
          await axios.put(`/api/courses/${data._id}`,{titre},config);
          
        } catch (error) {
          setError(error.response.data.error);
        }
        history.push('/courses');
    };

    const SubmitFile = async(e) =>{

      e.preventDefault();
     
      const datat = new FormData();
      datat.append('file',file);
      datat.append('title',title)
      try{           
      const res = await axios.post('/api/upload', datat, {
        baseURL: "http://localhost:5000",
        headers: {
          'Content-Type': 'multipart/form-data'
        }});
      }catch(error){
        setError(error.response.res.error);
      }
    }
    const items = [] 
    for(var i=0;i<lengthFile;i++){
      items.push(<div className="inpt">
                  <label>file</label>
                  <input type='file' name="file" required  onChange={(e)=>{setFile(e.target.files[0]); setComp(comp => comp + 1);setTitle( titre + " " + comp.toString());}}></input>
                  {titre.lengthFile != 0  ? <button className="fileBtn" onClick={SubmitFile}>Submit File</button>
                         :<div></div>}
                </div>)}

    const items1 = []
    for(var i=0;i<lengthModule;i++){
      items1.push(
        <div className="inpt">
        <label htmlFor="lengthOf">length of questions in each quiz :</label>
        <input type="number" value={numquestion} onChange={(e)=> setNumQuestions(e.target.value)} min="1" max="15"></input>
      </div>
      )
    }
    const submitQuiz = (e) =>{
      e.preventDefault();
      setQuestions([...questions,{question:qq ,answers:[{choix:choix1,correct:correct1},{choix:choix2,correct:correct2},{choix:choix3,correct:correct3},{choix:choix4,correct:correct4}]}]);
      setCorrect4(false);setCorrect3(false);setCorrect2(false);setCorrect1(false);
    }

    const handleQuiz = async (e)=>{
      e.preventDefault(); 
      
      const config = {
        baseURL: "http://localhost:5000",
        headers: {
          "Content-Type": "application/json"
      }};
    try {
      const { quiz } = await axios.post('/api/quiz', {titre, description ,niveau,questions}, config);
      console.log(questions);
      /*await axios.put(`/api/courses/${quiz._id}`,{titre},config);*/
    } catch (error) {
      setError(error.response.quiz.error);
    }
    
    }


    const items2 = [] 
    
    for(var i=0;i<numquestion;i++){
      items2.push(<div className="inpt">
                  <label>Question {i+1}</label>
                  <input type='text' name="question" required  onChange={(e)=> setQq(e.target.value)} ></input><br></br>

                    <input type='text' name="choix1" required  onChange={(e)=>{setChoix1(e.target.value)}}></input>
                      <input type="radio" name="correct" value={correct1} required onChange={(e)=>{checkCorr(e,1)}}></input>Correct

                    <input type='text' name="choix2" required  onChange={(e)=>{setChoix2(e.target.value)}}></input>
                     <input type="radio" name="correct" value={correct2} required onChange={(e)=>{checkCorr(e,2)}}></input>Correct

                    <input type='text' name="choix3" required  onChange={(e)=>{setChoix3(e.target.value)}}></input>
                     <input type="radio" name="correct" value={correct3} required onChange={(e)=>{checkCorr(e,3)}}></input>Correct

                    <input type='text' name="choix4" required  onChange={(e)=>{setChoix4(e.target.value)}}></input>
                      <input type="radio" name="correct" value={correct4} required onChange={(e)=>{checkCorr(e,4)}}></input>Correct
                      
                      <button className="btn" onClick={submitQuiz}>SubQuestion</button>
                </div>)}


    return (

      <div className="container">
        <form className="form-group" onSubmit={handleSubmit} encType="multipart/form-data">
              <h3 className="titre">Add Course</h3>
              <div className="form-box">  
                <div className="inpt"><label>titre</label>
                  <input type='text'value={titre}  
                    required
                    placeholder="Titre"
                    tabIndex={1}
                    size="35"
                    onChange={(e)=>setTitre(e.target.value)}></input>
                </div>

                <div className="inpt">
                  <label>description</label>
                  <input type='text' name="description"  
                    required
                    placeholder="Description"
                    tabIndex={1}
                    size="35" onChange={(e)=>setDescription(e.target.value)}></input>
                </div>

                                                      
                <div className="inpt">
                  <label>type</label>
                  <input type='text' value={type}
                  required
                  placeholder="Type"
                  tabIndex={1}
                  size="35" onChange={(e)=>setType(e.target.value)}></input>
                </div>
                
                <div className="inpt">
                  <label>date</label>
                  <input type='date' value={date} 
                    required
                    placeholder="Date"
                    tabIndex={1}
                    onChange={(e)=>setDate(e.target.value)}></input>
                </div>
              </div>
                <div className="inpt">
                  <label htmlFor="lengthOfFiles">length of files :</label>
                  <input type="number" value={lengthFile} onChange={(e)=> setlengthFile(e.target.value)} min="1" max="30"></input>
                </div>
                {items}
              
              {/*___________QUIZ_________________*/}
             <form onSubmit={handleQuiz}>
                <div className="inpt"><label>Niveau</label>
                  <input type='number'value={niveau}  
                    required
                    placeholder="Titre"
                    tabIndex={1}
                    size="35"
                    min="1" max="8"
                    onChange={(e)=>setNiveau(e.target.value)}></input>
                </div>
                <div className="inpt">
                  <label htmlFor="lengthOf">length of module :</label>
                  <input type="number" value={lengthModule} onChange={(e)=> setlengthModule(e.target.value)} min="1" max="30"></input>
                </div>
                {items1}
                {items2}
                <button className="btn">QuizSubmit</button>
            </form>
            <button className="btn" >SubmitCourse</button>
        </form>
      </div>
    );
}

export default AddCourse;