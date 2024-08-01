const recordService = require("../services/recordService");

const getRecordForWorkout = (req, res) => {
  try {
    // console.log(req);
    // debugger;
    const allRecords = recordService.getRecordForWorkout(req.params.workoutId);
    res.send({ status: "Ok", data: allRecords });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: "FAILED",
      data: { error: error?.message || error },
    });
  }
};
// const getOneRecord = (req, res) => {
//     const {
//         params: { workoutId },
//     } = req;
//     if (!workoutId) {
//         res.status(400).send({
//             status: "FAILED",
//             data: {
//                 error: "Parameter ':workoutId' can not be empty",
//             },
//         });
//     }
//     try {
//         const record = recordService.getOneRecord(workoutId);
//         res.send({ status: "OK", data: record });
//     } catch (error) {
//         res.status(error?.status || 500).send({
//             status: "FAIL
//             ED",
//             data: { error: error?.message || error },
//         });
//     }
// };
//

module.exports = {
  getRecordForWorkout,
};
