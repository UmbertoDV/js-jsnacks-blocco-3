const numeroMinimoChiesto = parseInt(prompt("Inserisci il numero Minimo"));
const numeroMassimoChiesto = parseInt(prompt("Inserisci il numero Massimo"));

const numeroDavveroMassimo = numeroMassimoChiesto - numeroMinimoChiesto;
random = Math.floor(Math.random() * numeroDavveroMassimo) + numeroMinimoChiesto;

console.log(random);
