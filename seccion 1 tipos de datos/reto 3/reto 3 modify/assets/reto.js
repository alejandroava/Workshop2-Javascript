let articles = [];
let budGet = Number(prompt("ingrese el presupuesto incial"));
let costTransportation = Number(prompt("Ingrese el costo del transporte"));
let costBooking = Number(prompt("ingrese el costo del alojamiento"));
let costFood = Number(prompt("ingrese el costo de la comidad"));
let costTravel = costBooking + costTransportation + costFood;
const umbral = Number(prompt("Ingrese un umbral"));
let moneyAvailable = budGet - costTravel;
alert(`el saldo que le queda es de ${moneyAvailable}`);

if (moneyAvailable > umbral) {
  alert("Puede llevar un articulo");
  let article = prompt("¿cual articulo que desea llevar?");
  let priceArticle = Number(prompt("¿cual es el precio del articulo?"));
  if (priceArticle < moneyAvailable) {
    alert("puede llevar el articulo");
    confirm("¿Quiere agregar el articulo?");
    let newArticle = { name: article, price: priceArticle };
    articles.push(newArticle);
  } else {
    alert(
      "el valor del articulo es mayor de el dinero disponible, considere elegir otro articulo"
    );
  }
}
console.log(articles);
