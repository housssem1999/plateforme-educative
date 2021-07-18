const mongoose = require('mongoose')

var apprenantSchema= new  mongoose.Schema({
    nom: String,
    prenom: String,
    tel: Number,
    niveau: Number
})
module.exports = mongoose.module('Coach',apprenantSchema)