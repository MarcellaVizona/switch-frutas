var fruta = "";

   fruta = prompt('Digite o nome de uma fruta');

switch (fruta.toLowerCase()){
  case "Maçã":
    alert("Não vendemos esta fruta aqui");
    break;
  case "Kiwi":
    alert("Estamos com escassez de kiwis");
    break;
  case "Melancia":
    alert("Aqui está, são 3 reais o quilo");
    break;
    

    default:
        alert("Fruta Invalida")
    
}