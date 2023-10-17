/* _____________________________DAY-04-EX-1____________________________
En este desafío, debes encontrar al gatito más famoso con base en su número de seguidores. Recibirás un array de objetos que incluirán las siguientes propiedades:

name: nombre del gatito.
followers: un array de números, donde cada uno representa los seguidores de cada red social

Tu tarea es devolver un array con los nombres de los gatos que tienen solo el mayor número de seguidores. Si hay dos o más gatos con el mismo número máximo de seguidores, deberás incluirlos en el array de resultado, manteniendo el orden en el que aparecen en el array de entrada.
*/
let cats= [
  {
    name: "Luna",
    followers: [500, 200, 300]
  },
  {
    name: "Michi",
    followers: [100, 300,600]
  },
  {
    name: "nieve",
    followers: [100, 200,600]
  },
  {
    name: "arios",
    followers: [100, 100,600]
  },
];
console.log(cats)

let newObj = {};
cats.forEach(el => {
  return newObj[el.name] = el.followers.reduce((a,b) => a+b)   
});
console.log(newObj);
let max = Math.max(...Object.values(newObj));
console.log (typeof(max))
console.log(max)
console.log (Object.keys(newObj).filter(key => newObj[key] === max));
/* return (Object.keys(newObj).filter(key => newObj[key] === max) );*/
/* _____________________________DAY-04-EX-2____________________________
En este desafío, debes encontrar al gatito más famoso con base en su número de seguidores. Recibirás un array de objetos que incluirán las siguientes propiedades:

name: nombre del gatito.
followers: un array de números, donde cada uno representa los seguidores de cada red social

Tu tarea es devolver un array con los nombres de los gatos que tienen solo el mayor número de seguidores. Si hay dos o más gatos con el mismo número máximo de seguidores, deberás incluirlos en el array de resultado, manteniendo el orden en el que aparecen en el array de entrada.
*/

let students = [
  {
    name: "Pedro",
    grades: [90, 87, 88, 90],
  },
  {
    name: "Jose",
    grades: [99, 71, 88, 96],
  },
  {
    name: "Maria",
    grades: [92, 81, 80, 96],
  },
];
console.table(students);
let objNotas = {};
students.forEach(el => {
  console.log (objNotas[el.name] = el.grades.reduce((acc,ele) => (acc + ele/4)));
  return objNotas[el.name] = el.grades.reduce((acc,ele) => (acc + ele/4));
});
console.log(objNotas);
let sum = Object.values(objNotas).reduce((previous, current) => current += previous);
let avg = sum / Object.values(objNotas).length;

let notasClase = Object.values(objNotas);
let promedio = 0
for (let i = 0; i < notasClase.length; i++) {
  promedio = (promedio + notasClase[i]);
  console.log(promedio)
}
let promedioTo = Number((promedio / notasClase.length).toFixed(2));
console.log(promedioTo)
console.log(typeof(promedioTo))

/* ------------------------------- */
var sumas = 0;
let course = {
  classAverage: 0,
  studentsNo: []
};
/* function (x){
  for (const ite of students) {
    let prom = Number((ite.grades.reduce((acc, el) => acc + el, 0) / ite.grades.length).toFixed(2));
    console.log(prom);
    console.log(typeof prom);
    sumas = sumas + prom;
    console.log(sumas);
    const astudent = {
      name: ite.name,
      average: prom
    };
    console.log(astudent.name)
    console.log(astudent.average)
    course.studentsNo.push(astudent);
    console.table(course.studentsNo)
    course.classAverage = sumas;
    console.log(course.classAverage)
  
  }
  console.log(course.classAverage)
  console.table(course)
  course.classAverage = Number((sumas / 3).toFixed(2))
  console.log(course.classAverage)
  console.table(course)
  return course

} */
/* -----------------------------Day-05-Checkpoint------------------ */
function findLargestPalindrome(words) {
  // Tu código aquí 👈
let result = null;
let maxLength = 0;
words.forEach(item => {
  let reverseS = item.split("").reverse().join("");
  if (item === reverseS && item.length > maxLength) {
    maxLength = item.length;
    result = item;
  }
});
  return result;
}


