const connection = require("./connection");

const orm = {

  selectAll : () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM burgers", function(err, dbBurger){
        if(err){
          return reject(err);
        }
        return resolve (dbBurger);
      });
    });
  },
  InsertOne : burgerDataObj => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO burgers SET = ?", [burgerDataObj],function(err, dbBurger){
        if (err){
          return reject(err);
        }
        return resolve(burgerDataObj);
      });
    });
  },
  updateOne : (devoured, burgerid) => {
    return new Promise((resolve, reject) => {
  
      // set devoured to boolean true/false
      devoured = (devoured === "true") 
        ? true : false;
  
      connection.query("UPDATE burgers SET devoured = ? WHERE id = ?", [devoured, burgerid], function(err, dbBurger) {
  
        if (err) {
          return reject(err);
        }
        else if (dbBurger.changedRows === 0) {
          return reject({message: "You probably have the wrong ID"});
        }
        else {
          return resolve(dbBurger);
        }
      })
    })
  }
};

module.exports = orm;