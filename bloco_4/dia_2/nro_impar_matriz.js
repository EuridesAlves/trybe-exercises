let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numeros_impares=0;
for (var contador = 0; contador < numbers.length; contador+=1 ) {
    if (numbers[contador] % 2 != 0) {
        numeros_impares = numeros_impares + 1 
    }
};
console.log(`A matriz contem ${numeros_impares} numeros impares.`);
