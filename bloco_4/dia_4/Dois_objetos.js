// trabalhando for nos objetos mostrando valores
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
info.recorrente = "Sim";
let dois ={
  personagem : "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
}
dois.recorrente = "Sim";

let array1 = [];
let array2 = [];
for (let indice in info) {
  array1.push(info[indice]);
}
for (let indice2 in dois) {
  array2.push(dois[indice2]);  
}
/* console.log(array1);
console.log(array1[1]); */
for (let posicao = 0 ; posicao <= array1.length -1 ; posicao += 1) {
  
  }  
  for (let posicao2 = 0 ; posicao2 <= array2.length -1; posicao2 += 1) {
    console.log(array1[posicao] + " e " + array2[posicao2]); 
    /* transformar em uma array conjunta */
  }
