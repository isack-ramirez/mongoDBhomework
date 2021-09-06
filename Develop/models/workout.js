const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutScheme = new Schema(
  {


    day: {
      type: Date,
      default: () => new Date()
    },

    exercises: [{

      type: {
        type: String,
        trim: true,
        required: "please enter an exercise"
      },

      name: {
        type: String,
        trim: true,
        required: "please enter an exercise"
      },

      weight: {
        type: Number
      },

      sets: {
        type: Number
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
    ]



  }
);

const Workout = mongoose.model("Workout", workoutScheme);

module.exports = Workout;
