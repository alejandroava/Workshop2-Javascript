// programa para administrar un presupuesto DIARIO
// Calcular si el dinero que tiene es suficiente para: comer, comprar libros o ahorrar dinero
//utilizar operadores matematicos y logicos

//* introducir presupuesto diario
// introducir costos de comer y comprar libros
// introducir constante que indique el minimo de ahorro DIARIO
// Comparar presupuesto con costo de actividades
// utilizar operadores logicos para indicar si puede comer o comprar libros o ambas permitiendose ahorar diario
// utilizar  operadores como >, <, &&, ||, y !
// : Considera incluir una interfaz simple de usuario que permita a Julian ingresar sus datos financieros y recibir feedback inmediato sobre sus opciones de gasto y ahorro

 let presupuestoDiario = Number(prompt('ingrese el presupuesto de hoy'))
 let costoComer = Number(prompt('ingrese el costo estimado para comer hoy'))
 let comprarLibro = Number(prompt('ingrese el costo estimado del libro'))
 const ahorroDiario =  presupuestoDiario *10 / 100 
 let costoTotalDiario = costoComer + comprarLibro + ahorroDiario
 let dineroDisponble = presupuestoDiario - ahorroDiario
 let dineroSobranteDiario = presupuestoDiario - costoTotalDiario

alert(`su presupuesto de hoy es ${presupuestoDiario} el ahorro de hoy es de ${ahorroDiario} y los gastos estimados serian de ${costoTotalDiario}`)

if (presupuestoDiario > costoTotalDiario) {
    alert('tiene dinero suficiente para comer y comprar el libro')
} else if (dineroDisponble > costoComer || dineroDisponble > comprarLibro) {
    let respuesta;
    respuesta = prompt('tiene dinero suficiente para comer o comprar libro : elige una opcion')
    if (respuesta == 'comer') {
        alert('usted eligio comer')
    } else {
        alert('usted eligio comprar el libro')
    }
} else if (dineroDisponble < costoTotalDiario) {
    alert('No tiene dinero suficiente')
}
