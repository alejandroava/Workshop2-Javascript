let ingresePresupuestoInicial = () => {
    return prompt('ingresa tu presupuesto inicial')
}
let CostoEstimadoAlojamiento = (expRnumeros) => {
    let alojamiento
    while (true) {
        alojamiento = (prompt('Ingrese el costo del alojamiento'))
        if (!expRnumeros.test(alojamiento)) {
            alert('ingrese un valor numerico')
        } else {
            break
        }
    
    }
    return alojamiento
}
let expRnumeros = /^[0-9]+$/
CostoEstimadoAlojamiento(expRnumeros)

//     while (true)
//         if (typeof alojamiento != 'number') {
//             alert('ingresa un valor numerico')
//         }
//         else {
//             return alojamiento
//         } 
// }   
// CostoEstimadoAlojamiento()
    


// let costoEstimadoTransporte = () => {
//     return prompt('ingrese el costo estimado del transporte')

// }

// let costoEstimadoComida = () => {
//     return prompt('ingrese costo estimado de la comida')
// }

// let dineroDisponible = () => {
    
// }