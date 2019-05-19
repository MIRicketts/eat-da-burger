// Models folder is talking to the database
// Connnection.js is connecting mysql database to page
// burgers.js is reading the info need from mysql database

const connection = require("./connection");

// find all burgers
const findAll = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM burgers", function (err, dbBurgerData) {
      if (err) {
        return reject(err);
      }
      return resolve(dbBurgerData);
    });
  });

};

// find a burger by id
const findById = burgerId => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM burgers WHERE id = ?", [burgerId], function (err, dbBurgerData) {
      if (err) {
        return reject(err);
      }
      return resolve(dbBurgerData);
    });
  });
};

// create burger/insert burger
const create = burgerDataobj => {
  return new Promise((resolve, reject) => {
    connection.query("INSERT INTO burgers SET ?", [burgerDataobj], function (err, dbBurgerData) {
      if (err) {
        return reject(err)
      }
      return resolve(dbBurgerData);
    });
  });
};

// UPDATE burgers (set value of sleepy to true or false)
const update = (devour, burgerId) => {
  return new Promise((resolve, reject) => {
    devour = (devour === "true") ?
      true : false;

    connection.query("UPDATE burgers SET devoured = ? WHERE id = ?", [devour, burgerId], function (err, dbBurgerData) {
      if (err) {
        return reject(err)
      } else if (dbBurgerData.changeRows === 0) {
        return reject({
          message: "You may have used the wrong id"
        })
      } else {
        return resolve(dbBurgerData);
      }
    })
  })
}

// Delete a burger

const remove = (burgerId) => {
  return new Promise((resolve, reject) => {

    connection.query("DELETE FROM burgers WHERE id = ?", [burgerId], function(err, dbBurgerData){
      if (err){
        return reject(err);
      }
      else if(dbBurgerData.affectedRows === 0 ){
        return rejected({ message: "You may have used the wrong id"})
      }
      else {
        return resolve(dbBurgerData); 
      }
    })
  })
}

// export all of our new functions as methods of an object
module.exports = {
  findAll,
  findById,
  create,
  update,
  remove
};