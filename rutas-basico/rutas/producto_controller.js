const express = require("express");
const app = express();

const data = [
	{ id: 123, categoria: "Polos", nombre: "Polo Rambo" },
	{ id: 124, categoria: "Polos", nombre: "Polo Levy" },
];

// Listar Producto

app.get("/producto", (req, res) => {
	res.json({
		data,
	});
});

// Guardar Producto

app.post("/producto", (req, res) => {
	res.json({
		message: "Guardado",
	});
});

// Borrar Producto

app.delete("/producto/:id", (req, res) => {
	res.json({
		message: "Borrado",
	});
});

// Actualizar

app.put("/producto/:id", (req, res) => {
	res.json({
		message: "Actualiizado",
	});
});

module.exports = app;
