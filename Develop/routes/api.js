
const path = require('path')
const router = require("express").Router();
const workout = require("../models/workout");

router.post("/api/workouts", ({body}, res) => {
  workout.Workout.create(body)
    .then(workoutRes => {
      res.json(workoutRes);
    })
    .catch(err => {
      res.status(404).json(err);
      
    });
});

router.get("/api/workouts", (req, res) => {
  workout.Workout.find({})
  .then(workout => {
      res.json(workout);
  })
  .catch(err => {
      res.json(err);
  });
});




module.exports = router;