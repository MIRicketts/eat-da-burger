// import our burgers model
const burgers = require("../models/burger");

module.exports = (app) => {
  
  app.get("/", function(req, res){

    burgers.findAll()
    .then(dbBurgerData => {
      res.render("index", { burgers, dbBurgerData})
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
  });
}
