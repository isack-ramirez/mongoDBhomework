const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutScheme = new Schema(
  {

    type: {
      type: String,
      trim: true,
      required: "Please enter an exercise."
    },

    name: {
      type: String,
      trim: true,
      required: "Enter an exercise name"
    },

    weight: {
      type: Number,

    },

    sets: {
      type: Number,

    },

    reps: {
      type: Number,
 
    },

    duration: {
      type: Number,

    },

    distance: {
      type: Number,

    }



    
  }
);

const workout = mongoose.model("Workout", workoutScheme);

module.exports = workout;
