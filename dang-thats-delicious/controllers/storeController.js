exports.homePage = (req, res) => {
  res.render("index", {
    title: "Home",
    name: req.name
  });
};

exports.addStore = (req, res) => {
  res.send("It works!");
};
