const data = [
	{ id: 123, usuario: "user1" },
	{ id: 124, usuario: "user2" },
];

// Listar Usuario

function listar(req, res) {
	res.json({ data });
}

// Guardar Usuario

function guardar(req, res) {
	res.json({
		message: "Guardado",
	});
}

// Borrar Usuario

function borrar(req, res) {
	res.json({
		message: "Borrado",
	});
}

// Actualizar Usuario

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
