const router = require ("express").Router();
const  Workout = require("../workout");

router.post("/api/workout", ({ body }, res) => {
    Workout.create({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

//get w/o by id

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