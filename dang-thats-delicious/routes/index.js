const express = require("express");
const router = express.Router();

// Do work here
router.get("/", (req, res) => {
  const nando = { name: "nando", age: 100, cool: true };
  // res.send("Hey! It works!");
  // res.json(nando);
  res.send(req.query.name);
});

module.exports = router;
