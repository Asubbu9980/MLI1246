import mongoose from "mongoose";

const { Schema} = mongoose;

//question model

const questionModel = new Schema({
    questions : { type : Array , default: []},
    answres : { type: Array, default: []},
    createAt : { type: Date, default: Date.now}
});

export default mongoose.model('Question', questionModel)