const express = require('express');
const apiRoutes = require('./routes');
const cors = require("cors");
const errorRoutes = require('./routes/errors.routes');

const PORT = process.env.PORT || 8000;


const app = express();
app.set("view engine", "ejs");

app.use(cors())

app.use(express.json());

app.get('/', (req, res) => {
  res.render("index")
})

app.get("/reset", (req, res)=>{
  res.render("reset_pass")
});

apiRoutes(app);
errorRoutes(app);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})