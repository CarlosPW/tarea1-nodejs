const express = require("express");
const app = express();

app.use(require("./rutas/index.js"));

app.listen(8080, () => {
	console.log("Servidor UP");
});
