
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

// Boton 
let form = document.getElementById("form");
let ul = document.getElementById("mensajePedido");
let li = document.createElement('li');
let li2 = document.createElement('li');
let li3 = document.createElement('li');
let liTotal = document.createElement('li');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    cargarPedido();
});

botonComida.addEventListener('click', (e) => {
    e.preventDefault();
    alert('El pedido se ha añadido correctamente');
    cargarLista(0);
    sumarPedido(0);
});

botonComida2.addEventListener('click', (e) => {
    e.preventDefault();
    alert('El pedido se ha añadido correctamente');
    cargarLista(1);
    sumarPedido(1);
});

botonComida3.addEventListener('click', (e) => {
    e.preventDefault();
    alert('El pedido se ha añadido correctamente');
    cargarLista(2);
    sumarPedido(2);
}); 

const sumarPedido = (e) => {
    pedidoTotal += pizzas[e].precio;
    liTotal.innerHTML = `<b>Total: $${pedidoTotal}</b>`; 
    ul.appendChild(liTotal);
};

const cargarLista = (e) => {
    switch (e) {
        case 0:
            cantidadNapo += 1;
            li.innerHTML = `${cantidadNapo}x ${pizzas[0].nombre}: $${pizzas[0].precio}`;
            ul.appendChild(li);
            break;
        case 1:
            cantidadMar += 1;
            li2.innerHTML = `${cantidadMar}x ${pizzas[1].nombre}: $${pizzas[1].precio}`;
            ul.appendChild(li2);
            break;
        case 2:
            cantidadJam += 1;
            li3.innerHTML = `${cantidadJam}x ${pizzas[2].nombre}: $${pizzas[2].precio}`;
            ul.appendChild(li3);
            break;
        default:
            break;
    }
};

const cargarPedido = () => {
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
    };
    
    // Pedido enviado al restaurante
    let pedidos = {
        cantidadDeNapolitana: cantidadNapo,
        cantidadDeJamonYMorron: cantidadJam,
        cantidadDeMargarita: cantidadMar,
    };
    
    if (nombreCompleto == "" || direccion == "") {
        alert("Complete los campos para realizar el pedido.");
        return;
    } else {
        datos.push(enviarDatos);
        pedido.push(pedidos);
        alert(`Su pedido fue realizado con éxito.`);
    }
    
    console.log(datos);
    console.log(pedidos);
};
