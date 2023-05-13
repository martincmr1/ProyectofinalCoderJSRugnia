/////////////////////////////ARRAY DE PRODUCTOS SERVER///////////////////////////////////////////////////////////////////////////////
/////////// Esta Funcion Solicita el array de PRODUCTOS de la api que cree en Google Firebase///////////////////////////////////////

/*function verProductosapi() {
  fetch("https://api-boxes-default-rtdb.firebaseio.com/productos.json")
    .then((response) => response.json())
    .then((jsonResponse) => {
      productosServer = jsonResponse;
     let productosGuardados = localStorage.getItem('productos');
      if (productosGuardados) {
        let productosJSON = JSON.parse(productosGuardados);
        productosJSON.forEach(producto => productos.push(producto));
      }
    productos = productos.concat(productosServer);
    });
}

let productos = [];
let productosServer = [];

verProductosapi();
*/



function verProductosapi() {
 fetch("https://api-boxes-default-rtdb.firebaseio.com/productos.json")
 .then((response) => response.json())
 .then((jsonResponse) => {
 productosServer = jsonResponse;
 productos = productosServer;   
})
}
let productos = [];
let productosServer = [];
verProductosapi();

///////////ES EL VALOR ADICIONAL DEL SERVICIO PREMIUM///////////////////////////////////////////////
const PREMIUM = 2500

//////////////////////ESTA FUNCION REFRESCA LA PAGINA////////////////////////////////////////////////////

function refrescarPagina() {
 location.reload();
}
/////////////////AGREGA FECHA Y HORA ACTUAL AL DOCUMENTO//////////////////////////////////////////////////////

function agregarFechayhora() {
const fechaHora = document.getElementById("fechaYhora");
const ahora = new Date();
const fechaHoraString = ahora.toLocaleString();
fechaHora.innerHTML = fechaHoraString;
}
agregarFechayhora()

//////////CAMBIAR DIRECCION Y TELEFONO////////////////////////////////////////////

let botonCambiardireccion = document.getElementById('boton10');
let direccionElement = document.getElementById('direccion');
let direccionGuardada = localStorage.getItem("direccion");

if (direccionElement && direccionGuardada) {
  direccionElement.innerHTML = direccionGuardada;
}

botonCambiardireccion.addEventListener('click', () => {
  let direccion1 = document.getElementById("direccioninput").value;
  if (direccionElement) {
    direccionElement.innerHTML = direccion1;
    document.getElementById("direccioninput").value = "";
    localStorage.setItem("direccion", direccion1);
   refrescarPagina()
  }
});

let botonCambiarTelefono = document.getElementById('boton11');
let telefonoElement = document.getElementById('telefono');
let telefonoGuardada = localStorage.getItem("telefono");

if (telefonoElement && telefonoGuardada) {
  telefonoElement.innerHTML = telefonoGuardada;
}

botonCambiarTelefono.addEventListener('click', () => {
  let telefono1 = document.getElementById("telefonoinput").value;
  if (telefonoElement) {
    telefonoElement.innerHTML = telefono1;
    document.getElementById("telefonoinput").value = "";
    localStorage.setItem("telefono", telefono1);
    refrescarPagina()
  }
});


//////////////////////////////MOSTRAR TOAST AL AGREGAR PRODUCTOS, CALCULAR PRESUPUESTO Y ELIMINAR STORAGE///////////////////////////////////////////////////////
function mostrarToast() {
  Toastify({
    text: "Producto Agregado",
    duration: 300,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    gravity: "top", 
    position: "right", 
    stopOnFocus: true, 
    style: {
    background: "linear-gradient(to right, #0D39C1  , #092EA2)",
    },
    onClick: function(){} 
  }).showToast();
}
function mostrarToasttotal() {
  Toastify({
    text: "Calculando presupuesto",
    duration: 300,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    gravity: "top", 
    position: "right", 
    stopOnFocus: true, 
    style: {
    background: "linear-gradient(to right, #0D39C1  , #092EA2)",
    },
    onClick: function(){} 
  }).showToast();
}
function mostrarToast3() {
  Toastify({
    text: "Local Storage eliminado",
    duration: 300,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    gravity: "top", 
    position: "right", 
    stopOnFocus: true,
    style: {
    background: "linear-gradient(to right, #0D39C1  , #092EA2)",
    },
    onClick: function(){} 
  }).showToast();
}
function mostrarToast4() {
  Toastify({
    text: "Producto agregado a Local Storage",
    duration: 300,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    gravity: "top", 
    position: "right", 
    stopOnFocus: true,
    style: {
    background: "linear-gradient(to right, #0D39C1  , #092EA2)",
    },
    onClick: function(){} 
  }).showToast();
}
/////////////FUNCIONES PARA STORAGE AGREGAR Y OBTENER//////////////////////////////////////////////////

/*
function agregarStorage() {
 let productosJSON = JSON.stringify(productos);
 localStorage.setItem("productos", productosJSON);
}
function obtenerStorage(){
let productosGuardados = localStorage.getItem('productos');
let productosJSON = JSON.parse(productosGuardados);
if (productosJSON) {
  productos = productosJSON;
}}
obtenerStorage()
*/
function limpiarLocalStorage() {
  localStorage.clear();
  refrescarPagina()
}



///////////////////////AGREGAR NUEVOS PRODUCTOS AL ARRAY ////////////////////////
/*
const botonAgregarProducto = document.getElementById('agregar-producto');
const modalAgregarProducto = document.getElementById('modal-agregar-producto');
botonAgregarProducto.addEventListener('click', () => {
  modalAgregarProducto.style.display = 'block';
});
const formularioAgregarProducto = document.getElementById('formulario-agregar-producto');
formularioAgregarProducto.addEventListener('submit', (event) => {
event.preventDefault()
let codigo = document.getElementById('codigox').value;
let descripcion = document.getElementById('descripcionx').value;
let precio = document.getElementById('preciox').value;
let nuevoProducto = {codigo,descripcion,precio};
productos.push(nuevoProducto); 
modalAgregarProducto.style.display = 'none';
formularioAgregarProducto.reset();
agregarStorage()
mostrarToast4()
});    */
//////////////////////////AGREGAR PRODUCTOS A LA TABLA (busca el código y devuelve precio y descripcion del array productos)/////////

function buscarCoincidencia(){
 const codigo = document.getElementById("inputBuscar").value
 const producto = productos.find(p => p.codigo === codigo);
  if (!producto) {
    Swal.fire('código no encontrado')
    }
    document.getElementById('descripcion').innerHTML=producto.descripcion
    if (producto.precio==0){
      document.getElementById("fila1").style.display = "none";
     }else
    document.getElementById ('precio').innerHTML=producto.precio
}
function buscarCoincidencia1(){
 const codigo = document.getElementById("inputBuscar1").value
 const producto = productos.find(p => p.codigo === codigo);
  if (!producto) {
    Swal.fire('código no encontrado')
  }
   document.getElementById('descripcion1').innerHTML=producto.descripcion
   if (producto.precio==0){
    document.getElementById("fila2").style.display = "none";
   }else   
   document.getElementById ('precio1').innerHTML=producto.precio
}
function buscarCoincidencia2(){
 const codigo = document.getElementById("inputBuscar2").value
 const producto = productos.find(p => p.codigo === codigo);
  if (!producto) {
    Swal.fire('código no encontrado')
  }
  document.getElementById('descripcion2').innerHTML=producto.descripcion
  if (producto.precio==0){
    document.getElementById("fila3").style.display = "none";
   }else 
  document.getElementById ('precio2').innerHTML=producto.precio
}
function buscarCoincidencia3(){
 const codigo = document.getElementById("inputBuscar3").value
 const producto = productos.find(p => p.codigo === codigo);
  if (!producto) {
    Swal.fire('código no encontrado')
  }
   document.getElementById('descripcion3').innerHTML=producto.descripcion
   if (producto.precio==0){
    document.getElementById("fila4").style.display = "none";
   }else
   document.getElementById ('precio3').innerHTML=producto.precio
}
function buscarCoincidencia4(){
 const codigo = document.getElementById("inputBuscar4").value
 const producto = productos.find(p => p.codigo === codigo);  
  if (!producto) {
    Swal.fire('código no encontrado')
  }
   document.getElementById('descripcion4').innerHTML=producto.descripcion
   if (producto.precio==0){
    document.getElementById("fila5").style.display = "none";
   }else  
   document.getElementById ('precio4').innerHTML=producto.precio
}
function buscarCoincidencia5(){
 const codigo = document.getElementById("inputBuscar5").value
 const producto = productos.find(p => p.codigo === codigo);
  if (!producto) {
    Swal.fire('código no encontrado')
  }
   document.getElementById('descripcion5').innerHTML=producto.descripcion
   if (producto.precio==0){
    document.getElementById("fila6").style.display = "none";
   }else  
   document.getElementById ('precio5').innerHTML=producto.precio
}
function buscarCoincidencia6(){
 const codigo = document.getElementById("inputBuscar6").value
 const producto = productos.find(p => p.codigo === codigo);
  if (!producto) {
    Swal.fire('código no encontrado')
  }
   document.getElementById('descripcion6').innerHTML=producto.descripcion
   if (producto.precio==0){
    document.getElementById("fila7").style.display = "none";
   }else
   document.getElementById ('precio6').innerHTML=producto.precio
}

/// AL CLICKEAR LOS BOTONES "AGREGAR" MUESTRA EL VALOR DE DESCRIPCION Y PRECIO DEL ARRAY PRODUCTOS VINCULADOS AL CODIGO SELECCIONADO///

let boton0 = document.getElementById("boton0")
boton0.addEventListener("click", () => {
buscarCoincidencia()
mostrarToast()
})
let boton1 = document.getElementById("boton1")
boton1.addEventListener("click", () => {
buscarCoincidencia1()
mostrarToast()
})
let boton2 = document.getElementById("boton2")
boton2.addEventListener("click", () => {
buscarCoincidencia2()
mostrarToast()
})  
let boton3 = document.getElementById("boton3")
boton3.addEventListener("click", () => {
buscarCoincidencia3()
mostrarToast()
})
let boton4 = document.getElementById("boton4")
boton4.addEventListener("click", () => {
buscarCoincidencia4()
mostrarToast()
})
let boton5 = document.getElementById("boton5")
boton5.addEventListener("click", () => {
buscarCoincidencia5()
mostrarToast()
})
let boton6 = document.getElementById("boton6")
boton6.addEventListener("click", () => {
buscarCoincidencia6()
mostrarToast()
})
let boton7 = document.getElementById("boton7")
boton7.addEventListener("click", () => {
sumatodo()
mostrarToast()
})
let boton8 = document.getElementById("boton8")
boton8.addEventListener("click", () => {
buscarDescripcion()
mostrarToast()
})
let boton9 = document.getElementById("boton9")
boton9.addEventListener("click", () => {
limpiarLocalStorage()
mostrarToast3()
})

////////////ESTAS FUNCIONES SUMAN TODOS LOS CODIGOS INGRESADOS LUEGO DE CLICKEAR EL BOTON TOTAL///////////////

function sumarPrecios1() {
 const precios = [
    parseFloat(document.getElementById('precio').innerHTML) || 0,
    parseFloat(document.getElementById('precio1').innerHTML) || 0,
    parseFloat(document.getElementById('precio2').innerHTML) || 0,
    parseFloat(document.getElementById('precio3').innerHTML) || 0,
    parseFloat(document.getElementById('precio4').innerHTML) || 0,
    parseFloat(document.getElementById('precio5').innerHTML) || 0,
    parseFloat(document.getElementById('precio6').innerHTML) || 0
  ];
  let precioTotal2 = 0;
  for (let i = 0; i < precios.length; i++) {
    precioTotal2 += precios[i];
  }
  document.getElementById('sumaCompleto').innerHTML = '$' + precioTotal2;
 ocultarBotones()
 ocultarInputs()
}
function sumarPrecios2() {
  const precios = [
    parseFloat(document.getElementById('precio').innerHTML) || 0,
    parseFloat(document.getElementById('precio1').innerHTML) || 0,
    parseFloat(document.getElementById('precio2').innerHTML) || 0,
    parseFloat(document.getElementById('precio3').innerHTML) || 0,
    parseFloat(document.getElementById('precio4').innerHTML) || 0,
    parseFloat(document.getElementById('precio5').innerHTML) || 0,
    parseFloat(document.getElementById('precio6').innerHTML) || 0
  ];
  let precioTotal = 0;
  for (let i = 0; i < precios.length; i++) {
    precioTotal += precios[i];
  }
  precioTotal += PREMIUM;
  document.getElementById('sumaPremium').innerHTML = '$' + precioTotal;
  mostrarToasttotal()
  ocultarBotones();
  ocultarInputs();
}

function sumatodo() {
  document.getElementById("boton0").click();
 document.getElementById("boton1").click();
 document.getElementById("boton2").click();
 document.getElementById("boton3").click();
 document.getElementById("boton4").click();
 document.getElementById("boton5").click();
 document.getElementById("boton6").click();
 sumarPrecios1();
 sumarPrecios2();
 setTimeout (() => {
  imprimirPagina()
},2000)
  
}

     
///////ESTA FUNCION BUSCA UNA CADENA EN DESCRIPCION DEL ARRAY Y DEVUELVE LAS COINCIDENCIAS EN UNA LI MOSTRANDO CODIGO-DESCRIPCION//////

function buscarDescripcion() {
  const resultados = [];
  const busqueda = document.getElementById('buscarInput').value.toLowerCase();
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].descripcion.toLowerCase().includes(busqueda)) {
      resultados.push(`<li>${productos[i].codigo} - ${productos[i].descripcion}</li>`);
    }
  }
  document.getElementById('resultados').innerHTML = resultados.join('');
}

///ESTAS FUNCIONES OCULTAN LOS BOTONES, INPUTS Y MUESTRA EL CONTENEDOR DIAGNOSTICOS PARA GENERAR UN PRESUPUESTO LISTO PARA IMPRIMIR/////////////////// 
/////////////////LA PAGINA SE REFRESCA LUEGO DE 1.5 MINUTOS PARA GENERAR UN NUEVO PRESUPUESTO////////////////////////////////
function ocultarBotones(){  
  document.getElementById("boton0").style.display = "none";
  document.getElementById("boton1").style.display = "none";
  document.getElementById("boton2").style.display = "none";
  document.getElementById("boton3").style.display = "none";
  document.getElementById("boton4").style.display = "none";
  document.getElementById("boton5").style.display = "none";
  document.getElementById("boton6").style.display = "none";
  document.getElementById("boton7").style.display = "none";
  document.getElementById("diagnosticos_contenedor").style.display = "block";
  document.getElementById("contenedorCertificado").style.display = "block"; 
  document.getElementById("contenedorBtnLimpiarStorage").style.display = "none";
  document.getElementById("boton10").style.display = "none";
  document.getElementById("boton11").style.display = "none";

} 
function ocultarInputs() {
  document.getElementById("boton8").style.display ="none";
  document.getElementById("buscarInput").style.display ="none";
  document.getElementById("resultados").style.display ="none";
  document.getElementById("inputBuscar").style.display = "none"; 
  document.getElementById("inputBuscar1").style.display = "none"; 
  document.getElementById("inputBuscar2").style.display = "none";  
  document.getElementById("inputBuscar3").style.display = "none"; 
  document.getElementById("inputBuscar4").style.display = "none"; 
  document.getElementById("inputBuscar5").style.display = "none"; 
  document.getElementById("inputBuscar6").style.display = "none"; 
  document.getElementById("direccioninput").style.display = "none"; 
  document.getElementById("telefonoinput").style.display = "none"; 
  document.getElementById("icono_aceite").style.display = "flex";
  document.getElementById("icono_combustible").style.display = "flex";
  document.getElementById("icono_aire").style.display = "flex";
  
  let inputBuscar = document.getElementById("inputBuscar");
  let inputBuscar1 = document.getElementById("inputBuscar1");
  let inputBuscar2 = document.getElementById("inputBuscar2");
  let inputBuscar3 = document.getElementById("inputBuscar3");
  
  if (inputBuscar.value === "103899" || inputBuscar.value ==="103896") {
    document.getElementById("icono_elaionf30").style.display = "flex";    
  }
  else if (inputBuscar.value === "104099" || inputBuscar.value ==="104096" || inputBuscar.value === "193299" || inputBuscar.value === "193296"){
    document.getElementById("icono_elaionf50").style.display = "flex"; 
  }
  else if (inputBuscar.value === "103799" || inputBuscar.value === "103796" || inputBuscar.value === "108099" || inputBuscar.value === "108096") {
    document.getElementById("icono_elaionf10").style.display = "flex"; 
  }else 
  document.getElementById("icono_elaion").style.display = "flex"; 
  
  
  
  if (inputBuscar1.value === "103899" || inputBuscar1.value ==="103896") {
    document.getElementById("icono_elaionf301").style.display = "flex";    
  }
  else if (inputBuscar1.value === "104099" || inputBuscar1.value ==="104096" || inputBuscar1.value === "193299" || inputBuscar1.value === "193296"){
    document.getElementById("icono_elaionf501").style.display = "flex"; 
  }
  else if (inputBuscar1.value === "103799" || inputBuscar1.value === "103796" || inputBuscar1.value === "108099" || inputBuscar1.value === "108096") {
    document.getElementById("icono_elaionf101").style.display = "flex"; 
  }else 
  document.getElementById("icono_elaion1").style.display = "flex"; 


  if (inputBuscar2.value === "103899" || inputBuscar2.value ==="103896") {
    document.getElementById("icono_elaionf302").style.display = "flex";    
  }
  else if (inputBuscar2.value === "104099" || inputBuscar2.value ==="104096" || inputBuscar2.value === "193299" || inputBuscar2.value === "193296"){
    document.getElementById("icono_elaionf502").style.display = "flex"; 
  }
  else if (inputBuscar2.value === "103799" || inputBuscar2.value === "103796" || inputBuscar2.value === "108099" || inputBuscar2.value === "108096") {
    document.getElementById("icono_elaionf102").style.display = "flex"; 
  }else 
  document.getElementById("icono_elaion2").style.display = "flex"; 

 
 
  if (inputBuscar3.value === "103899" || inputBuscar3.value ==="103896") {
    document.getElementById("icono_elaionf303").style.display = "flex";    
  }
  else if (inputBuscar3.value === "104099" || inputBuscar3.value ==="104096" || inputBuscar3.value === "193299" || inputBuscar3.value === "193296"){
    document.getElementById("icono_elaionf503").style.display = "flex"; 
  }
  else if (inputBuscar3.value === "103799" || inputBuscar3.value === "103796" || inputBuscar3.value === "108099" || inputBuscar3.value === "108096") {
    document.getElementById("icono_elaionf103").style.display = "flex"; 
  }else 
  document.getElementById("icono_elaion3").style.display = "flex"; 
 
  



 

 
  /*document.getElementById("agregarProductos").style.display = "none"; */
  document.getElementById("logo_aca").style.display = "flex"; 
  document.getElementById("logo_credito").style.display = "flex"; 
  document.getElementById("logo_escalonado").style.display = "flex"; 
  document.getElementById("logo_cosmetica").style.display = "flex";

  setTimeout (() => {
    refrescarPagina()
  },90000)
}

/////ACA VINCULO CON LOS INPUT HTML PARA QUE AL USAR USAR EL ELEMENTO SELECT AGREGUE LOS CODIGOS CORRESPONDIENTES A CADA VEHICULO/////

let campo1 = document.getElementById("inputBuscar");
let campo2 = document.getElementById("inputBuscar1");
let campo3 = document.getElementById("inputBuscar2");
let campo4 = document.getElementById("inputBuscar3");
let campo5 = document.getElementById("inputBuscar4");
let campo6 = document.getElementById("inputBuscar5");
let campo7 = document.getElementById("inputBuscar6");
let campo8 = document.getElementById("inputBuscar7");


////////////////ESTA FUNCION RECARGA LA PAGINA AL USAR EL SELECT PARA GENERAR UN NUEVO PRESUPUESTO

function recargarPagina() {
  document.getElementById("autos").addEventListener('change', function() {     
  location.reload();
  });
}

////ACA HICE OBJETOS CON CADA SELECCION DE AUTO CON SUS CODIGOS CORRESPONDIENTES Y SE AGREGUEN AL INPUT PARA LUEGO CLICKEAR TOTAL//////////////////////

document.getElementById("autos").addEventListener('change', function() {
  let valor_select = this.value;
  if (valor_select == "goltrend") {
    campo1.value ="172795";
    campo5.value = "18595";
    campo6.value = "18958";
    campo7.value = "15424";
    recargarPagina()
  }
  if (valor_select == "suran8v") {
    campo1.value ="172795";
    campo5.value = "18595";
    campo6.value = "18958";
    campo7.value = "18739";
    recargarPagina()
  }
  if (valor_select == "suran16v") {
    campo1.value ="172795";
    campo5.value = "15502";
    campo6.value = "15979";
    campo7.value = "18739";
    recargarPagina()
  }
  if (valor_select == "amarok20(2015>)") {
    campo1.value ="172795";
    campo2.value = "172795";
    campo5.value = "15407";
    campo6.value = "15169";
    campo7.value = "4011558353834";
    recargarPagina()
  }
  if (valor_select == "gol16") {
    campo1.value ="172795";
    campo5.value = "18622";
    campo6.value = "18310";
    campo7.value = "18739";
    recargarPagina()
  }
  if (valor_select == "prisma/onix1.4/spin1.8") {
    campo1.value ="171795";
    campo5.value = "4011558744502";
    campo6.value = "15550";
    recargarPagina()  
  }
  if (valor_select == "corsaclassic") {
    campo1.value ="171795";
    campo5.value = "4011558744502";
    campo6.value = "18151";
    campo7.value = "18712";
    recargarPagina()
  }
  if (valor_select == "tracker18") {
    campo1.value ="171795";
    campo2.value = "171796";
    campo5.value = "15367";
    campo6.value = "15505";
    recargarPagina()
  }
  if (valor_select == "argo/cronos13") {
    campo1.value ="170995";
    campo5.value = "4011558758004";
    campo6.value = "4011558080624";
    campo7.value = "18711";
    recargarPagina()
  }
  if (valor_select == "focus2/31.6") {
    campo1.value ="171895";
    campo5.value = "15400";
    campo6.value = "4011558801830";
    campo7.value = "18726";
    recargarPagina()
  }
  if (valor_select == "golfmsi16") {
    campo1.value ="172795";
    campo5.value = "15502";
    campo6.value = "15979";
    recargarPagina()
    
  }
  if (valor_select == "20716") {
    campo1.value ="172995";
    campo5.value = "15067";
    campo6.value = "4011558365509";
    campo7.value = "15141";
    recargarPagina()
  }
  if (valor_select == "20714") {
    campo1.value ="172995";
    campo5.value = "15067";
    campo6.value = "15150";
    campo7.value = "15141";
    recargarPagina()
  }
  if (valor_select == "partner16") {
    campo1.value ="172995";
    campo5.value = "15067";
    campo6.value = "15345";
    campo7.value = "15141";
    recargarPagina()
  }
  if (valor_select == "fiestaka16") {
    campo1.value ="171895";
    campo5.value = "15400";
    campo6.value = "4011558352998";
    campo7.value = "18726";
    recargarPagina()
  }
  if (valor_select == "argo/cronos18") {
    campo1.value ="171895";
    campo2.value = "171896";
    campo5.value = "15353";
    campo6.value = "4011558081447";
    campo7.value = "18711";
   recargarPagina()
  }
  if (valor_select == "amarok20(2014-)") {
    campo1.value ="172795";
    campo2.value = "172795";
    campo5.value = "15407";
    campo6.value = "15169";
    campo7.value = "15648";
    recargarPagina()
  }
  if (valor_select == "aveog3") {
    campo1.value ="171795";
    campo5.value = "4011558744502";
    campo6.value = "18959";
    recargarPagina()
  }
  if (valor_select == "paliosiena14") {
    campo1.value ="171895";
    campo5.value = "18572";
    campo6.value = "4011558072872";
    campo7.value = "18711";
    recargarPagina()
  }
  if (valor_select == "ranger32") {
    campo1.value ="171895";
    campo2.value ="171895";
    campo3.value ="171896";
    campo4.value ="171896";
    campo5.value = "15404";
    campo6.value = "15420";
    campo7.value = "16424";
    recargarPagina()
  }
  if (valor_select == "ranger22d") {
    campo1.value ="171895";
    campo2.value ="171895";
    campo3.value ="171896";
    campo5.value = "15404";
    campo6.value = "15420";
    campo7.value = "16424";
    recargarPagina()
  }
  if (valor_select == "cruze14") {
    campo1.value ="170995";
    campo5.value = "4011558094072";
    campo6.value = "4011558084448"; 
    recargarPagina()
  }
  if (valor_select == "mobi") {
    campo1.value ="171895";
    campo5.value = "18572";
    campo6.value = "4011558072872"; 
    campo7.value = "4011558621636";
    recargarPagina()
  }
  if (valor_select == "clio12") {
    campo1.value ="104099";
    campo5.value = "18577";
    campo6.value = "18416"; 
    campo7.value = "15141";
    recargarPagina()
  }
  if (valor_select == "oroch20") {
    campo1.value ="172995";
    campo2.value ="172996";
    campo3.value ="172996";
    campo5.value = "18624";
    campo6.value = "16252";
    campo7.value = "15141";
    recargarPagina()
  }
  if (valor_select == "celta") {
    campo1.value ="171795";
    campo5.value = "4011558744502";
    campo6.value = "18109"; 
    campo7.value = "18712";
    recargarPagina()
  }
  if (valor_select == "sonic") {
    campo1.value ="171795";
    campo2.value ="171796";
    campo5.value = "15367";
    campo6.value = "15550";  
    recargarPagina()
  }
  if (valor_select == "c3nafta") {
    campo1.value ="172995";
    campo5.value = "15067";
    campo6.value = "15345";
    campo7.value = "15141";
    recargarPagina()
  }
  if (valor_select == "c416nafta") {
    campo1.value ="172995";
    campo5.value = "15067";
    campo6.value = "4011558365509";
    campo7.value = "15141";
    recargarPagina()
  }
  if (valor_select == "c416thp") {
    campo1.value ="172895";
    campo2.value ="172896";
    campo5.value = "15067";
    campo6.value = "15392";
    campo7.value = "15141";
    recargarPagina()
  }
  if (valor_select == "30816thp") {
    campo1.value ="172895";
    campo2.value ="172896";
    campo5.value = "15067";
    campo6.value = "15392";
    campo7.value = "15141";
    recargarPagina()
  }
  if (valor_select == "30816vti") {
    campo1.value ="172995";
    campo5.value = "15067";
    campo6.value = "4011558365509";
    campo7.value = "15141";
    recargarPagina()
  }
  if (valor_select == "30816hdi") {
    campo1.value ="172995";
    campo5.value = "18484";
    campo6.value = "15397";
    campo7.value = "15504";
    recargarPagina()
  }
  if (valor_select == "up10") {
    campo1.value ="172795";
    campo5.value = "15502";
    campo6.value = "15501";
    campo7.value = "15424";
    recargarPagina()
   }
   if (valor_select == "torod") {
    campo1.value ="172695";
    campo2.value ="172696";
    campo5.value = "16229";
    campo6.value = "4011558088132";
    campo7.value = "16234";
    recargarPagina()
   }
  if (valor_select == "toron") {
    campo1.value ="171895";
    campo2.value ="171896";
    campo5.value = "15353";
    campo6.value = "4011558088132";
    campo7.value = "4011558621636";
    recargarPagina()
    }
   if (valor_select == "virtus16") {
    campo1.value ="172795";
    campo5.value = "15502";
    campo6.value = "15979"; 
    recargarPagina()
    }
   if (valor_select == "kangoon") {
    campo1.value ="172995";
    campo2.value ="172996";
    campo5.value = "18624";
    campo6.value = "18042";
    campo7.value = "15141";
    recargarPagina()
    }
   if (valor_select == "partnerhdi") {
    campo1.value ="172995";
    campo5.value = "18484";
    campo6.value = "15397";
    campo7.value = "15504";
    recargarPagina()
    }
  if (valor_select == "berlingohdi") {
    campo1.value ="172995";
    campo5.value = "18484";
    campo6.value = "15397";
    campo7.value = "15504";
    recargarPagina()
    }
   if (valor_select == "fiestakinetic") {
    campo1.value ="171895";
    campo5.value = "15400";
    campo6.value = "4011558352998";
    campo7.value = "18726";
    recargarPagina()
    }
   if (valor_select == "kwid") {
    campo1.value ="172995";
    campo5.value = "18577";
    campo6.value = "4011558338381";
    campo7.value = "15424";
    recargarPagina()
    }
    if (valor_select == "kangoostepwayn") {
     campo1.value ="172995";
     campo2.value ="172996";
     campo5.value = "18578";
     campo6.value = "16252";
     campo7.value = "15141";
     recargarPagina()
     }              
    if (valor_select == "etios") {
     campo1.value ="172895";
     campo5.value = "15524";
     campo6.value = "4011558086305";
     recargarPagina()                 
     }
     if (valor_select == "corolla2011") {
     campo1.value ="172895";
     campo5.value = "15521";
     campo6.value = "15372"; 
     recargarPagina()
     }
     if (valor_select == "hilux30") {
     campo1.value ="172695";
     campo2.value ="172695";
     campo5.value = "15143";
     campo6.value = "18931";
     campo7.value = "18886";
     recargarPagina()
     }
     if (valor_select == "sandero8v") {
     campo1.value ="172995";
     campo5.value = "18624";
     campo6.value = "15519";
     campo7.value = "15141";
     recargarPagina()
    }
    if (valor_select == "ecosport15") {
     campo1.value ="171895";
     campo5.value = "15400";
     campo6.value = "4011558340506";
     campo7.value = "18726";
    recargarPagina()
    }
    if (valor_select == "renegadenafta") {
     campo1.value ="171895";
     campo2.value ="171896";                              
     campo5.value = "15353";
     campo6.value = "4011558088132";
     campo7.value = "4011558621636";
    recargarPagina()
    }   
    if (valor_select == "208n") {
      campo1.value ="172995";                               
      campo5.value = "15067";
      campo6.value = "15345";
      campo7.value = "15141";
     recargarPagina()
     } 
     if (valor_select == "ecosportrocam") {
      campo1.value ="171895";                               
      campo2.value ="171896"; 
      campo5.value = "18617";
      campo6.value = "15148";
      campo7.value = "18944";
     recargarPagina()
     } 
     if (valor_select == "gol14") {
      campo1.value ="172795";                               
      campo5.value = "18622";
      campo6.value = "18310";
      campo7.value = "15424";
     recargarPagina()
     } 
     if (valor_select == "uppepper") {
      campo1.value ="172795";                               
      campo5.value = "15502";
      campo6.value = "4011558073350";
      campo7.value = "15424";
     recargarPagina()
     }
     if (valor_select == "cruze18") {
      campo1.value ="171795";                               
      campo2.value ="171796";
      campo5.value = "15367";
      campo6.value = "15352";
     recargarPagina()
     }      
     if (valor_select == "s10duramax") {
      campo1.value ="171795";                               
      campo2.value ="171795";
      campo5.value = "15980";
      campo6.value = "4011558061852";
      campo7.value = "765809302945";
     recargarPagina()
     }        
     if (valor_select == "paliosiena16") {
      campo1.value ="171895";                               
      campo2.value ="171896";
      campo5.value = "15353";
      campo6.value = "15350";
      campo7.value = "18711";
     recargarPagina()
     }  
     if (valor_select == "punto14") {
      campo1.value ="171895";                               
      campo5.value = "18572";
      campo6.value = "18927";
      campo7.value = "18711";
     recargarPagina()
     }  
     if (valor_select == "focus2/2.0") {
      campo1.value ="171895";                               
      campo2.value ="171896";
      campo5.value = "18597";
      campo6.value = "4011558801830";
      campo7.value = "18726";
     recargarPagina()
     }         
     if (valor_select == "ka2rocam") {
      campo1.value ="171895";                               
      campo2.value ="171896";
      campo5.value = "18617";
      campo6.value = "15148";
      campo7.value = "18775";
     recargarPagina()
     }      
     if (valor_select == "ranger30pe") {
      campo1.value ="171895";                               
      campo2.value ="171895";
      campo3.value ="171896";
      campo5.value = "18956";
      campo6.value = "18073";
      campo7.value = "18123";
     recargarPagina()
     } 
     if (valor_select == "hrv2") {
      campo1.value ="170995";                               
      campo5.value = "18572";
      campo6.value = "765809306356";      
     recargarPagina()
     } 
     if (valor_select == "fit15") {
      campo1.value ="170995";                               
      campo5.value = "18572";
      campo6.value = "15402";      
     recargarPagina()
     } 
     if (valor_select == "vento25") {
      campo1.value ="172795";                               
      campo2.value ="172796";
      campo3.value ="172796";
      campo5.value ="18482";
      campo6.value = "18936";
      campo7.value = "18942";      
     recargarPagina()
     } 
     if (valor_select == "golftsi14") {
      campo1.value ="172795";                               
      campo2.value ="172796";
      campo5.value ="15502";
      campo6.value = "15552";     
     recargarPagina()
     } 
     if (valor_select == "berlingo19") {
      campo1.value ="103899"; 
      campo2.value ="103896";                            
      campo5.value ="4011558076658";
      campo6.value ="18084";
      campo7.value = "18533";     
     recargarPagina()
     } 
     if (valor_select == "partner19") {
      campo1.value ="103899"; 
      campo2.value ="103896";                            
      campo5.value ="4011558076658";
      campo6.value ="18084";
      campo7.value = "18533";     
     recargarPagina()
     } 
     if (valor_select == "meriva18") {
      campo1.value ="171795";                           
      campo5.value ="4011558744502";
      campo6.value ="4011558075606";
      campo7.value = "18712";     
     recargarPagina()
     }  
     if (valor_select == "tiida") {
      campo1.value ="171795";                               
      campo2.value ="171796";
      campo5.value ="18578";
      campo6.value = "15165";     
     recargarPagina()
     }   
     if (valor_select == "unofire") {
      campo1.value ="171895";                           
      campo5.value ="18572";
      campo6.value ="18197";
      campo7.value = "18714";     
     recargarPagina()
     }  
     if (valor_select == "nuevouno") {
      campo1.value ="171895";                           
      campo5.value ="18572";
      campo6.value ="4011558072872";
      campo7.value = "18711";     
     recargarPagina()
     }  
     if (valor_select == "ecosport20kinetic") {
      campo1.value ="171895"; 
      campo2.value ="171896";                            
      campo5.value ="15442";
      campo6.value ="4011558077648";
      campo7.value = "18726";     
     recargarPagina()
     } 
     if (valor_select == "bora20") {
      campo1.value ="172795"; 
      campo2.value ="172796";                            
      campo5.value ="18619";
      campo6.value ="18425";
      campo7.value = "18785";     
     recargarPagina()
     } 
     if (valor_select == "boratdi") {
      campo1.value ="172795";                            
      campo5.value ="18498";
      campo6.value ="18425";
      campo7.value = "18842";     
     recargarPagina()
     } 
    if (valor_select == "hilux24") {
      campo1.value ="172695"; 
      campo2.value ="172696";                            
      campo5.value ="15143";
      campo6.value ="15659";
      campo7.value ="4011558338503" 
      recargarPagina() 
    } 
    if (valor_select == "c420") {
      campo1.value ="172995"; 
      campo2.value ="172996";                            
      campo5.value ="15067";
      campo6.value ="18932";  
      campo7.value ="15141"; 
      recargarPagina()
    } 
    if (valor_select == "30720hdi") {
      campo1.value ="172995"; 
      campo2.value ="172996";                            
      campo5.value ="4011558076658";
      campo6.value ="18202";  
      campo7.value ="18536";
      recargarPagina()
    } 
    if (valor_select == "30720n") {
      campo1.value ="172995"; 
      campo2.value ="172996";                            
      campo5.value ="15067";
      campo6.value ="18932";  
      campo7.value ="15141"; 
      recargarPagina()
    } 
    if (valor_select == "march") {
      campo1.value ="171795";                             
      campo5.value ="18578";
      campo6.value ="15510";   
      recargarPagina()
    } 
    if (valor_select == "kangoodci") {
      campo1.value ="172995"; 
      campo2.value ="172996";                            
      campo5.value ="18624";
      campo6.value ="18434";  
      campo7.value ="15522"; 
      recargarPagina()
    } 
    if (valor_select == "tracker12") {
      campo1.value ="171795";                            
      campo5.value ="4011558094072";
      campo6.value ="4011558342371";  
      recargarPagina()
    } 
    if (valor_select == "500multiair") {
      campo1.value ="171895";                            
      campo5.value ="15387";
      campo6.value ="16423"; 
      campo7.value ="18726"; 
      recargarPagina()
    } 
    if (valor_select == "ecosport14d") {
      campo1.value ="171895";                            
      campo5.value ="18484";
      campo6.value ="4011558365608"; 
      campo7.value ="18853"; 
      recargarPagina()
    } 
    if (valor_select == "astra20nafta") {
      campo1.value ="104099";                            
      campo2.value ="104096";
      campo5.value ="4011558744502";
      campo6.value ="15529"; 
      campo7.value ="18712"; 
      recargarPagina()
    } 
    if (valor_select == "astra20diesel") {
      campo1.value ="104099";
      campo2.value ="104096"; 
      campo3.value ="104096";               
      campo5.value ="18486";
      campo6.value ="4011558744502"; 
      campo7.value ="4011558055783"; 
      recargarPagina()
    } 
    if (valor_select == "ventodiesel") {
      campo1.value ="172795";
      campo2.value ="172796";                
      campo5.value ="18492";
      campo6.value ="15065"; 
      campo7.value ="18938"; 
      recargarPagina()
    } 
    if (valor_select == "aveog1") {
      campo1.value ="171795";                
      campo5.value ="4011558744502";
      campo6.value ="18959"; 
      campo7.value ="15351"; 
      recargarPagina()
    } 
    
  })

  
  function imprimirPagina() {
    window.print()
  }
  


  






































































































































































































































































































































































































































































































































































    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
