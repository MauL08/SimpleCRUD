const express = require('express');
const router = express.Router();
const Notes = require('../models/Notes');

// Get Notes
router.get('/get', async (req, res) => {
    try {
        const getNotes = await Notes.find();
        res.json(getNotes);
    } catch(err) {
        res.json(err);
    }
});

// Get Specific Note
router.get('/get/:ID', async (req, res) => {
    try {
        const getNote = await Notes.findById(req.params.ID);
        res.json(getNote);
    } catch(err) {
        res.json(err);
    }
});

// Add Note
router.post('/post', async (req, res) => {
    const note = new Notes({
        title: req.body.title,
        detail: req.body.detail,
    });

    try {
        const saveNote = await note.save();
        res.json(saveNote);
    } catch(err) {
        res.json(err);
    }
});

// Delete Note
router.delete('/delete/:ID', async (req, res) => {
    try {
        const deleteNote = await Notes.deleteOne({_id: req.params.ID});
        res.json(deleteNote);
    } catch(err) {
        res.json(err);
    }
});

// Delete All Note
router.delete('/delete', async (req, res) => {
    try {
        const deleteNotes = await Notes.deleteMany({});
        res.json(deleteNotes);
    } catch(err) {
        res.json(err);
    }
});

// Update Note
router.patch('/patch/:ID', async (req, res) => {
    try {
        const updateNote = await Notes.updateOne(
            {_id: req.params.ID},
            {$set: {
                title: req.body.title,
                detail: req.body.detail,
            }
        });
        res.json(updateNote);
    } catch(err) {
        res.json(err);
    }
});


module.exports = router;
