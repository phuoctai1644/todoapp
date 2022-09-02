import mongoose from "mongoose";
import slug from 'mongoose-slug-generator'

mongoose.plugin(slug)

const Schema = mongoose.Schema

const Todo = new Schema({
    content: String,
    description: String,
}, {
    timestamps: true
})

export default mongoose.model('Todo', Todo)
