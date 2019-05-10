// import our burgers model
const burgers = require("../models/burger");

module.exports = (app) => {
  
  app.get("/", function(req, res){

    burgers.findAll()
    .then(dbBurgerData => {
      res.render("index", { burgerData: dbBurgerData})
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
  });
}
