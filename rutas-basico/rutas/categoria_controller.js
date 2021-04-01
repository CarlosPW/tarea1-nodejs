const express = require("express");
const app = express();

const data = [
	{ id: 123, nombre: "Polos" },
	{ id: 124, nombre: "Pantalones" },
];

// Listar Categorias

app.get("/categoria", (req, res) => {
	res.json({
		data,
	});
});

// Guardar Categoría

app.post("/categoria", (req, res) => {
	res.json({
		message: "Guardado",
	});
});

// Borrar Categoría

app.delete("/categoría/:id", (req, res) => {
	res.json({
		message: "Borrado",
	});
});

// Actualizar

app.put("/categoría/:id", (req, res) => {
	res.json({
		message: "Actualiizado",
	});
});

module.exports = app;
