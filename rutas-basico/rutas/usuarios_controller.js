const express = require("express");
const app = express();

const data = [
	{ id: 123, usuario: "user1" },
	{ id: 124, usuario: "user2" },
];

// Listar Usuario

app.get("/usuario", (req, res) => {
	res.json({
		data,
	});
});

// Guardar Usuario

app.post("/usuario", (req, res) => {
	res.json({
		message: "Guardado",
	});
});

// Borrar Usuario

app.delete("/usuario/:id", (req, res) => {
	res.json({
		message: "Borrado",
	});
});

// Actualizar

app.put("/usuario/:id", (req, res) => {
	res.json({
		message: "Actualiizado",
	});
});

module.exports = app;
