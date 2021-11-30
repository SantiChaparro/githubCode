// categorias

const d = window.document,
$categorias = d.getElementById("categorias"),
$template = d.getElementById("categorias-template").content,
$categoriasContainer = d.querySelector(".categorias-container");
let $fragment = d.createDocumentFragment();

let categorias = [
    {
        categoria: "Tartas",
        img: "/assets/images/tartas.jpg",
        id: "#tartas"
    },
    {
        categoria: "Alfajores",
        img: "/assets/images/alfajores.jpg",
        id: "#alfajores"
    },
    {
        categoria: "Otros",
        img: "/assets/images/otros.jpg",
        id: "#otros"
    }
];
categorias.forEach(el => {
   $template.querySelector("a").innerHTML = el.categoria;
   $template.querySelector("a").setAttribute("href",el.id);
   $template.querySelector("img").setAttribute("src",el.img);
   $template.querySelector("figcaption").setAttribute("alt",el.categoria);
    let $clone = d.importNode($template,true);
    $fragment.appendChild($clone);
});
$categoriasContainer.appendChild($fragment);
$categorias.appendChild($categoriasContainer);

// productos

let $productos = d.getElementById("productos"),
$productosContainer = d.querySelector(".productos-container"),
$productosTemplate = d.querySelector("#productos-template").content;

let productos = [
    {
        titulo: "Fruta y crema",
        img: "/assets/images/frutilla_crema.jpg",
        descripcion: "Dulce masa de manteca, rellena de crema chantilly y fruta a elección (frutilla, pera o durazno).",
        precio: "$ 1300"
    },
    {
        titulo: "Lemon Pie",
        img: "/assets/images/lemon_pie.jpg",
        descripcion: "Masa exquisita rellena de una delicada pastelera de limón y merengue.",
        precio: "$ 1100"
    },
    {
        titulo: "Ricota y Naranja",
        img:"/assets/images/ricota_naranja.png",
        descripcion: "Esta increible versión lleva una suave crema de ricota y la frescura de la naranja",
        precio: "$ 1100"
    },
    {
        titulo: "Marquise merengue",
        img: "/assets/images/marquise-merengue.jpg",
        descripcion: "Brownie de chocolate, dulce de leche repostero y una corona de merengue",
        precio: "$ 1500"
    },
    {
        titulo: "Marquise frutos rojos",
        img: "/assets/images/marquis-frutosRojos.png",
        descripcion: "Brownie de chocolate, dulce de leche repostero y una corona crema chantilli con frutos rojos",
        precio: "$ 1700"
    },
    {
        titulo: "Pastelera y manzanas",
        img: "/assets/images/manzana_pastelera.jpg",
        descripcion: "Rodajas de manzanas salteadas en manteca y azucar sobre un colchón de pastelera",
        precio: "$ 1200"
    },
    {
        titulo: "ChocoTorta",
        img: "/assets/images/chocoTorta.jpg",
        descripcion: "Capas de galletas de chocolate y dulce de leche con queso crema",
        precio: "$ 1600"
    },
    {
        titulo: "Cabsha",
        img: "/assets/images/cabsha.jpg",
        descripcion: "Tarta rellena de dilce de leche repostero bañada con ganache de chocolate",
        precio: "$ 1200"
    },
    {
        titulo: "CheeseCake frutilla",
        img: "/assets/images/cheesecake.jpg",
        descripcion: "Tarta de queso y crema con salsa de frutilla o bien frutos rojos",
        precio: "$ 1800"
    },
    {
        titulo: "Pasta frola",
        img:"/assets/images/pasta_frola.jpg",
        descripcion: "Masa rellena de dulce de membrillo",
        precio: "$ no se"
    }
];
productos.forEach(el => {
    $productosTemplate.querySelector("h3").innerHTML = el.titulo;
    $productosTemplate.querySelector("img").setAttribute("src",el.img);
    $productosTemplate.querySelector(".descripcion").innerHTML = el.descripcion;
    $productosTemplate.querySelector(".precio").innerHTML = el.precio;
    let $cloneProductos = d.importNode($productosTemplate,true);
    $fragment.appendChild($cloneProductos);
});

$productosContainer.appendChild($fragment);
$productos.appendChild($productosContainer);








