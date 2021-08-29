const Quiz = require("../models/quiz");

exports.addQuiz = async (req,res) => {
    var quiz = new Quiz({
        titre : req.body.titre,
        description : req.body.description,
        niveau : req.body.niveau,
        questions: req.body.questions,   
    });
    try {
        const newquiz = await quiz.save();
        res.status(201).json(newquiz);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

exports.getQuiz = async(req,res) =>{
    try{
        const quiz = await Quiz.find()
        res.send(quiz)
    }catch(err){
            res.status(500).json({message:err.message})
        }
}

exports.getQuizById = async(req,res) =>{
    try{
        const id = req.params.id
        const quiz = await Quiz.findById(id)
        res.send(quiz)
    }catch(err){
            res.status(500).json({message:err.message})
        }
}

exports.deleteQuiz = async(req,res) =>{
    try{
        const id = req.params.id
        const quiz = await Quiz.findByIdAndRemove(id)
        res.status(200).json(quiz)
        }catch(err){
            res.status(500).json({message:err.message})
        }
}
exports.updateQuiz = async (req,res) =>{       
    var id = req.params.id

    try{
        const updatedQuiz = await Quiz.findByIdAndUpdate({ "_id": id }, { $set: {  titre : req.body.titre,
            description : req.body.description,
            niveau : req.body.niveau,
            questions: req.body.questions } })
            res.send(updatedQuiz)
        }
        catch(err) {
            res.status(500).json({message : err.message})
        }
} 