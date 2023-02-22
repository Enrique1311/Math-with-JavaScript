console.log(salarios);

// Análisis por persona
function encontrarPersona(personaBuscada) {
	return salarios.find((persona) => persona.name === personaBuscada);
}

function medianaPorPersona(nombrePersona) {
	const trabajos = encontrarPersona(nombrePersona).trabajos; // Devuelve un array de objetos con los datos de la llave trabajos de la persona buscada
	console.log(trabajos);

	const salarios = trabajos.map((elemento) => elemento.salario);
	console.log(salarios);

	const medianaSalarios = MyMath.calcularMediana(salarios);
	console.log(
		`La ediana de salarios de ${nombrePersona} es: ${medianaSalarios}`
	);
	return medianaSalarios;
}

function proyeccionPorPersona(nombrePersona) {
	const trabajos = encontrarPersona(nombrePersona).trabajos;

	let porcentajesCrecimientoSal = [];
	for (let i = 1; i < trabajos.length; i++) {
		const salActual = trabajos[i].salario;
		const salarioPasado = trabajos[i - 1].salario;
		const montoCrecimiento = salActual - salarioPasado;
		const porcentajeCrecimiento = (montoCrecimiento / salarioPasado) * 100;
		porcentajesCrecimientoSal.push(porcentajeCrecimiento);
	}

	const medianaPorcentajesCrecimiento = MyMath.calcularMediana(
		porcentajesCrecimientoSal
	);
	console.log({ porcentajesCrecimientoSal, medianaPorcentajesCrecimiento });

	const proyeccionSalario =
		trabajos[trabajos.length - 1].salario +
		(trabajos[trabajos.length - 1].salario * medianaPorcentajesCrecimiento) /
			100;
	console.log(
		`La proyección para el salario de ${nombrePersona} para 2024 es de $ ${proyeccionSalario} `
	);
	return proyeccionSalario;
}

// Análisis por empresa
const empresas = {};
for (persona of salarios) {
	for (trabajo of persona.trabajos) {
		if (!empresas[trabajo.empresa]) {
			empresas[trabajo.empresa] = {}; // Si todavía no existe la empresa, crea un objeto con el nombre de la empresa
		}
		if (!empresas[trabajo.empresa][trabajo.year]) {
			empresas[trabajo.empresa][trabajo.year] = []; // Si no existe el año dentro de la empresa, crea un array con el año
		}
		empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
	}
}
console.log({ empresas });
