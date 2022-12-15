const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const noteSchema = new mongoose.Schema({
    title: String,
    quantity: Number,
    priority: Boolean,
    description: String
})

const NotesModel = mongoose.model("notes", noteSchema);


module.exports = {
    NotesModel
}