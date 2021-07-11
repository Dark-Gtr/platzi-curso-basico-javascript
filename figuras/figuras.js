// Codigo del cuadrado
let text = document.getElementById("text")
let btnCua = document.getElementById("buttonCua")


const calcularCuadrado = () => {
    let input = document.getElementById("input__cuadrado--input");
    
    let ladoCuadro = input.value
    let perimetroCuadrado = ladoCuadro * 4

    text.innerHTML= (
        "Los lados del cuadrado miden: " 
        + ladoCuadro 
        + " cm<br>El perimetro del cuadrado es: " 
        + perimetroCuadrado 
        + " cm<br>El area del cuadrado es: " 
        + (ladoCuadro * ladoCuadro)
        + " cm2"
    )

}

btnCua.addEventListener("click", calcularCuadrado)

// Codigo del triangulo

let triangulotxt = document.getElementById("triangulo")
let btnTri = document.getElementById("buttonTri")

const calcularTriangulo = () => {
    let buffer = document.getElementById("input__triangulo--inputLeft")
    let ladoTrianguloLeft = Number(buffer.value);
    
    buffer = document.getElementById("input__triangulo--inputRight");
    let ladoTrianguloRight = Number(buffer.value);

    buffer = document.getElementById("input__triangulo--inputBase");
    let baseTriangulo = Number(buffer.value);

    buffer = document.getElementById("input__triangulo--inputAltura")
    let alturaTriangulo = Number(buffer.value);

    let perimetroTriangulo = (ladoTrianguloLeft + ladoTrianguloRight + baseTriangulo)

    console.log(perimetroTriangulo);
    
    triangulotxt.innerHTML = (
        "los lados del triangulo son: " 
        + ladoTrianguloLeft 
        + "cm, " 
        + ladoTrianguloRight
        + "cm, " 
        + baseTriangulo 
        + "cm<br>"
        + "la altura del triangulo es: "
        + alturaTriangulo
        + "cm<br>El perimetro del triangulo es: "
        + perimetroTriangulo
        + "cm<br>el area del triangulo es: "
        + ((baseTriangulo * alturaTriangulo) / 2)
        + "cm2"    
    )
}

btnTri.addEventListener("click", calcularTriangulo)

// Codigo del circulo

let circuloTxt = document.getElementById("circulo")
let btnCir = document.getElementById("buttonCir")

const calcularCirculo = () => {

    let radioCirculo = Number(document.getElementById("input__circulo--input").value)

    circuloTxt.innerHTML = (
        "El radio del circulo es: "
        + radioCirculo
        + "cm"
        + "<br>El diametro del circulo es: "
        + (radioCirculo * 2)
        + "cm"
        + "<br>La circunferencia es: "
        + ((radioCirculo * 2) * Math.PI)
        + "cm"
        + "<br>El area del circulo es: "
        + ((radioCirculo * radioCirculo) * Math.PI)
        + "cm2"
    )
}

btnCir.addEventListener("click", calcularCirculo)

// Para calcular el area de un circulo se multiplica el radio x radio y el resultado se multiplica x el pi

const calcularAlturaIsoceles = (lado1, lado2, base) =>{

    if(lado1 == lado2 && (lado1 && lado2) != base){
        console.log("es un isoceles");

        alert(Math.sqrt((lado1 * lado2) - (base/2)**2  ))

    } else {
        console.log("no es un isoceles");
    }

}