let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0
for (var contador = 0; contador < numbers.length; contador+=1 ) {
    soma = soma + numbers[contador]
};
console.log(soma/(numbers.length-1));
let media = soma/(numbers.length-1)
console.log(media)
if (media > 30) {
     console.log(`O numero ${media} é maior que 20.`)
 } else
    console.log(`O numero ${media} é menor que 20.`); 
