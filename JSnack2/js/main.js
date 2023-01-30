const numbers = [];

let somma = 0;

while (somma < 50) {
	const numeroChiesto = parseInt(
		prompt("inserisci un numero da mettere dentro l'array")
	);
	console.log(`Numero inserito ${numeroChiesto}`);
	numbers.push(numeroChiesto);
	somma += numeroChiesto;
	console.log(`La somma è ${somma}`);
}
