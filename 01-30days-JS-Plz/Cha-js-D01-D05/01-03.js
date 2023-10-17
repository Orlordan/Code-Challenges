/* _____________________________DAY-01________________________________
En este desafío encontrarás una función llamada solution que recibe un parámetro llamado valor. Debes encontrar el tipo de dato del parámetro valor y retornarlo desde la función solution.
Por ejemplo: Dados los siguientes llamados a la función solution:
            solution(1)
            solution("Dieguillo")
            solution(true) */
function solution(valor) {
  // Escribe tu código aquí 👈
  return typeof valor;
}
console.log (solution(10))

/* _____________________________DAY-02________________________________ 
En este desafío tendrás que calcular la propina que deben dejar los clientes de un restaurante en función de su consumo.
Recibirás 2 parámetros:

billAmount: El costo total de lo que hayan consumido.
tipPercentage: El porcentaje de propina que deban dejar.

Ejemplo
                Input: calculateTip(100, 10);
                Output: 10;
        Input: calculateTip(1524.33, 25);
        Output: 381.0825; */
function calculateTip(billAmount, tipPercentage) {
  // Tu código aquí 👈
  let discount = (billAmount / 100 * tipPercentage)
  return discount
}
calculateTip(1330, 12) 

const discount2 = (bA2, tP2) => bA2 / 100 * tP2;
discount2(1100,12)      

/* _____________________________DAY-03________________________________ 
En este desafío, debes crear la lógica de la función isLeapYear, que determina si un año es bisiesto o no. Un año es bisiesto si cumple con las siguientes condiciones:
Toma en cuenta que la función debe ser capaz de manejar valores no enteros o negativos.

Ejemplo
Input: 2000;
Output: true;

Input: -2024;
Output: false;
*/
function isLeapYear(year) {
  // Tu código aquí 👈
  if((year > 0 ) && (year % 4 === 0) && (year % 100 !== 0) || (year % 400 == 0)){
    return true
  } else {
    return false
  }
}
console.log(isLeapYear(-100))

/* _____________________________DAY-03- EX-02________________________________ 
En este desafío recibirás una serie de tipos de mascotas junto con su edad.
La función recibirá las siguientes mascotas:
perro
gato
ave
En caso de pasar una mascota la cual no sea de la lista deberá retornar "Tipo de mascota inválida"
Para cada tipo de mascota, la función retornará diferente información basada en la edad.
*/

function getPetExerciseInfo(type, age) {
  // Tu Código aquí 👈
switch (type) {
  case "perro":
    if (age < 1) {
      return ("Los cachorros necesitan pequeñas y frecuentes sesiones de juego");
    } else if (age >= 1 && age <= 7) {
      return ("Los perros a esta edad necesitan caminatas diarias y sesiones de juego");
    } else {
      return ("Los perros viejos necesitan caminatas más cortas");
    }
  case "gato":
    if (age < 1) {
      return ("Los gatitos necesitan frecuentes sesiones de juego");
    } else if (age >= 1 && age <= 7) {
      return ("Los gatos a esta edad necesitan jugar diariamente");
    } else {
      return ("Los gatos viejos necesitan sesiones de juego más cortas");
    }
  case "ave":
    if (age < 1) {
      return ("Las aves jóvenes necesitan mucho espacio para volar");
    } else if (age >= 1 && age <= 7) {
      return ("Las aves necesitan jugar diariamente y un lugar para volar");
    } else {
      return ("Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar");
    }
  default:
    return ("Tipo de mascota inválida");
}
}

console.log(getPetExerciseInfo("perro", 8))

/* _____________________________DAY-03-EX3________________________________ IMMPRIMIR UN TRIANGULO

*/
const array = [1, 2, 3, 4, 5];
for (let l = 0; l < array.length; l++) {
  console.log(array[l]);
  console.log(array.length);
}

function printTriangle(size, character) {
  // Tu código aquí 👈
  let tri = '';
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      if (j <= size - i) {
        tri += ' ';
      } else {
        tri += character
      }
    }
    if (i !== size) {
      tri = tri + '\n'
    }
  }
  return tri
}
console.log(printTriangle(10, '#'))
