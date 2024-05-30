// function mul(a,b,c){
//     return a*b*c;
// }
//document.write('el resultado e la multiplicacion es: ', mul(1,2,3));

// let result = mul(
//     parseInt(prompt()),
//     parseInt(prompt()),
//     parseInt(prompt())
    
// )

// document.write(result);

//REPASO DE JAVASCRIPT BASICO #1

// const myName = "Tomas Serna";
// const lastName = myName.replace("Serna", "Ossa");
// const myNameLength = (myName.trim()).length;
// const lastNameLength = (lastName.trim()).length;


// document.write(lastName);
// document.write("<br>");
// document.write("Su nombre tiene ",lastNameLength, " caracteres");
// document.write("<br>")
// if(lastNameLength < 14){
//     document.write("Su contraseña es debil");
// }
// else{
//     document.write("Tiene una contraseña fuerte");
// }

//FIN DEL REPASO DE JAVASCRIPT BASICO #1 24 DE ABRIL

//DIFERENCIAS DE LAS ARROW FUNCTION
// function testFuncion() {
//     console.log('this', this);
//     var j = "Holaaaaaaaa"; 
// }

// const testFunction2 = () => {
//     console.log('this in arrow funcion', this);
//     var j = "Hola";
// }

// testFuncion();
// testFunction2();
const myNumberList = [2, 5, 7, 9, 11, 15]

// let multiplyNumber = 2;
// for (let index = 0; index <= 10; index++) {
//     console.log(`${numeroDeTabla} x ${index} = ${numeroDeTabla * index}`);
// }

//REALIZANDO UNA TABLA DE MULTIPLICAR Y APRENDIENDO A HACER BACKTICKS
function tablaDeMultiplicar(numeroDeTabla, longitud) {
    for (let index = 0; index <= longitud; index ++){
        console.log(`${numeroDeTabla} x ${index} = ${numeroDeTabla * index}`);
    }
    console.log("Finaliza for")
}

tablaDeMultiplicar(4, 6);
//FIN DEL APRENDIZAJE DE LOS BACKTICKS

//FACOTRIAL DE FORMA "SENCILLA"
function factorial (number) {
    if (number <= 1) {
        return number;
    }
    return number * factorial(number - 1)
}
console.log(factorial(4));

//FACTORIAL PERO UTILIZANDO FOR
// 5
// function factorial(number) {
//     let result = ;
//     let storedNumber = number;

//     if(number == 0) {
//         return number;
//     }
//     for (let index = number; index <= 0; index--) {
//         result *= storedNumber;
//     }
//     return result
// }


