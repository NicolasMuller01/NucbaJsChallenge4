const btn = document.querySelector('button');
const inputt = document.querySelector('input');
const template = document.querySelector(".pizza-contenedor");

const pizza = [

    {
        id:1,
        nombre:"nevada", 
        ingredientes:["queso","huevo","salsa"],
        precio:700,
        image:"https://cdn.pixabay.com/photo/2016/03/05/21/45/pizza-1239077_960_720.jpg"
    },
    {
        id:2,
        nombre:"cebollada", 
        ingredientes:["queso","cebolla","ajo","salsa"],
        precio:400,
        image:"https://cdn.pixabay.com/photo/2016/11/29/13/02/cheese-1869708_960_720.jpg"
    },
    {
        id:3,
        nombre:"super", 
        ingredientes:["queso","huevo","salsa","oregano","cheddar"],
        precio:400,
        image:"https://cdn.pixabay.com/photo/2014/07/08/12/34/pizza-386717_960_720.jpg"
    },
    {
        id:4,
        nombre:"picante", 
        ingredientes:["queso","huevo","salsa extra picante","salsa mexicana"],
        precio:1000,
        image:"https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272_960_720.jpg"
    }
];

localStorage.setItem('pizza', JSON.stringify(pizza));

btn.addEventListener('click',()=>{
   try{
    let pizzaFiltrada = pizza.filter(item => item.id==inputt.value).map(item =>({
        id:item.id,
        nombre:item.nombre,
        ingredientes:item.ingredientes,
        precio:item.precio,
        image:item.image
    }))
    if(pizzaFiltrada[0].id == inputt.value){
        template.innerHTML=`
        <h2>id: ${pizzaFiltrada[0].id}</h2>
        <h1>nombre: ${pizzaFiltrada[0].nombre}</h1>
        <ul>Ingredientes: ${pizzaFiltrada[0].ingredientes.map(item =>{return`<li>${item}</li>`}).join("")}</ul>
        <h3>precio: $${pizzaFiltrada[0].precio}</h3>
        <img src="${pizzaFiltrada[0].image}"></img>`
    }
   }
   catch(err){
    return template.innerHTML=`<h1>No existe ese id pa</h1>`
   }
})
