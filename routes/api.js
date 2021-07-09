const router = require("express").Router();
const Workout = require("../models/workout");

router.post("/api/workouts", (req, res) => {
  Workout.create()
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
//get w/o by id

// db.Workout.aggregate([
//   { $group: {_id {name: "$name", duration: "$duration"}}}
// ])

router.get("/api/workouts", (req, res) => {
  Workout.aggregate([
    { $addFields:{
      totalDuration: {$sum: "$exercises.duration"},
      totalWeight: {$sum: "$exercises.weight"}
    }}

    ])
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
    .catch((err) => {
      console.log(err)
      res.status(400).json(err);
    })
})

router.get("/api/workouts/range", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
        totalWeight: { $sum: "$exercises.weight" }
      },
    },
  ])
    .sort({ _id: -1 }).limit(7)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      console.log(err)
      res.status(400).json(err);
    })
})



router.get("/api/workouts/:id", ({ params }, res) => {
  Workout.findById(params.id)
    .sort({ _id: -1 })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      console.log(err)
      res.status(400).json(err);
    });
})

//look up .aggregate from mongoose 










router.delete("/api/workouts/:id", ({ params }, res) => {
  Workout.findByIdAndDelete(params.id)
    .then(() => {
      return res.json(true);
    })
    .catch(err => {
      console.log(err)
      res.status(400).json(err);
    });
});

module.exports = router;