const router = require("express").Router();
const Transaction = require("../models/workout.js");

router.post("/api/transaction", ({body}, res) => {
  Transaction.create(body)
    .then(workoutRes => {
      res.json(workoutRes);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});




module.exports = router;