const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now(),
    },
    exercises: [
        {
            type: {
                type:String,
                trim:true,
                required: "Whats your exercise?",
            },
            name: {
                type: String,
                trim: true,
                required: "Name the exercise?"
            },
            duration: {
                type: Number,
                trim:true,
                required: "how long you go for?",
            },
            weight:{
                type:Number,
            },
            reps:{
                type:Number,
            },
            sets:{
                type:Number,
            },
            distance:{
                type:Number,
            },
            
        },
    ],
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
