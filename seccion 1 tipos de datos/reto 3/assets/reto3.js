let expRnumeros = /^[0-9]+$/;
let umbral = 200;
let presupuesto = ingresePresupuestoInicial(expRnumeros);
let alojamiento = costoEstimadoAlojamiento(expRnumeros);
let transportation = costoEstimadoTransporte(expRnumeros);
let food = costoEstimadoComida(expRnumeros);

let ingresePresupuestoInicial = (expRnumeros) => {
  let presupuesto;
  while (true) {
    presupuesto = prompt("ingresa tu presupuesto inicial");
    if (!expRnumeros.test(presupuesto)) {
      alert("ingrese un numero");
    } else {
      break;
    }
  }
  return presupuesto;
};

let costoEstimadoAlojamiento = (expRnumeros) => {
  let alojamiento;
  while (true) {
    alojamiento = prompt("Ingrese el costo del alojamiento");
    if (!expRnumeros.test(alojamiento)) {
      alert("ingrese un valor numerico");
    } else {
      break;
    }
  }
  return alojamiento;
};

let costoEstimadoTransporte = (expRnumeros) => {
  let transportation;
  while (true) {
    transportation = prompt("ingrese el costo estimado del transporte");
    if (!expRnumeros.test(transportation)) {
      alert("ingrese un valor numerico");
    } else break;
  }
  return transportation;
};

let costoEstimadoComida = (expRnumeros) => {
  let food;
  while (true) {
    food = prompt("ingrese costo estimado de la comida");
    if (!expRnumeros.test(food)) {
      alert("Ingrese un valor numerico");
    } else {
      break;
    }
  }
  return food;
};
//console.log(costoEstimadoComida(expRnumeros));

let dineroDisponible = (alojamiento, transporte, comida, umbral) => {
  let moneyAvailable = ((alojamiento + transporte + comida)) - umbral;
  return moneyAvailable;
};

console.log((dineroDisponible = (5, 5, 5, 10)));
