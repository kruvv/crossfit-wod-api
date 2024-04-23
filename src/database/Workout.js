const DB = require("./db.json");

const getAllWorkouts = () => {
  console.log(DB.workouts);
  return DB.workouts;
};

module.exports = {
  getAllWorkouts,
};
