var mongoose = require('mongoose')

var coursSchema = new mongoose.Schema({

    titre: String,
    descreption : String,
    contenue:  String,
    niveau : Number,
    type: {
      type: String,
      enum: ['HTML5', 'JavaScript','Bootstrap' , 'Angular 7', 'Node JS' , 'J2EE'],
      default: 'HTML5'
    },
    date : String,
    status: [{ idCandidat: { type: mongoose.Schema.Types.ObjectId, ref: 'Candidat' }, statu :  {
      type: String,
      enum: ['Valider', 'Non Valider' ],
      default: 'Non Valider',
    } }],
  
   owner : { type: mongoose.Schema.Types.ObjectId, ref: 'Coachs' }
  
})
module.exports = mongoose.model('Cours', coursSchema)