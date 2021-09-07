
const path = require('path')
const router = require("express").Router();
const workout = require("../models");

router.post("/api/workouts", ({body}, res) => {
  console.log(workout);
  workout.create(body)
    .then(workoutRes => {
      res.json(workoutRes);
    })
    .catch(err => {
      res.status(404).json(err);
      
    });
});

router.get("/api/workouts/range", (req, res) => {
  console.log(workout)
  workout.find({})
  .then(workout => {
      res.json(workout);
  })
  .catch(err => {
      res.json(err);
  });
});

router.get("/api/workouts", (req, res) => {
  console.log(workout)
  workout.find({})
  .then(workout => {
      res.json(workout);
  })
  .catch(err => {
      res.json(err);
  });
});

router.put("/api/workouts/:id", ({body, params}, res) => {
  console.log(params.id)
  workout.findByIdAndUpdate({_id : params.id}, {$push: {exercises : body}})
    .then(workoutRes => {
      res.json(workoutRes);
    })
    .catch(err => {
      res.status(404).json(err);
      
    });
});






module.exports = router;