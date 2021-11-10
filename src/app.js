const express = require('express');
const morgan = require('morgan');
const app = express();

//import { createRol } from "./libs/inicialSetups";

app.set('port', process.env.PORT||8080);

app.use (morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//createRol();

//las uris
app.use("/api/user", require("./routes/user.routes"));
app.use("/api/rol", require("./routes/rol.routes"));
app.use("/api/carro", require("./routes/carro.routes"));
app.use("/api/marca",require("./routes/marca.routes"));
app.use("/api/categoria",require("./routes/categoria.routes"));
app.use("/api/cliente",require("./routes/cliente.routes"));
app.use("/api/tarea",require("./routes/tarea.routes"));
app.use("/api/servicio",require("./routes/servicio.routes"));

module.exports = app;

