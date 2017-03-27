// Exercice n°1
var un = true;

function exe_1(){
	if (un) {
	return "true";
	}
	return "false";
}
console.log (exe_1(un));

// Exercice n°2
var deux = "j'ai compris";

function exe_2() {
	if (un){
		return deux;
	}
	return "false";
};
console.log (exe_2(deux));


// Exercice n°3
var trois = " vraiment!"

function exe_3(a, b){
	var result = a.concat(b);
	return  result;
}
console.log (exe_3(deux, trois));


// Exercice n°4
var quatre_1 = 5;
var quatre_2 = 5;

function exe_4(a, b) {
	if (a > b) {
		return "Le premier nombre est plus grand"
	} else if (a < b) {
		return "Le premier nombre est plus petit"
	} else {
		return"Les deux nombres sont identiques"
	}
}
console.log(exe_4(quatre_1, quatre_2));


// Exercice n°5
function exe_5(a, b) {
	result = a.concat(b);
	return result;
}
console.log(exe_5(deux, quatre_1));


// Exercice n°6
var nom = "FROSI";
var prenom = "Marco";
var age = 28;

function exe_6(a, b, c) {
	return "Bonjour " + a + " " + b + ", tu as " + c + " ans";
}
console.log(exe_6(nom, prenom, age));

// Exercice n°7
var genre = "Homme"
function exe_7(a, b) {
	if (a === "Homme" && b > 18 ) {
			return "Vous êtes un homme et vous êtes majeur"
	}
	else if (a === "Homme" && b < 18 ) {
			return "Vous êtes un homme et vous êtes mineur"
	}
	else if (a === "Femme" && b < 18 ) {
			return "Vous êtes une Femme et vous êtes majeur"
	}else {
			return "Vous êtes un Femme et vous êtes mineur"
	}
}
console.log(exe_7(genre, age))

// Exercice n°8
var huit = 59

function exe_8(a, b, c) {
	result = a + b + c;
	return result;
}
console.log(exe_8(huit, quatre_2, quatre_1));