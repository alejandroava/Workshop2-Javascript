const souvenirs = [];
flag = false;

const validate = (type, value) => typeof value === type && !Number.isNaN(value);

if (confirm("Desea ingresar un souvenir")) {
  let name = prompt("Ingrese el nombre del producto");
  let cost = prompt("ingrese el costo del producto");
  cost = Number(cost);
  let available = confirm("¿Esta disponible?");
  flag =
    validate("string", name) &&
    validate("number", cost) &&
    validate("boolean", available);
  if (flag === true) {
    const souvenir = {
      'name': name,
      'cost': cost,
      'available': available,
    };
    souvenirs.push(souvenir);
    console.log(souvenirs);
  }
}
if (confirm("Desea ingresar un souvenir")) {
  let name = prompt("Ingrese el nombre del producto");
  let cost = prompt("ingrese el costo del producto");
  cost = Number(cost);
  let available = confirm("¿Esta disponible?");
  flag =
    validate("string", name) &&
    validate("number", cost) &&
    validate("boolean", available);
  if (flag === true) {
    const souvenir = {
      'name': name,
      'cost': cost,
      'available': available,
    };
    souvenirs.push(souvenir);
    console.log(souvenirs);
  }
}
if (confirm("Desea ingresar un souvenir")) {
  let name = prompt("Ingrese el nombre del producto");
  let cost = prompt("ingrese el costo del producto");
  cost = Number(cost);
  let available = confirm("¿Esta disponible?");
  flag =
    validate("string", name) &&
    validate("number", cost) &&
    validate("boolean", available);
  if (flag === true) {
    const souvenir = {
      'name': name,
      'cost': cost,
      'available': available,
    };
    souvenirs.push(souvenir);
    console.log(souvenirs);
  }
}
