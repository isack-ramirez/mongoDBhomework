
const path = require('path')
const router = require("express").Router();
const workout = require("../models/workout.js");

router.post("/api/workouts", ({body}, res) => {
  workout.create(body)
    .then(workoutRes => {
      res.json(workoutRes);
    })
    .catch(err => {
      res.status(404).json(err);
      
    });
});




module.exports = router;