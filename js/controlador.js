//Codigo para generar información de categorias y almacenarlas en un arreglo.
var categorias = [];
(() => {
    //Este arreglo es para generar textos de prueba
    let textosDePrueba = [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
        "Quaerat quod qui molestiae sequi, sint aliquam omnis quos voluptas?",
        "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
        "Ducimus, repellendus voluptate quo veritatis tempora recusandae dolorem optio illum."
    ]

    //Genera dinamicamente los JSON de prueba para esta evaluacion,
    //Primer ciclo para las categorias y segundo ciclo para las apps de cada categoria


    var contador = 1;
    for (let i = 0; i < 5; i++) { //Generar 5 categorias
        let categoria = {
            nombreCategoria: "Categoria " + i,
            descripcion: textosDePrueba[Math.floor(Math.random() * (5 - 1))],
            aplicaciones: []
        };
        for (let j = 0; j < 10; j++) { //Generar 10 apps por categoria
            let aplicacion = {
                codigo: contador,
                nombre: "App " + contador,
                descripcion: textosDePrueba[Math.floor(Math.random() * (5 - 1))],
                icono: `img/app-icons/${contador}.webp`,
                instalada: contador % 3 == 0 ? true : false,
                app: "app/demo.apk",
                calificacion: Math.floor(Math.random() * (5 - 1)) + 1,
                descargas: 1000,
                desarrollador: `Desarrollador ${(i+1)*(j+1)}`,
                imagenes: ["img/app-screenshots/1.webp", "img/app-screenshots/2.webp", "img/app-screenshots/3.webp"],
                comentarios: [
                    { comentario: textosDePrueba[Math.floor(Math.random() * (5 - 1))], calificacion: Math.floor(Math.random() * (5 - 1)) + 1, fecha: "12/12/2012", usuario: "Juan" },
                    { comentario: textosDePrueba[Math.floor(Math.random() * (5 - 1))], calificacion: Math.floor(Math.random() * (5 - 1)) + 1, fecha: "12/12/2012", usuario: "Pedro" },
                    { comentario: textosDePrueba[Math.floor(Math.random() * (5 - 1))], calificacion: Math.floor(Math.random() * (5 - 1)) + 1, fecha: "12/12/2012", usuario: "Maria" },
                ]
            };
            contador++;
            categoria.aplicaciones.push(aplicacion);
        }
        categorias.push(categoria);
    }

    console.log(categorias);
    /*
    var iteracion = categorias.values();
    for (let valor of iteracion) {
        console.log(valor.nombreCategoria);
    }*/

})();

// Configurar que guarde en localStorage

// Que se despleguen las categorias
/*
var i;
var j;
let contador = 0;
for (i = 0; i < categorias.length; i++) {
    var elementos = categorias[i];
    // var constante += categorias[i];
    //jr.push(elementos.nombreCategoria);
    // console.log('Las iteraciones', elementos, i);
    // console.log(elementos.nombreCategoria);
    // console.log(elementos);
    for (j = 0; j < elementos.aplicaciones.length; j++) {
        var salida = elementos.aplicaciones[j];
        //console.log(salida);
        generrarApp(salida);



    };
*/

/*
function seleccionarCategoria() {
    categorias.forEach(function(categoria, i) {
        seleccionar += `<option value="${i}">${categoria.nombreCategoria}</option>`;
        // generrarApp(categoria);
        //categoria.addEventListener('change', generrarApp(categoria));

    });
    document.getElementById('categoria').innerHTML = seleccionar;

    //generrarApp(categoria.aplicaciones);
    // document.getElementById('categoria').innerHTML += `<option>${elementos.nombreCategoria}</option>`;
    // document.addEventListener('DOMContentLoaded', sC);
    // document.addEventListener('change', elementos.nombreCategoria, true);
};
seleccionarCategoria();
*/
// <select id="filter-list" name="filter" onchange="filterChanged();"></select>
// categoria.addEventListener('change', seleccionarCategoria);
/*
window.onload = function() {
    let categoria = document.getElementById('categoria');
    categoria.onchange = function() {
        // The code of your function
        let seleccionar;
        categorias.forEach(function(categoria, i) {
            seleccionar += `<option value="${i}">${categoria.nombreCategoria}</option>`;
            generrarApp(categoria);
        });
        categoria.innerHTML = selecionar;
    }
}*/
/*
function seleccionarCategoria() {
    let seleccionar;
    categorias.forEach(function(categoria) {
        seleccionar += `<option>${categoria.nombreCategoria}</option>`;
        // generrarApp(categoria);
    });
    document.getElementById('categoria').innerHTML = seleccionar;

}
document.getElementById('categoria').addEventListener('change', seleccionarCategoria);
*/
document.getElementById('categoria').addEventListener('change', seleccionarCategoria());

function seleccionarCategoria(valor) {
    let seleccionar;
    categorias.forEach(function(categoria, i) {
        seleccionar += `<option value=${i}>${categoria.nombreCategoria}</option>`;
    });
    document.getElementById('categoria').innerHTML = seleccionar;
    console.log('Los valores son', categorias[valor].nombreCategoria);

    generrarApp(categorias[valor]);

}
// seleccionarCategoria();

/*function start() {
    document.addEventListener('DOMContentLoaded', sC, true);
    // document.addEventListener('onchange', sC, false);

}
start();
*/
// generrarApp(categoria);




/*for (let i = 0; i < categorias.length; i++) {
    const elementos = categorias[i];
    console.log('Los nombres de la categoria', elementos.nombreCategoria);
};
*/
// document.addEventListener('unload', true);

//document.getElementById('categoria').innerHTML += `<option>${cat.nombreCategoria}</option>`

/*    // document.getElementById('aplicaciones').innerHTML = '';
    for (let i = 0; i < categorias.length; i++) {
        var elementos = categorias[i];
        console.log(elementos.nombreCategoria);

    };
    for (let j = 0; j < elementos.aplicaciones.length; j++) {
        var salida = elementos.aplicaciones[j];
        console.log(salida);
        // const element = categorias[i];
        // salida.aplicaciones.forEach(function(app, i) {
        */

function generrarApp(categoria) {
    /* for (let i = 0; i < categoria.aplicaciones.length; i++) {
         let estrellas = '';
         for (let i = 0; i < categoria.aplicaciones[j].calificacion; i++) {
             estrellas += '<i class="fas fa-star"></i>';
         }
         for (let i = 0; i < 5 - (categoria.aplicaciones[j].calificacion); i++) {
             estrellas += '<i class="far fa-star" ></i>';
         }*/
    //categorias.forEach(function(categoria) {
    let magic;
    categoria.aplicaciones.forEach(function(aplicacion, i) {

        let estrellas = '';
        for (let i = 0; i < aplicacion.calificacion; i++) {
            estrellas += '<i class="fas fa-star"></i>';
        }
        for (let i = 0; i < 5 - aplicacion.calificacion; i++) {
            estrellas += '<i class="far fa-star" ></i>';
        }
        magic +=
            `<div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <div class="card">
                    <img src="${aplicacion.icono}" class="card-img-top " alt="... ">
                    <div class="card-body">
                        <h5 class="card-title ">${aplicacion.nombre}</h5>
                        <p class="card-text ">${aplicacion.desarrollador} </p>
                        <div class="my-2">
                            ${estrellas}
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>`;

    })
    document.getElementById('aplicaciones').innerHTML = magic;

    // })
}
// }

// generrarApp(categoria);