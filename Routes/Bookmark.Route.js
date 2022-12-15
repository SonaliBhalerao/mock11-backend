const express = require("express");

const {BookmarkModel} = require('../Models/BookMark');
const {NotesModel} = require('../Models/NoteModel');


const bookmarkRoute = express.Router();

bookmarkRoute.get('/bookmarks', async (req, res)=>{
    const bookmarks = await BookmarkModel.find();
    res.send(bookmarks);
})

bookmarkRoute.post('/addToBookmark/:id', async(req, res)=>{
    const id = req.params.id;
    //const {title,  quantity, priority, description} = req.body;
    
    const note = await NotesModel.findOne({_id: id});
    console.log(note)
    const {title,  quantity, priority, description} = note;
    const newBookmark = new BookmarkModel({
        title, 
        quantity,
        priority,
        description
    });
    await newBookmark.save();
    res.send({message : "Added to Bookmark Successfully", newBookmark});
})

bookmarkRoute.delete('/bookmarks/delete/:id', async(req, res)=>{
    const id = req.params.id;
    
    const note = await BookmarkModel.findOne({_id: id});
    const newNote = await BookmarkModel.findOneAndDelete({_id: id});
    return res.send("Note removed Successfully!")
})

module.exports=bookmarkRoute