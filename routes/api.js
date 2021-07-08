const router = require ("express").Router();
const  Workout = require("../models/workout");

router.post("/api/workouts", ({ body }, res) => {
    Workout.create({body})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

//get w/o by id

router.get("/api/workouts/:id", (req, res) =>{
  console.log(req)
Workout.findById({ _id: req.params.id})
})

//look up .aggregate from mongoose 










  router.delete("/api/workout", ({ body }, res) => {
    Workout.findByIdAndDelete(body.id)
      .then(() => {
        return res.json(true);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  module.exports = router;