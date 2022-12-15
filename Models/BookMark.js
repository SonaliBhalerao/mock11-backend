const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const bookmarkSchema = new mongoose.Schema({
    title: String,
    quantity: Number,
    priority: Boolean,
    description: String
})

const BookmarkModel = mongoose.model("bookmarks", bookmarkSchema);


module.exports = {
    BookmarkModel
}