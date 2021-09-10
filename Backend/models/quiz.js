var mongoose = require('mongoose')

var quizSchema = new mongoose.Schema({

    titre : String,
    description : String,
    niveau:  Number,
    score : Number,
    questions : [{
        question : String,
        answers :[
            {choix : String,correct : Boolean},
            {choix : String,correct : Boolean},
            {choix : String,correct : Boolean},
            {choix : String,correct : Boolean}]
        }],
  
})
module.exports = mongoose.model('Quiz', quizSchema)