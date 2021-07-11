//en el console log se le puede enviar un objeto con los datos 

let cupones = [
    {cupon: "HSC4GF5AJI9HFY40", value: 15},
    {cupon: "4GHB3J57UKL8EOP1", value: 30}
]

const calcularDescuento = () => {
    let msj = document.getElementById("resultado")
    let precio = document.getElementById("InputPrice").value;
    let cupon = document.getElementById("InputCupon").value + document.getElementById("InputCupon2").value + document.getElementById("InputCupon3").value + document.getElementById("InputCupon4").value;

    let userCoupon = cupones.find(function (coupon) {return coupon.cupon === cupon})
    if(!userCoupon){
       
        msj.innerText = "el cupon no existe"

    } else {

        msj.innerText = ("el precio con descuento es: $" + (precio * (100 - userCoupon.value) / 100))
    }
    
}