// In src/services/workoutService.js

const Workout = require("../database/Workout.js");
const getAllWorkouts = () => {
  const allWorkouts = Workout.getAllWorkouts();
  console.log("service start");
  return allWorkouts;
};

const getOneWorkout = () => {
  return;
};

const createNewWorkout = () => {
  return;
};

const updateOneWorkout = () => {
  return;
};

const deleteOneWorkout = () => {
  return;
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
