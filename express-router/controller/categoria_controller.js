const data = [
	{ id: 123, nombre: "Polos" },
	{ id: 124, nombre: "Pantalones" },
];

// Listar Categorias

function listar(req, res) {
	res.json({ data });
}

// Get categoria

function getCategoria(req, res) {
	res.json({ id: 124, nombre: "Pantalones" });
}

// Guardar Categoría

function guardar(req, res) {
	res.json({
		message: "Guardado",
	});
}

// Borrar Categoría

function borrar(req, res) {
	res.json({
		message: "Borrado",
	});
}

// Actualizar

function update(req, res) {
	res.json({
		message: "Actualiizado",
	});
}

module.exports = {
	update,
	borrar,
	guardar,
	listar,
	getCategoria,
};
