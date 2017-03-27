var array = ['Pomme','Cerise','Tomate','Citron', ['Orange','Poivron']];

// Exercice n°1
var mois = ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"]

// Exercice n°2
console.log (mois[2]);

// Exercice n°3
console.log (mois[5]);

// Exercice n°4
console.log (mois[10]);

// Exercice n°5
mois.splice(7, 1);
mois.splice(7, 0, "août");
console.log (mois);

// Exercice n°6
for (var i = 0; i < mois.length; i++) {
	console.log(mois[i])
};

// Exercice n°7
console.log (array);

// Exercice n°8
array.push("Courgette")
console.log (array);

// Exercice n°9
array.splice(4, 0, "Citron");
console.log (array);

// Exercice n°10
array.splice(1, 1);
console.log (array);

// Exercice n°11
array.splice(2, 0, "Poire");
console.log (array);

for (var i = 0; i < array.length; i++) {
	if (Array.isArray(array[i])){
	for (var j = 0; j < array[i].length; j++) {
		
	} console.log (array[i][j]);
} 
}