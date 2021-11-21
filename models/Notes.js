const mongoose = require('mongoose');

const NotesSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    detail: {
        type: String,
        require: true,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Notes', NotesSchema);