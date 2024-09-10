const express = require("express");
const patch = require("path");
const routes = require("./routes/routes");




const app = express();
const port = 3000


app.set("view engine", "ejs")
app.use(express.static(patch.join(__dirname, "public")))
app.use(routes)



app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${3000}`)
});
