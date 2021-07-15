/*
    El metodo .sort de los arrays nos permite ordenar listas de letras o numeros en JavaScript pero por defecto tiene unos problemillas,
    como que el 1 millon queda ordenado antes que un 2 porque empieza por 1.
    
*/

let lista = [];

const addToList = () => {
    lista.push(document.getElementById("inputAdd").value)
    document.getElementById("container__Array--list").innerText = lista
}

const ordenarLista = (lista) => {
    lista.sort(function (a,b) {
        return a - b;
    })
    document.getElementById("container__Array--list").innerText = lista
    return lista
}



const calcularMediana = (lista) => {

    let mitadLista = parseInt(lista.length / 2);

    let msj =  document.getElementById("resultado")

    let mediana;

    let esPar = (numerito) => {
        if(numerito % 2 === 0) {
            return true;
        } else {
            return false;
        }
}

    if (esPar(lista.length)) {
    
        let buffer1 = Number(lista[(mitadLista - 1)]);
        let buffer2 = Number(lista[mitadLista]);
        
        
        msj.innerText = "la mediana es: " + (buffer1 + buffer2) / 2;
    } else {
    
        mediana = lista[mitadLista];
        msj.innerText = "la mediana es: " + mediana;

    }

}

const operation = () => {
    calcularMediana(ordenarLista(lista))
}
