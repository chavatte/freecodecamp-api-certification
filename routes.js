const express = require("express");
const router = express.Router();
const {
  getCurrentTime,
  parseAndFormatDate,
} = require("./projects/timestamp/index");
const {
  createShortUrl,
  redirectShortUrl,
} = require("./projects/shorturl/index");
const {
  createUser,
  getAllUsers,
  createExercise,
  getLogs,
} = require("./projects/exercise");
const { upload, fileAnalyse } = require("./projects/metadata/index");
const { getWhoamiData } = require("./projects/whoami/index");

router.post("/fileanalyse", upload.single("upfile"), fileAnalyse);

router.post("/users", (req, res) => {
  const { username } = req.body;
  createUser(username, (err, data) => {
    if (err) return console.error(err);
    res.json(data);
  });
});

router.get("/users", (req, res) => {
  getAllUsers((err, data) => {
    if (err) return console.error(err);
    res.json(data);
  });
});

router.post("/users/:_id/exercises", (req, res) => {
  const { _id } = req.params;
  const { description, duration, date } = req.body;
  createExercise(_id, description, duration, date, (err, data) => {
    if (err) return console.error(err);
    res.json(data);
  });
});

router.get("/users/:_id/logs", (req, res) => {
  const { _id } = req.params;
  const { from, to, limit } = req.query;
  getLogs(_id, from, to, limit, (err, data) => {
    if (err) return console.error(err);
    res.json(data);
  });
});

router.post("/shorturl", createShortUrl);
router.get("/shorturl/:short_url", redirectShortUrl);

router.get("/whoami", (req, res) => {
  res.json(getWhoamiData(req));
});

router.get("/", (req, res) => {
  res.json(getCurrentTime());
});

router.get("/:date", (req, res) => {
  const dateParam = req.params.date;
  res.json(parseAndFormatDate(dateParam));
});

module.exports = router;
