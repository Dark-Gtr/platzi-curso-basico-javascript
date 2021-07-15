let lista1 = [
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    2,
    1,
    3,
    4,
    2,
    5

]

let lista1Count = {};

lista1.map(
    function (elemento) { //esta funcion va a recibir un parametro de la funcion map
        if (lista1Count[elemento]) { // aqui se declara que si existe un elemento en el objeto lista1Count se cumple la condicion
            lista1Count[elemento] += 1; // esta es el codigo que se ejecuta si la condicion es verdadera
            
        } else {
            
            lista1Count[elemento] = 1; // este es el codigo que se ejecuta si no se cumple la condicion
            // si no hay
           
        }
    }
); // esta funcion esta agregando en el objeto el valor que esta en el array y cuantas veces se repite

let lista1Array = Object.entries(lista1Count).sort(
    function (a, b) {
        return b[1] - a[1]; // esto ase la misma funcion que 3 condicionales if
        // aqui se esta poniendo el valor de b, para ordenar de forma descendente
        // de mayor a menor, asi el valor mas grande queda en la primera pocision del array[0]
        // para ordenar de menor a mayor, es cuestion de intercambiar los valores
        // ejemplo: a[1] - b[1] esto da como resultado el valor mas grande queda en la ultima posicion del array
        // si valorAcumulado > nuevoValor, se vuelve un numero positivo ejem: 1
        // si valorAcumulado == nuevoValor, se devuelve un 0;
        // si valorAcumulado < nuevoValor, se devuelve un numero negatico ejm: -1 
    }
);
// esta funcion combierte el objeto que le pasamos por argumento y lo combierte en un array
// la funcion .sort ordena los elementos del array, pero como es un array de arrays, a los valores comparativos
// se le esta agregando la posicion del elemento del array, en este caso es la segunda posicion
document.getElementById("resultado").innerText = ("la moda es: " + lista1Array[0][0])