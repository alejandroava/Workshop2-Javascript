//programa que le ayude a decidir sus actividades evaludando condicones
// si tiene poca energia = no sale a correr y no trabaja dia libre y(null o 0)
// si tiene energia = salir a correr
// si esta lloviendo y tiene energia = quedarse en casa y trabajar en proyectos (undefined o false)
// si esta lloviendo y no tiene energia = quedarse en casa y relajarse
// si el clima es bueno = salir a correr (string)
// mostrar resultado de cada desicion con console.log con cada actividad selecionada

let energia = null
let clima;
let cargaTrabajo;

energia = prompt('¿cual esta tu energia hoy de 0 a 10?')
clima = Boolean(prompt('¿como esta el clima hoy? oprime 0 para lluvioso y 1 para soleado'))
cargaTrabajo = prompt('¿tiene mucho trabajo')

if (energia <= 5 && clima && cargaTrabajo == 'no') {
    !energia
    !cargaTrabajo
    console.log('no salir a correr y tomar dia libre')
}
else if (energia >= 5 && clima && cargaTrabajo == 'no') {
    !cargaTrabajo
    console.log('salir a correr')
}
else if (clima && energia >=5 && cargaTrabajo) {
    console.log('no salir a correr y trabajar en proyectos')
}
else if (clima && !energia && !cargaTrabajo) {
    console.log('dia libre')
}