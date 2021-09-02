
const path = require('path')
const router = require("express").Router();
const workout = require("../models");

router.post("/api/workout", ({body}, res) => {
  workout.Workout.create(body)
    .then(workoutRes => {
      res.json(workoutRes);
    })
    .catch(err => {
      res.status(404).json(err);
      
    });
});

router.get("/api/workout", (req, res) => {
  workout.Workout.find({})
  .then(workout => {
      res.json(workout);
  })
  .catch(err => {
      res.json(err);
  });
});




module.exports = router;