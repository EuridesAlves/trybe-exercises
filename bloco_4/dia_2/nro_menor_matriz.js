let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numero_menor=numbers[1]
for (var contador = 0; contador < numbers.length; contador+=1 ) {
    if (numero_menor > numbers[contador]) {
        numero_menor = numbers[contador]
    }
};
console.log(`O menor valor da matriz é ${numero_menor}.`)
