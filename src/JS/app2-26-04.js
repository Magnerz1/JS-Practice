function sumaDelNumeroAnterior (number, lenght) {
    for (let index = 1; index <= lenght; number++ && index++){
        console.log(`${number} + ${index} = ${number + index}`);
    }
}
sumaDelNumeroAnterior(1, 8);