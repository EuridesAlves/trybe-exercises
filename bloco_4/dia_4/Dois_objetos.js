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

for (let indice in info) {
  if (indice != "recorrente") {
    console.log(info[indice] + " e " + dois[indice]);
  } else {
    console.log("Ambos recorrentes.");
  }
}
