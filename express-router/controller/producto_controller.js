const data = [
	{ id: 123, categoria: "Polos", nombre: "Polo Rambo" },
	{ id: 124, categoria: "Polos", nombre: "Polo Levy" },
];

// Listar Productos

function listar(req, res) {
	res.json({ data });
}

// Guardar Productos

function guardar(req, res) {
	res.json({
		message: "Guardado",
	});
}

// Borrar Productos

function borrar(req, res) {
	res.json({
		message: "Borrado",
	});
}

// Actualizar Productos

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
};
