const express = require("express");
const router = express.Router();

// Do work here
router.get("/", (req, res) => {
  const nando = { name: "nando", age: 100, cool: true };
  // res.send("Hey! It works!");
  // res.json(nando);
  // res.send(req.query.name);
  // res.json(req.query);
  res.render("hello", {
    name: req.query.name,
    age: 21,
    title: "I love food"
  });
});

router.get("/reverse/:name", (req, res) => {
  const reverse = [...req.params.name].reverse().join("");
  res.send(reverse);
});

module.exports = router;
