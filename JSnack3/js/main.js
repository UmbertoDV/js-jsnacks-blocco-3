const numeroDiArray = parseInt(prompt("inserisci i numeri di array"));
let arrayGenerati = 0;

while (arrayGenerati < numeroDiArray) {
	let array = [];
	for (let i = 0; i < 10; i++) {
		const randomNumber = Math.floor(Math.random() * 100) + 1;
		array.push(randomNumber);
	}
	arrayGenerati++;
	console.log(array);
}
