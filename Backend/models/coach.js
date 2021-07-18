const mongoose = require('mongoose')

var coachSchema= new  mongoose.Schema({
    nom: String,
    prenom: String,
    tel: Number,
    niveau: Number
})
module.exports = mongoose.module('Coach',coachSchema)