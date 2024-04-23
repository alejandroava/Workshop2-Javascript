// Julian necesita considerar varios factores al decidir qué empacar adicionalmente. Estos factores incluyen el pronóstico del clima, el espacio restante en la maleta, y el límite de peso de su equipaje.
// antes de tomar decisiones sobre los artículos. Implementa mensajes claros que informen a Julian si es aconsejable o no llevar ciertos artículos y por qué, basado en las condiciones dadas.
// Estos factores incluyen el pronóstico del clima, el espacio restante en la maleta, y el límite de peso de su equipaje.
//Cada decisión sobre un artículo adicional dependerá de la combinación de estas condiciones.
// Utiliza múltiples estructuras if-else anidadas para determinar qué artículos puede llevar Julian. Por ejemplo, si el pronóstico indica lluvia, Julian considerará llevar un paraguas.
//Además, si Julian tiene espacio adicional y el peso de su equipaje lo permite, podría decidir llevar una cámara o algún otro artículo que no sea esencial pero deseable.
//Priorización de Artículos:
//En casos donde Julian deba elegir entre múltiples artículos debido a restricciones de espacio o peso, el programa deberá ayudarlo a priorizar qué artículos son más importantes o útiles basándose en el clima y la duración del viaje.

const articles = []
let clima;
let pesoMaleta;
let espacioMaleta;
let limitePeso = 15


 while (true){
    // let clima;
    clima = prompt('cual es el clima -> soleado -> frio')
    if (clima != 'soleado' && clima != 'frio') {
        alert('Ingrese soleado o frio')
    }else {
        break
    }
} 

while (true) {
    // let pesoMaleta;
    pesoMaleta = prompt('cual es el peso de la maleta de 1-15')
    if (pesoMaleta > 16 || pesoMaleta < 0 || isNaN(pesoMaleta)) {
        alert('ingrese un dato valido')
    } else {
        break
    }

} 

if (clima == 'frio' && pesoMaleta < 10) {
    alert('considera llevar una sombrilla y dos articulos mas')
} else if (pesoMaleta == 15) {
    alert('No puedes llevar mas cosas ')
} else if (clima == 'frio' && pesoMaleta >= 10) {
    alert('considera llevar un articulo adicional para el clima frio')
} else if (clima == 'soleado' && pesoMaleta < 10) {
    alert('considera llevar articulos para el sol ')
} else if (clima == 'soleado' && pesoMaleta > 10) {
    alert ('considera llevar un articulos para el sol y un articulo adicional')
}

// while (true) {
//     // let espacioMaleta;
//     espacioMaleta = prompt('cual es el espacio en la maleta -> poco -> mucho')
//     if (espacioMaleta != 'poco' && espacioMaleta != 'mucho') {
//         alert('ingrese poco o mucho')
//     } else {
//         break
//     }
// }

// while (true){
//     let addArticle;
//     addArticle = confirm('quiere agregar articulos')
//     if (addArticle) {
//         let listArticles;
//         listArticles= [prompt('que articulos quiere llevar')] 
//         articles.push(listArticles)
//     } else {
//         break
//     }
// }



// confirm =
// let articles = [prompt('ingrese los articulos que desea llevar seguidos de una coma')]
// console.log(articles)
