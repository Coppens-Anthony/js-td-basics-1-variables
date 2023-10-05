// Prédiction de résultat
/*
Affichez dans la console le résutat de l'opérateur "+" dans les différentes cas de figure
avec les valeurs 4 et 5 selon qu'elles sont de type nombre ou de type chaîne  :
- 4 et 5 sont toutes deux de type nombres :
	* quelle opération réalise l'opérateur "+" dans ce cas ?
	* quel est le résulat de l'opération ?
- 4 et 5 sont toutes deux de type chaîne :
	* quelle opération réalise l'opérateur "+" dans ce cas ?
	* quel est le résulat de l'opération ?
- 4 est de type chaîne et 5 est de type nombre :
	* quelle opération réalise l'opérateur "+" dans ce cas ?
	* quel est le résulat de l'opération ?
- que se passe-t-il si on entoure toute l'expression (VALEUR OPÉRANDE VALEUR) de guillemets ? Pourquoi ?
*/
const add = 4+5;
// ca additionne les termes. Cela fait 9.
console.log(add);
const chaine = '4' + '5';
// Il met les chiffres ensemble. Ca donne 45.
console.log(chaine);
const addChaine = '4' + 5;
// Voir au dessus.
console.log(addChaine)
const guillemets = '4+5'
// ca va afficher le calcul tel quel
console.log(guillemets)