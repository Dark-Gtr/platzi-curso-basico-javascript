const salariosCol = colombia.map(
    function(personita) {
        return personita.salary;
    }
).sort( function(a,b) {
    return a - b;
})

function esPar(numerito) {
    return numerito.length % 2 === 0;
}

function medianaSalary(lista) {
    if(esPar(lista)) {
        console.log("la mediana es: " + ((lista[(lista.length / 2) - 1]) + (lista[lista.length / 2])) /2 )
    } else {
        console.log("la mediana es: " + lista[parseInt(lista.length / 2)]);
    }
}

// Mediana del top 10%

const salariosColTop10 = salariosCol.slice((salariosCol.length * 90 / 100), salariosCol.length)

console.log(
    [
        medianaSalary(salariosCol),
        medianaSalary(salariosColTop10)
    ]
);