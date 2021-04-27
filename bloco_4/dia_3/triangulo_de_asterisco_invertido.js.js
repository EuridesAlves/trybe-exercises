// cria um triangulo (invertido) de * na tela
let valor = 5;
let caracter = "*";
let espaco = " ";
let amostra = "";
for (let col = 1; col <= valor ; col += 1) {
    amostra = amostra + espaco;
}

for (let col = 1; col <= valor ; col += 1) {
    amostra = amostra + caracter;
    console.log(amostra);
}
for (let lin = 1 ; lin <= valor ; lin += 1) {
  //console.log(amostra);
}