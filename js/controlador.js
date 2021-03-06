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
        for (let j = 0; j < 7; j++) { //Generar 10 apps por categoria
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


})();

var localStorage = window.localStorage;
localStorage.clear();
for (let i = 0; i < categorias.length; i++) {
    localStorage.setItem(i, JSON.stringify(categorias[i]));
}

for (let i = 0; i < localStorage.length; i++) {
    let categoria = JSON.parse(localStorage.getItem(localStorage.key(i)));
    document.getElementById('categoria').innerHTML +=
        `<option value="${localStorage.key(i)}">${categoria.nombreCategoria}</option>`;
}
for (let i = 1; i <= 50; i++) {
    document.getElementById('icono').innerHTML +=
        `<option value="img/app-icons/${i}.webp">Imagen ${i}</option>`;
    document.getElementById('icono').value = null;
}
if (document.getElementById('categoria').value = null) {

}


document.getElementById('icono').addEventListener('change', verImagen());

function verImagen() {
    if (document.getElementById('icono').value != null) {
        document.getElementById('formImagenApp').setAttribute('src', document.getElementById('icono').value);

    } else {
        document.getElementById('formImagenApp').setAttribute('src', 'img/user.webp');

    }
}


document.getElementById('categoria').addEventListener('change', seleccionarCategoria());

function seleccionarCategoria() {
    document.getElementById('aplicaciones').innerHTML = "";
    console.log('Categoria seleccionada:', document.getElementById('categoria').value);
    generrarApp(JSON.parse(localStorage.getItem(document.getElementById('categoria').value)));

}


function generrarApp(categoria) {
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
            `<div class="col-lg-2 col-md-3 col-6">
                <div class="card-shadow" >
                    <img src="${aplicacion.icono}" onclick="detalleApp(${aplicacion.codigo})"class="card-img-top " alt="... ">
                    <div class="card-body">
                        <h5 class="card-title ">${aplicacion.nombre}</h5>
                        <p class="card-text ">${aplicacion.desarrollador} </p>
                        <div class="my-2">
                            ${estrellas}
                        </div>
                        <div class="my-2">
                            <button class="btn btn-outline-danger" onclick="eliminarApp(${i})"><i class="fas fa-trash"></i></button>
                        </div>
                    </div>
                </div>
            </div>`;

    })
    document.getElementById('aplicaciones').innerHTML = magic;
}

function eliminarApp(indice) {
    console.log('La app a eliminar es:', indice);
    let categoria = JSON.parse(localStorage.getItem(document.getElementById('categoria').value));
    let codigo = document.getElementById('categoria').value;
    localStorage.setItem(codigo, JSON.stringify(categoria));
    categoria.aplicaciones.splice(indice, 1);
    generrarApp(categoria);

}

function detalleApp(codigoAppSeleccionada) {
    $('#modal-detalle').modal('show');
    console.log('Categoria seleccionada', document.getElementById('categoria').value);
    console.log('Codigo de Aplicacion:', codigoAppSeleccionada);
    let categoria = JSON.parse(localStorage.getItem(document.getElementById('categoria').value));
    for (let i = 0; i < categoria.aplicaciones.length; i++) {
        if (codigoAppSeleccionada == categoria.aplicaciones[i].codigo) {
            let aplicacion = categoria.aplicaciones[i];
            console.log('La aplicacion a mmostrar en el modal es:');
            console.log(aplicacion);
            document.getElementById('nombre-app').innerHTML = aplicacion.nombre;
            document.getElementById('imagen-app').setAttribute('src', aplicacion.icono);
            document.getElementById('desarrollador-app').innerHTML = aplicacion.desarrollador;
            document.getElementById('descripcion-app').innerHTML = aplicacion.descripcion;
            // document.getElementById('estrellas-app').innerHTML = "";
            let estrellas = '';
            for (let i = 0; i < aplicacion.calificacion; i++) {
                estrellas += '<i class="fas fa-star"></i>';
            }
            for (let i = 0; i < 5 - aplicacion.calificacion; i++) {
                estrellas += '<i class="far fa-star" ></i>';
            }
            document.getElementById('estrellas-app').innerHTML = estrellas;




        }
    }

}

function nuevaApp() {
    $('#modal-nueva-app').modal('show');
    let codigo = document.getElementById('categoria').value;
    console.log('Se abrio la modal para new app');
    let muestra;
    muestra =
        `<button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-warning"  onclick="guardarApp(${codigo});">Guardar</button>`;
    document.getElementById('pied-modal').innerHTML = muestra;
}

function guardarApp(categoriaSeleccionada) {

    let categoria = JSON.parse(localStorage.getItem(document.getElementById('categoria').value));

    console.log('La app se guardara en la', categoriaSeleccionada);

    const app = {


            nombre: document.getElementById('nombre').value,
            descripcion: document.getElementById('descripcion').value,
            icono: document.getElementById('icono').value,
            calificacion: document.getElementById('calificacion').value,
            descargas: document.getElementById('descargas').value,
            desarrollador: document.getElementById('desarrollador').value,

        }
        // console.log('Que devuelve ', category.aplicaciones);
    categoria.aplicaciones.push(app);
    localStorage.setItem(categoriaSeleccionada, JSON.stringify(categoria));
    generrarApp(categoria);



    $('#modal-nueva-app').modal('hide');

}