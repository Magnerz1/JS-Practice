//Obtener referencia a un elemento de html desde JS
//Con un contador en JS

//Paso 2. Obtenemos los elementos desde javascript
const incrementElement = document.getElementById("increment");
const countElement = document.getElementById("count");
const decrementElement = document.getElementById("decrement");

//Paso 4. Definimos el contador que va a almacenar el valor
let count = 0;

//Paso 5. Creamos las funciones que van acambiar el contido
//y asignamos el valor del contador al elemenot previamente
//creado
function increment() {
    count += 1;
    console.log("count", count);
    countElement.innerText = count;
}

function decrement() {
    count -= 1;
    console.log("count", count);
    countElement.innerText = count;
}

//Paso 3. Agregamos los escuchadores del evento click
//los elementos
incrementElement.addEventListener("click", increment);

decrementElement.addEventListener("click", decrement);

countElement.innerText = count;
//Contento porque aprendi a hacer un contador con JS