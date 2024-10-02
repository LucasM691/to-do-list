const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(
      process.env.DB_URI,
      

      
    )
    .then(() => {
      console.log("MongoDb Atlas CONECTADO");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectToDb;
