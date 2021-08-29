var mongoose = require('mongoose')

var quizSchema = new mongoose.Schema({

    titre : String,
    description : String,
    niveau:  Number,
    questions : [{question : String, choix1 : String,choix2 : String,choix3 : String,choix4 : String, reponse: String}],
  
})
module.exports = mongoose.model('Quiz', quizSchema)