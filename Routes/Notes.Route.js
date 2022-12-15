const express = require("express");
const {NotesModel} = require('../Models/NoteModel');

const noteRoute = express.Router();

noteRoute.get('/notes', async(req, res)=>{
    const notes = await NotesModel.find();
    res.send(notes);
})
noteRoute.post('/createNote', async(req, res)=>{
    const {title,  quantity, priority, description} = req.body;

    
    const newNote = new NotesModel({
        title, 
        quantity,
        priority,
        description
    });
    await newNote.save();
    res.send({message : "Note Created Successfully", newNote});
})

noteRoute.delete('/notes/delete/:id', async(req, res)=>{
    const id = req.params.id;
    
    const note = await NotesModel.findOne({_id: id});
    const newNote = await NotesModel.findOneAndDelete({_id: id});
    return res.send("Note Deleted Successfully!")
})

module.exports = noteRoute