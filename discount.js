const calcButton = document.querySelector('#calculate');
const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const h3Result = document.querySelector('#result');
const h4Result = document.querySelector('#discount');

calcButton.addEventListener('click', calculatePrice);

// const promosObj = {
// 	cn1210: 10,
// 	cn1220: 20,
// 	cn1230: 30,
// 	cn1240: 40,
// 	cn1250: 50,
// };

const promosList = [
	{
		name: 'cn1210',
		discount: 10,
	},
	{
		name: 'cn1220',
		discount: 20,
	},
	{
		name: 'cn1230',
		discount: 30,
	},
];

function calculatePrice() {
	const price = Number(inputPrice.value);
	const coupon = inputCoupon.value;

	if (!price || !coupon) {
		h3Result.innerText = '¡Por favor, ingresa los valores!';
		return;
	}

	let discount;

	// couponElement representa cada objeto del array
	function getDiscount(couponElement) {
		return couponElement.name == coupon;
	}
	// Devuelve el objeto que coincide con nuestro input
	const couponFound = promosList.find(getDiscount);

	if (couponFound) {
		discount = couponFound.discount;
	} else {
		h4Result.innerText = '¡Cupón no válido!';
		h3Result.innerText = 'Debes pagar el total del valor del producto...';
		return;
	}

	// Condicional para los objetos
	// if (promosObj[coupon]) {
	// 	discount = promosObj[coupon];
	// } else {
	// 	h4Result.innerText = '¡Cupón no válido!';
	// 	h3Result.innerText = 'Debes pagar el total del valor del producto...';
	// 	return;
	// }

	// Condicional sin objetos ni arrays
	// switch (coupon) {
	// 	case 'CN1240':
	// 		discount = 15;
	// 		break;
	// 	case 'CN1250':
	// 		discount = 25;
	// 		break;
	// 	default:
	// 		h4Result.innerText = '¡Cupón no válido!';
	// 		h3Result.innerText = 'Debes pagar el total del valor del producto...';
	// 		return;
	// }

	const result = price - (price * discount) / 100;

	h4Result.innerText = 'Tu descuent es de ' + discount + '%';
	h3Result.innerText = 'El precio con descuento es: $' + result;
}
