const numeroMinimoChiesto = parseInt(prompt("Inserisci il numero Minimo"));
const numeroMassimoChiesto = parseInt(prompt("Inserisci il numero Massimo"));

const numeroDavveroMassimo = numeroMassimoChiesto - numeroMinimoChiesto;
random =
	Math.floor(Math.random() * numeroDavveroMassimo + 1) + numeroMinimoChiesto;

console.log(random);
