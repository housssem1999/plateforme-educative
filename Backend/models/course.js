var mongoose = require('mongoose')

var coursSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: true,
        unique : true
    },
    type: String,
    contenue :[{ type: mongoose.Schema.Types.ObjectId,ref:'upload'}],
    description: String,
    date: String,

});

module.exports = mongoose.model('Course', coursSchema);