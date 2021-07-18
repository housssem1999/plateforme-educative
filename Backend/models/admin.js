var mongoose = require('mongoose')

var adminSchema = new mongoose.Schema({
    
    nom:  String,
    prenom: String
  
})
module.exports = mongoose.model('Admin', adminSchema)