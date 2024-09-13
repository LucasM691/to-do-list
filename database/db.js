const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(
      "mongodb+srv://admin:admin@todolist.0ze51.mongodb.net/?retryWrites=true&w=majority&appName=todolist",

      
    )
    .then(() => {
      console.log("MongoDb Atlas CONECTADO");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectToDb;
