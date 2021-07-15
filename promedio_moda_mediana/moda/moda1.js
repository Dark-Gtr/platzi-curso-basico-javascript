let lista = [];
let input = (document.getElementById("inputAdd"));

const addToList = () => {
    
    lista.push(Number(input.value))
    console.log(lista);
    input.value = ""
};

const calcularModa = (lista) => {

    let listaCount = {};
    
    lista.map(

        function (elem) {
            if (listaCount[elem]) {
                listaCount[elem] += 1;
            } else {
                listaCount[elem] = 1
            }
        }
    )
    
    let listaArray = Object.entries(listaCount).sort(
        function (a, b) {
            return b[1] - a[1];
        }
    )

    document.getElementById("resultado").innerText = ("La moda es: " + listaArray[0][0])
}
//-------------Media aritmetica ponderada ----------------------------------------\\

const notes = [
    {
        course: "Educacion Fisica",
        note: 10,
        credit: 2
    },

    {
        course: "Programacion",
        note: 8,
        credit: 5
    },

    {
        course: "Finanzas Personales",
        note: 7,
        credit: 5
    }
]

/*- Multiplicar cada numero de la lista por su peso
    vamos a usar de nuevo el metodo mar de los arrays. Crearemos un nuevo
    arreglo de solo numeros a partir de multiplicar cada nota con sus creditos.
*/

const notesWithCredits = notes.map( function(noteObject){
    return noteObject.note * noteObject.credit;
});// esta funcion recorre todos los objetos del array y multiplica el objeto
// con su valor note y credit 

/*- Sumar todos los elementos del arreglo de elementos multiplicados por su peso
    vams a usar de nuevo el metodo reduce de los arrays.

    Crearemos una nueva variable sumOfNotesWithCredit que tenga como resultado la
    suma de todos los elementos del arreglo notesWithCredit. Recuerda
    que la funcion reduce recibe una funcion con dos parametros: el valor
    acumulado (que para evitar errores debemos inicializar con 0) y el nuevo
    elemento de los arrays

*/

const sumOfNotesWithCredit = notesWithCredits.reduce(
    function(sum = 0, newVal) {
        return sum + newVal;
    }
);// esta funcion devuelve la suma de todos los valores que hay en el array

/*- Sumar todos los pesos (creditos)
    si, otra vez map y reduce. Vamos a crear un nuevo arreglo credits unicamente
    con los creditos de cada materia y otra nueva variable sumOfCredits que recorra el arreglo credits y sume sus elementos.
*/

const credit = notes.map(
    function(noteObject) {
        return noteObject.credit;
    }
)// esta funcion devuelve todos los valores credit de cada objeto del array

const sumOfCredits = credit.reduce(
    function(sum= 0, newVal) {
        return sum + newVal;
    }
)// esta funcion suma todos los valores del array credit

/*- haser la divicion entre ambas "sumas"
    lo ultimo que nos falta es dividir nuestra variable sumOfNotesWithCredit sobre 
    la variable sumOfCredits.
*/

const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;
