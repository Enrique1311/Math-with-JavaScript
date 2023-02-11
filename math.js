console.group('Cuadrado');

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
	ladoCuadrado,
	perimetroCuadrado,
	areaCuadrado,
});

function calcularCuadrado(lado) {
	return {
		perimetro: lado * 4,
		area: lado * lado,
	};
}
console.log(calcularCuadrado(10));

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.groupEnd('Cuadrado');

console.group('Triangulo');

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

function calcularTriangulo(lado1, lado2, base, altura) {
	return {
		perimetro: lado1 + lado2 + base,
		area: (base * altura) / 2,
	};
}
calcularTriangulo(5, 6, 7, 8);

console.log({
	ladoTriangulo1,
	ladoTriangulo2,
	baseTriangulo,
	alturaTriangulo,
	perimetroTriangulo,
	areaTriangulo,
	altura,
});

console.groupEnd('Triangulo');

console.group('Circulo');

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1415;

const circunsferencia = diametroCirculo * PI;
const areaCirculo = radioCirculo ** 2 * PI;

console.log({
	radioCirculo,
	diametroCirculo,
	// PI,
	circunsferencia,
	areaCirculo,
});

function calcCirculo(radio) {
	const diametro = radio * 2;
	const radioAlCuadrado = Math.pow(radio, 2);

	return {
		circunsferencia: diametro * Math.PI,
		area: radioAlCuadrado * Math.PI.toFixed(3),
	};
}
console.log(calcCirculo(4));

console.groupEnd('Circulo');
