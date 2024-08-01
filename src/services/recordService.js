// In src/services/recordService.js
const Record = require("../database/Record");

const getRecordForWorkout = (workoutId) => {
  try {
    // console.log("..", workoutId);

    const record = Record.getRecordForWorkout(workoutId);
    return record;
  } catch (error) {
    throw error;
  }
};
module.exports = { getRecordForWorkout };
