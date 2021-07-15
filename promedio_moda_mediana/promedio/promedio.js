let salarios = [];

let msj = document.getElementById("resultado")

msj.innerText = "no hay ningun salario agregado";

const addSalario = () => {
    let salario = Number(document.getElementById("InputSalario").value)
    salarios.push(salario)
    msj.innerHTML = ("los salarios son: <br>" + salarios)

    let buffer = salarios.reduce(
        function (valorAcumulado = 0, nuevoValor) {
            return valorAcumulado + nuevoValor
        }
    )
    
    document.getElementById("promedio").innerText = ("El promedio es: " + (buffer / salarios.length));

}
