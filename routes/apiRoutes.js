const burgers = require("../models/burger");

module.exports = app => {

  // GET all burgers
  app.get("/api/burgers", function(req,res){
    burgers.findAll()
    .then(dbBurgerData => res.json(dbBurgerData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
  });

  // create/POST a new burger
  app.post("/api/burgers", function(req, res){

    burgers.create(req.body)
    .then(dbBurgerData => res.json(dbBurgerData))
    .catch(err =>{
      console.log(err);
      res.json(err);
    });
  });

  // get a burger by id
  app.get("/api/burgers/:id", function(req, res){
    burgers.findById(req, params.id)
    .then(dbBurgerData => res.json(dbBurgerData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
  });


  // PUT/update a burgers devoured to true/false by id
  app.put("/api/burgers/:id", function(req, res){
    console.log('put route hit');
    burgers.update(req.body.devoured, req.params.id)
    .then(dbBurgerData => res.json(dbBurgerData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
  });

  // Delete a burger by its id
  app.delete("/api/burgers/:id", function(req, res){
    burgers.remove(req.params.id)
    .then(dbBurgerData => res.json(dbBurgerData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
  });
}
