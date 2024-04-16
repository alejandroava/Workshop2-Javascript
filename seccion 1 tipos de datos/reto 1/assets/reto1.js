const destination = prompt("Ingrese el destino del viaje"); //agrego const  por que el destino no cambiara//

let daysTravel = prompt("Cuantos dias durara el viaje"); // Let por que JUlian puede cambiar el numero de dias //
let budget = prompt("Indique el presupuesto incial"); // let por que Julian puede cambiar su presupuesto//
let costDay = 90000;
let totalCost = costDay * daysTravel;

if (budget < totalCost) {
  console.log(
    "El presupuesto no alcanza , Modifique el numero de dias o el costo diario"
  );
} else if (budget >= totalCost) {
  console.log("Tiene sufiente dinero para el viaje");
}
