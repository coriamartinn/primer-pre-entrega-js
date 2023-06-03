// PRIMERA PRE ENTREGA CODER HOUSE

let total = 0
let productos = alert("Stock\n1- Remeras 500$\n2- Pantalones 700$\n3-Morrales 800$\n4-Camperas 1000$\n5-Buzos 650$\n6-Finalizar compra\n0-salir")

do {
    let elegirProducto = Number(prompt("elija un producto"))

    if(elegirProducto === 1){
        alert("Agregaste una remera al carrito!")
        total += 500
    }
    else if (elegirProducto === 2){
        alert("Agregaste un pantalon al carrito!")
        total += 700
    }
    else if (elegirProducto === 3){
        alert("Agregaste un Morral al carrito!")
        total += 800
    }
    else if (elegirProducto === 4){
        alert("Agregaste una Campera al carrito!")
        total += 1000
    }
    else if (elegirProducto === 5){
        alert("Agregaste un Buzo al carrito!")
        total += 650
    }
    else if(elegirProducto === 6){
        alert("su compra tiene el total de: " + total + " toque ok para finalizar")
        cuotas(total)
        break
    }
    else{
        alert("Gracias por visitar la pagina!!")
    }
} while (productos !== 0)

function cuotas (){

    let salir = false

    do {
        let elegirCuotas = Number(prompt("indique la cantidad de cuotas con la que quiere abonar su compra"))

        if(elegirCuotas === 1){
            salir = true
        }
        else if(elegirCuotas === 3){
            salir = true
        }
        else if(elegirCuotas === 6){
            salir = true
        }
        else if(elegirCuotas === 12){
            salir = true
        }
        else{
            alert("Ingresaste una cuota inexistente")
        }
    } 
    while (salir != true)

}

alert("Su compra ha finalizado con exito!!")