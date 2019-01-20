exports.myMiddleware = (req, res, next) => {
  req.name = "Nando";
  next();
};

exports.homePage = (req, res) => {
  res.render("index", {
    title: "Home",
    name: req.name
  });
};
