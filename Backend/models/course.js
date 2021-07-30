var mongoose = require('mongoose')

var coursSchema = new mongoose.Schema({
    titre: String,
    type: String,
    description: String,
    contenu:  String,
    date: String,
    type: String
   });

module.exports = mongoose.model('Course', coursSchema);