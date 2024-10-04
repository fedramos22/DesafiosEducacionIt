
const pizzas = [
    {
        nombre: 'Napolitana',
        precio: 12000,
    },
    {
        nombre: 'Margarita',
        precio: 10000,
    },
    {
        nombre: 'Jamon y Morron',
        precio: 9000,
    },
];

let datos = [];

let pedido = [];

let pedidoTotal = 0;
let cantidadTotal = 0;
let cantidadNapo = 0;
let cantidadMar = 0;
let cantidadJam = 0;
let span = document.getElementById("resumenPedido");
let span1 = document.getElementById("resumenPedido1");
let span2 = document.getElementById("resumenPedido2");
let span3 = document.getElementById("resumenPedido3");
span.style.display = 'none';
span1.style.display = 'none';
span2.style.display = 'none';
span3.style.display = 'none';

// Boton 
let form = document.getElementById("form");

form.addEventListener('submit', (e) =>{

    e.preventDefault();

    let nombreCompleto = document.getElementById("nombreCompleto").value;
    let direccion = document.getElementById("direccion").value;
    let email = document.getElementById("email").value;
    let numeroTelefono = document.getElementById("numeroTelefono").value;

    // Guardar la data del usuario en un array
    let enviarDatos = {
        nombre: nombreCompleto,
        direccion: direccion,
        email: email,
        telefono: numeroTelefono
    }

    // Pedido enviado al restaurante
    let pedidos = {
        cantidadDeNapolitana: cantidadNapo,
        cantidadDeJamonYMorron: cantidadJam,
        cantidadDeMargarita: cantidadMar,
    }
    
    if (nombreCompleto == "" || direccion == "") {
        alert("Complete los campos.")
        return
    } else {
        alert("Su pedido fue realizado con exito.")
        datos.push(enviarDatos);
        pedido.push(pedidos);
    }

    console.log(datos);
    console.log(pedidos);
    
});

botonComida.addEventListener('click', (e) => {
    e.preventDefault();
    alert('El pedido se ha añadido correctamente');
    sumarPedido(0);
    cantidadNapo += 1;
    console.log(pedidoTotal);
    console.log(cantidadNapo);
    span1.style.display = 'flex'
    span1.innerHTML = `${cantidadNapo}x ${pizzas[0].nombre}: $${pizzas[0].precio}`
    
});

botonComida2.addEventListener('click', (e) => {
    e.preventDefault();
    alert('El pedido se ha añadido correctamente');
    sumarPedido(1);
    cantidadMar += 1;
    console.log(pedidoTotal);
    span2.style.display = 'flex'
    span2.innerHTML = `${cantidadMar}x ${pizzas[1].nombre}: $${pizzas[1].precio}`
});

botonComida3.addEventListener('click', (e) => {
    e.preventDefault();
    alert('El pedido se ha añadido correctamente');
    sumarPedido(2);
    cantidadJam += 1;
    console.log(pedidoTotal);
    span3.style.display = 'flex'
    span3.innerHTML = `${cantidadJam}x ${pizzas[2].nombre}: $${pizzas[2].precio}`
}); 

const sumarPedido = (e) => {
    pedidoTotal += pizzas[e].precio;
    cantidadTotal += 1;
    span.style.display = 'flex'
    span.innerHTML = `Total: $${pedidoTotal}`; 
}