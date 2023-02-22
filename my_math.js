const MyMath = {};

// Promedio con ciclo "for"
MyMath.calcularPromedioFor = function calcularPromedioFor(array) {
	let suma = 0;

	for (i = 0; i < array.length; i++) {
		suma += array[i];
	}
	const promedio = suma / array.length;
	console.log('Promedio con ciclo for: ' + promedio);
	return promedio;
};
//MyMath.calcularPromedioFor([1, 2, 3, 4, 50]);

// Promedio con método "reduce()"
MyMath.calcularPromedioReduce = function calcularPromedioReduce(array2) {
	const sumaArray2 = array2.reduce(
		// El reduce recibe una función que suma todos los elementos del array
		(sumaDeValores, valorRecorrido) => (sumaDeValores += valorRecorrido)
	);
	const prom = sumaArray2 / array2.length;
	console.log('Promedio con reduce: ' + prom);
	return prom;
};
//MyMath.calcularPromedioReduce([10, 15, 25, 30]);

// calcular mediana de un array
MyMath.esPar = function esPar(array3) {
	if (array3.length % 2 === 0) {
		return true;
	} else {
		return false;
	}
	//return !(array3.length % 2); // devuelve lo mismo que el condicional
};

MyMath.calcularMediana = function calcularMediana(listaDesordenada) {
	const array3 = MyMath.ordenarArray(listaDesordenada);
	const arrayEsPar = MyMath.esPar(array3);

	if (arrayEsPar) {
		const indexSegundaMitad = array3.length / 2;
		const indexPrimeraMitad = indexSegundaMitad - 1;
		const primeraMitad = array3[indexPrimeraMitad];
		const segundaMitad = array3[indexSegundaMitad];

		const arrayMitades = [primeraMitad, segundaMitad];

		const medianaListaPar = MyMath.calcularPromedioReduce(arrayMitades);

		console.log(indexPrimeraMitad);
		console.log(indexSegundaMitad);
		console.log('La lista es par y su mediana es: ' + medianaListaPar);
		return medianaListaPar;
	} else {
		const indexMitadListaImpar = Math.ceil(array3.length / 2) - 1;
		const medianaListaImpar = array3[indexMitadListaImpar];
		console.log('La lista es impar y su mediana es: ' + medianaListaImpar);
		return medianaListaImpar;
	}
};
//MyMath.calcularMediana([40, 55, 10, 20, 30, 70, 80]);

// Ordenar un array
MyMath.ordenarArray = function ordenarArray(listaDesordenada) {
	function ordenarListaConSort(primerValor, siguienteValor) {
		if (primerValor > siguienteValor) {
			return 1;
		} else if (primerValor == siguienteValor) {
			return 0;
		} else {
			return -1;
		}

		// Cuando retorna un número positivo, el sort invierte las posiciones
		// Cuando retorna 0, no cambia nada
		// Cuando retorna un número negativo, no cambia nada

		//return siguienteValor - primerValor; // de mayor a menor
		return primerValor - siguienteValor; // de menor a mayor
	}

	//const listaOrdenada = listaDesordenada.sort(ordenarListaConSort);
	const listaOrdenada = listaDesordenada.sort((a, b) => a - b); // con arrow function

	console.log('Lista ordenada: ', listaOrdenada);
	return listaOrdenada;
};

//MyMath.ordenarArray([8, 5, 9, 2, 1, 6]);

MyMath.calcularModa = function calcularModa(lista) {
	const listCount = {};

	for (let i = 0; i < lista.length; i++) {
		const elem = lista[i];

		if (listCount[elem]) {
			listCount[elem] += 1;
		} else {
			listCount[elem] = 1;
		}
	}
	const listaArray = Object.entries(listCount);
	const listaOrdenada = ordenarListaBidimensional(listaArray, 1);
	const listaOrdenadaMaxNum = listaOrdenada[listaOrdenada.length - 1];
	const moda = listaOrdenadaMaxNum[0];
	console.log({ listCount, listaArray, listaOrdenada, listaOrdenadaMaxNum });
	console.log('La moda es: ' + listaOrdenadaMaxNum[0]);
	return moda;
};
//MyMath.calcularModa([1, 1, 1, 2, 3, 4, 4, 4, 4, 5, 5, 6, 7, 8]);

// Ordenar un array
MyMath.ordenarArray = function ordenarArray(listaDesordenada) {
	function ordenarListaConSort(primerValor, siguienteValor) {
		return primerValor - siguienteValor; // de menor a mayor
	}
	const lista = listaDesordenada.sort(ordenarListaConSort);
	return lista;
};

//MyMath.ordenarArray([8, 5, 9, 2, 1, 6]);

// Ordenar lista bidimensional
MyMath.ordenarListaBidimensional = function ordenarListaBidimensional(
	listaDesordenada,
	i
) {
	function ordenarListaConSort(primerValor, siguienteValor) {
		return primerValor[i] - siguienteValor[i];
	}
	const lista = listaDesordenada.sort(ordenarListaConSort);
	console.log(lista);
	return lista;
};
//MyMath.ordenarListaBidimensional(
// 	[
// 		['a', 2],
// 		['b', 3],
// 		['c', 4],
// 		['d', 1],
// 	],
// 	1
// );
