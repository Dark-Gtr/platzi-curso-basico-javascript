//en el console log se le puede enviar un objeto con los datos 

const calcularDescuento = () => {

    let precio = document.getElementById("InputPrice").value;
    let descuento = document.getElementById("InputDiscount").value;

    document.getElementById("resultado").innerHTML = ("el precio con descuento es: " + (precio * (100 - descuento) / 100))
    
}