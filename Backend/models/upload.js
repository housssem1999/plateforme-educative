const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FileSchema = new Schema({
    title: {
        type: String
    },
    soustitre :String,
    files: [Object]
}, {timestamps: true});

module.exports = mongoose.model('File', FileSchema);