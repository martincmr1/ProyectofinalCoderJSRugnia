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
//const XLSX = require("xlsx");









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
 
 
 const PREMIUM = 3500
 
 
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
 
 ////////////BLOQUEAR SELECT///////////////////////////////////////////////////////
 
 function bloquearSelect(idSelect) {
   var selectElement = document.getElementById(idSelect);
   selectElement.disabled = true; // Deshabilita el select
   selectElement.style.appearance = "none"; // Oculta la flecha
   selectElement.style.background = "none"; // Elimina el fondo
   selectElement.style.color = "#333"; // Cambia el color del texto a oscuro
   selectElement.style.border = "none"; // Elimina el borde
   selectElement.style.padding = "0"; // Ajusta el espaciado
   selectElement.style.cursor = "not-allowed"; // Cambia el cursor a "no permitido"
 }
 
 
 
 
 
 
 function bloquearSelectCar(idSelect) {
   var selectElement = document.getElementById(idSelect);
   selectElement.disabled = true;
   selectElement.style.backgroundColor = '#ffffff'; // Cambia el color de fondo a blanco
   selectElement.disabled = true; // Deshabilita el select
   selectElement.style.appearance = "none"; // Oculta la flecha
   selectElement.style.background = "none"; // Elimina el fondo
   selectElement.style.color = "#333"; // Cambia el color del texto a oscuro
   selectElement.style.border = "none"; // Elimina el borde
   selectElement.style.padding = "10"; // Ajusta el espaciado
   selectElement.style.cursor = "not-allowed"; // Cambia el cursor a "no permitido"
 
 
 
 }
 
 
 function ocultarSelectYMostrarValorUn() {
   // Obtén el elemento <select> con ID "cantidad1"
   const selectCantidad1 = document.getElementById('cantidad1');
 
   // Crea un nuevo elemento <span> para mostrar el valor
   const spanValor = document.createElement('span');
   spanValor.id = 'valorCantidad1';
 
   // Agrega el nuevo elemento después del <select>
   selectCantidad1.parentNode.insertBefore(spanValor, selectCantidad1.nextSibling);
 
   // Escucha cambios en el <select>
   selectCantidad1.addEventListener('change', function() {
     // Oculta el <select>
     selectCantidad1.style.display = 'none';
 
     // Muestra el valor concatenado con "Un" en el <span>
     spanValor.textContent = selectCantidad1.value + ' Un';
   });
 }
 
 // Llama a la función para ocultar el select y mostrar su valor con "Un"
 
 
 
 
 
 
 
 
 //////////////////////////////MOSTRAR TOAST AL AGREGAR PRODUCTOS, CALCULAR PRESUPUESTO Y ELIMINAR STORAGE///////////////////////////////////////////////////////
 function mostrarToast() {
   Toastify({
     text: "Producto Agregado",
     duration: 400,
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
     duration: 500,
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
   mostrarToast3()
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
 /*
 
 function buscarCoincidencia(inputSearch,descripcionSearch,filaSearch,priceSearch){
   const codigo = document.getElementById(inputSearch).value
   const producto = productos.find(p => p.codigo === codigo);
    if (!producto) {
      Swal.fire('código no encontrado')
      }
      document.getElementById(descripcionSearch).innerHTML=producto.descripcion
     if (producto.precio==0){
        document.getElementById(filaSearch).style.display = "none";
       }else
      document.getElementById (priceSearch).innerHTML=producto.precio
  }
 
 */
  
 function buscarCoincidencia(inputSearch, descripcionSearch, priceSearch, quantity) {
   const codigo = document.getElementById(inputSearch).value;
   const producto = productos.find(p => p.codigo === codigo);
   
   if (!producto) {
     Swal.fire('Código no encontrado');
   } else {
     document.getElementById(descripcionSearch).innerHTML = producto.descripcion;
     
     // Convertimos producto.precio en un número entero antes de la multiplicación
     const precio = parseInt(producto.precio, 10);
 
     
    
       const precioFinal = precio * quantity;
       document.getElementById(priceSearch).innerHTML = precioFinal;
       console.log(precioFinal)
     
   }
 }
 
 
 const selectCantidad1 = document.getElementById('cantidad1');
 const input0 = document.getElementById("inputBuscar");
 
 let valorSeleccionado1 = selectCantidad1.value;
 
 selectCantidad1.addEventListener("change", () => {
   valorSeleccionado1 = selectCantidad1.value;
   buscarCoincidencia("inputBuscar", 'descripcion', 'precio', valorSeleccionado1);
 });
 
 input0.addEventListener("change", () => {
   valorSeleccionado1 = selectCantidad1.value;
   buscarCoincidencia('inputBuscar', 'descripcion', 'precio', valorSeleccionado1);
 
 });
 
 
 
 const selectCantidad2 = document.getElementById('cantidad2');
 const input1 = document.getElementById("inputBuscar1");
 
 let valorSeleccionado2 = selectCantidad2.value;
 
 selectCantidad2.addEventListener("change", () => {
   valorSeleccionado2 = selectCantidad2.value;
   buscarCoincidencia("inputBuscar1", 'descripcion1', 'precio1', valorSeleccionado2);
 });
 
 input1.addEventListener("change", () => {
   valorSeleccionado2 = selectCantidad2.value;
   buscarCoincidencia('inputBuscar1', 'descripcion1', 'precio1', valorSeleccionado2);
  
 });
 
 
 
 const selectCantidad3 = document.getElementById('cantidad3');
 const input2 = document.getElementById("inputBuscar3");
 
 let valorSeleccionado3 = selectCantidad3.value;
 
 selectCantidad3.addEventListener("change", () => {
   valorSeleccionado3 = selectCantidad3.value;
   buscarCoincidencia("inputBuscar3", 'descripcion3', 'precio3', valorSeleccionado3);
 });
 
 input2.addEventListener("change", () => {
   valorSeleccionado3 = selectCantidad3.value;
   buscarCoincidencia('inputBuscar3', 'descripcion3', 'precio3', valorSeleccionado3);
  
 });
 
 
 
 const selectCantidad4 = document.getElementById('cantidad4');
 const input3 = document.getElementById("inputBuscar4");
 
 let valorSeleccionado4 = selectCantidad4.value;
 
 selectCantidad4.addEventListener("change", () => {
   valorSeleccionado4 = selectCantidad4.value;
   buscarCoincidencia("inputBuscar4", 'descripcion4', 'precio4', valorSeleccionado4);
 });
 
 input3.addEventListener("change", () => {
   valorSeleccionado4 = selectCantidad4.value;
   buscarCoincidencia('inputBuscar4', 'descripcion4', 'precio4', valorSeleccionado4);
   
 });
 
 
 const selectCantidad5 = document.getElementById('cantidad5');
 const input4= document.getElementById("inputBuscar5");
 
 let valorSeleccionado5 = selectCantidad5.value;
 
 selectCantidad5.addEventListener("change", () => {
   valorSeleccionado5 = selectCantidad5.value;
   buscarCoincidencia("inputBuscar5", 'descripcion5', 'precio5', valorSeleccionado5);
 });
 
 input4.addEventListener("change", () => {
   valorSeleccionado5 = selectCantidad5.value;
   buscarCoincidencia('inputBuscar5', 'descripcion5', 'precio5', valorSeleccionado5);
   
 });
 
 
 const selectCantidad6 = document.getElementById('cantidad6');
 const input5 = document.getElementById("inputBuscar6");
 
 let valorSeleccionado6 = selectCantidad6.value;
 
 selectCantidad6.addEventListener("change", () => {
   valorSeleccionado6 = selectCantidad6.value;
   buscarCoincidencia("inputBuscar6", 'descripcion6', 'precio6', valorSeleccionado6);
 });
 
 input5.addEventListener("change", () => {
   valorSeleccionado6 = selectCantidad6.value;
   buscarCoincidencia('inputBuscar6', 'descripcion6', 'precio6', valorSeleccionado6);
   
 });
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
     
     parseFloat(document.getElementById('precio3').innerHTML) || 0,
     parseFloat(document.getElementById('precio4').innerHTML) || 0,
     parseFloat(document.getElementById('precio5').innerHTML) || 0,
     parseFloat(document.getElementById('precio6').innerHTML) || 0
   ];
   let precioTotal2 = 0;
   for (let i = 0; i < precios.length; i++) {
     precioTotal2 += precios[i];
   }
   //document.getElementById('sumaCompleto').innerHTML = '$' + precioTotal2.toFixed(0) + '<br>' + ' <small>3 cuotas sin interés de  $' + (precioTotal2/3).toFixed(0) + '</small>';
   document.getElementById('sumaCompleto').innerHTML = '$' + precioTotal2.toFixed(0) + '<br>' + ' <small><span style="font-weight: normal;"><b>3</b> cuotas sin interés de</span> $' + (precioTotal2/3).toFixed(0) + '</small>';
 
 
   //document.getElementById('sumaCompleto').innerHTML = '$' + precioTotal2 + '<br>' + ' $' + (precioTotal2/3).toFixed(0)
 
 
  ocultarBotones()
  ocultarInputs()
 }
 
 /*function sumarPrecios1() {
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
   
   const precioTotalCuotas = precioTotal2 / 3;
   
   document.getElementById('sumaCompleto').innerHTML = '$' + precioTotal2;
   document.getElementById('completoCuotas').innerHTML = '<small>3 cuotas sin interés de $' + precioTotalCuotas.toFixed(2) + '</small>';
 
   ocultarBotones();
  ocultarInputs();
 }
 */
 
 
 function sumarPrecios2() {
   const precios = [
     parseFloat(document.getElementById('precio').innerHTML) || 0,
     parseFloat(document.getElementById('precio1').innerHTML) || 0,
     
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
 
   document.getElementById('sumaPremium').innerHTML = '$' + precioTotal.toFixed(0) + '<br>' + ' <small><span style="font-weight: normal;"><b>3</b> cuotas sin interés de</span> $' + (precioTotal/3).toFixed(0) + '</small>';
 
 
  // document.getElementById('sumaPremium').innerHTML = '$' + precioTotal;
   mostrarToasttotal()
  ocultarBotones();
  ocultarInputs();
 }
 
 /*function agregaCuotas() {
   const cuotas = 3;
   const precioTotal2 = parseFloat(document.getElementById('sumaCompleto').innerHTML.replace('$', ''));
   const precioCuotas = precioTotal2 / cuotas;
   return document.getElementById('completoCuotas').innerHTML = '$' + precioCuotas;
 */
 
 
 function checkInput(inputId,filaId) {
   if (document.getElementById(inputId).value === '') {
     document.getElementById(filaId).style.display = "none";
   }
 }
 
 
 
 
 
 function sumatodo() {
   agregarFechayhora()
  
 
 checkInput('inputBuscar','fila1')
 checkInput('inputBuscar1','fila2')
 
 checkInput('inputBuscar3','fila4')
 checkInput('inputBuscar4','fila5')
 checkInput('inputBuscar5','fila6')
 checkInput('inputBuscar6','fila7')
 
  
 
 document.getElementById("boton0").click();
 document.getElementById("boton1").click();
 
 document.getElementById("boton3").click();
 document.getElementById("boton4").click();
 document.getElementById("boton5").click();
 document.getElementById("boton6").click();
 
 
 
  sumarPrecios1();
  //agregaCuotas()
  sumarPrecios2();
 
   
  bloquearSelectCar('autos')
  bloquearSelect('cantidad1')
  bloquearSelect('cantidad2')
  bloquearSelect('cantidad3')
  bloquearSelect('cantidad4')
  bloquearSelect('cantidad5')
  bloquearSelect('cantidad6')
  ocultarSelectYMostrarValorUn();
  setTimeout (() => {
   imprimirPagina()
 },1000)
   
 }
 
 
 
 
 
  function clickearAgregar() {
   document.getElementById("boton0").click();
   document.getElementById("boton1").click();
   
   document.getElementById("boton3").click();
   document.getElementById("boton4").click();
   document.getElementById("boton5").click();
   document.getElementById("boton6").click();
  }    
 ///////ESTA FUNCION BUSCA UNA CADENA EN DESCRIPCION DEL ARRAY Y DEVUELVE LAS COINCIDENCIAS EN UNA LI MOSTRANDO CODIGO-DESCRIPCION//////
 
 function buscarDescripcion() {
   const resultados = [];
   const busqueda = document.getElementById('buscarInput').value.toLowerCase();
   for (let i = 0; i < productos.length; i++) {
     if (productos[i].descripcion.toLowerCase().includes(busqueda)) {
  //     resultados.push(`<li>${productos[i].codigo} - ${productos[i].descripcion} -$ ${productos[i].precio} </li>`);
  
 
 // resultados.push(`<li class="list-group-item list-group-item-primary">${productos[i].codigo} - ${productos[i].descripcion} - $ ${productos[i].precio} </li>`);
 resultados.push(`
   <li class="list-group-item list-group-item-primary">
     <button class="btn btn-primary" onclick="copyToClipboard('${productos[i].codigo}')">${productos[i].codigo}</button>
     - ${productos[i].descripcion} - $ ${productos[i].precio}
   </li>
 `);
 
  
     }
   }
   document.getElementById('resultados').innerHTML = resultados.join('');
 }
 
 ///ESTAS FUNCIONES OCULTAN LOS BOTONES, INPUTS Y MUESTRA EL CONTENEDOR DIAGNOSTICOS PARA GENERAR UN PRESUPUESTO LISTO PARA IMPRIMIR/////////////////// 
 /////////////////LA PAGINA SE REFRESCA LUEGO DE 1.5 MINUTOS PARA GENERAR UN NUEVO PRESUPUESTO////////////////////////////////
 function ocultarBotones(){  
   document.getElementById("boton0").style.display = "none";
   document.getElementById("boton1").style.display = "none";
   
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
   document.getElementById("servicioCompleto").style.display = "block";
   document.getElementById("servicioPremium").style.display = "block";
 
 } 
 function ocultarInputs() {
   document.getElementById("boton8").style.display ="none";
   document.getElementById("buscarInput").style.display ="none";
   document.getElementById("resultados").style.display ="none";
   document.getElementById("inputBuscar").style.display = "none"; 
   document.getElementById("inputBuscar1").style.display = "none"; 
   
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
   else if (inputBuscar.value === "176395" || inputBuscar.value ==="176396"|| inputBuscar.value === "174495" || inputBuscar.value === "174496"|| inputBuscar.value === "174195" || inputBuscar.value === "174196"|| inputBuscar.value === "176095" || inputBuscar.value === "176096"|| inputBuscar.value === "176195" || inputBuscar.value === "176196" ){
     document.getElementById("icono_elaionfs50").style.display = "flex"; 
   }
   else if (inputBuscar.value === "104099" || inputBuscar.value ==="104096" || inputBuscar.value === "193299" || inputBuscar.value === "193296"){
     document.getElementById("icono_elaionf50").style.display = "flex"; 
   }
   else if (inputBuscar.value === "103799" || inputBuscar.value === "103796" || inputBuscar.value === "108099" || inputBuscar.value === "108096"  ) {
     document.getElementById("icono_elaionf10").style.display = "flex"; 
   }else 
   document.getElementById("icono_elaion").style.display = "flex"; 
   
   
   
   if (inputBuscar1.value === "103899" || inputBuscar1.value ==="103896") {
     document.getElementById("icono_elaionf301").style.display = "flex";    
   }
   else if (inputBuscar1.value === "176395" || inputBuscar1.value ==="176396" || inputBuscar1.value === "174195" || inputBuscar1.value === "174196"|| inputBuscar1.value === "174495" || inputBuscar1.value === "174496"|| inputBuscar1.value === "176095" || inputBuscar1.value === "176096"|| inputBuscar1.value === "176195" || inputBuscar1.value === "176196"){
     document.getElementById("icono_elaionfs501").style.display = "flex"; 
   }
   else if (inputBuscar1.value === "104099" || inputBuscar1.value ==="104096" || inputBuscar1.value === "193299" || inputBuscar1.value === "193296"){
     document.getElementById("icono_elaionf501").style.display = "flex"; 
   }
   else if (inputBuscar1.value === "103799" || inputBuscar1.value === "103796" || inputBuscar1.value === "108099" || inputBuscar1.value === "108096") {
     document.getElementById("icono_elaionf101").style.display = "flex"; 
   }else 
   document.getElementById("icono_elaion1").style.display = "flex"; 
 
 
 
 
  
  
   if (inputBuscar3.value === "103899" || inputBuscar3.value ==="103896") {
     document.getElementById("icono_elaionf303").style.display = "flex";    
   }
   else if (inputBuscar3.value === "176395" || inputBuscar3.value ==="176396"|| inputBuscar3.value === "174195" || inputBuscar3.value === "174196"|| inputBuscar3.value === "174495" || inputBuscar3.value === "174496" || inputBuscar3.value === "176095" || inputBuscar3.value === "176096"|| inputBuscar3.value === "176195" || inputBuscar3.value === "176196"){
     document.getElementById("icono_elaionfs503").style.display = "flex"; 
   }
   else if (inputBuscar3.value === "104099" || inputBuscar3.value ==="104096" || inputBuscar3.value === "193299" || inputBuscar3.value === "193296"){
     document.getElementById("icono_elaionf503").style.display = "flex"; 
   }
   else if (inputBuscar3.value === "103799" || inputBuscar3.value === "103796" || inputBuscar3.value === "108099" || inputBuscar3.value === "108096") {
     document.getElementById("icono_elaionf103").style.display = "flex"; 
   } 
     else if (inputBuscar3.value === "185496" || inputBuscar3.value === "184596" || inputBuscar3.value === "504896" || inputBuscar3.value === "114731"|| inputBuscar3.value === "186631" || inputBuscar3.value === "186696"|| inputBuscar3.value === "114796" || inputBuscar3.value === "185296") {
       document.getElementById("icono_kriox").style.display = "flex"; 
   }else 
   document.getElementById("icono_elaion3").style.display = "flex"; 
  
   
 
 
 
  
 
  
   /*document.getElementById("agregarProductos").style.display = "none"; */
   document.getElementById("logo_aca").style.display = "flex"; 
   document.getElementById("logo_credito").style.display = "flex"; 
   document.getElementById("logo_escalonado").style.display = "flex"; 
   document.getElementById("logo_cosmetica").style.display = "flex";
 }
 
  /* setTimeout (() => {
     refrescarPagina()
   },90000)
 }*/
 
 /////ACA VINCULO CON LOS INPUT HTML PARA QUE AL USAR USAR EL ELEMENTO SELECT AGREGUE LOS CODIGOS CORRESPONDIENTES A CADA VEHICULO/////
 
 let campo1 = document.getElementById("inputBuscar");
 let campo2 = document.getElementById("inputBuscar1");
 
 let campo4 = document.getElementById("inputBuscar3");
 let campo5 = document.getElementById("inputBuscar4");
 let campo6 = document.getElementById("inputBuscar5");
 let campo7 = document.getElementById("inputBuscar6");
 let campo8 = document.getElementById("inputBuscar7");
 
 
 
 
 
 
 
 
 
 
 
 
 ////////////////ESTA FUNCION RECARGA LA PAGINA AL USAR EL SELECT PARA GENERAR UN NUEVO PRESUPUESTO
 
 /*function recargarPagina() {
   document.getElementById("autos").addEventListener('change', function() {     
   location.reload();
   });
 }*/
 
 
 
 
 ////ACA HICE OBJETOS CON CADA SELECCION DE AUTO CON SUS CODIGOS CORRESPONDIENTES Y SE AGREGUEN AL INPUT PARA LUEGO CLICKEAR TOTAL//////////////////////
 
 document.getElementById("autos").addEventListener('change', function() {
 
 function UpdateQuantity(value,quantity) {
   const valorDeseadoStr = value; // El valor deseado como cadena
    const selectElement1 = document.getElementById(quantity); // Reemplaza "tu_select_id" con el ID de tu select
    selectElement1.value = valorDeseadoStr;
      
 }
   
 
 
 
   let valor_select = this.value;
   const campos = [campo1,campo2,campo4, campo5, campo6, campo7];
  
   for (let campo of campos) {
     if (campo.value) {
       campo.value = "";
     }
   }
 
 
 
 let cantidadSelect1 = document.getElementById('cantidad1')
 cantidadSelect1.value='1'
 let cantidadSelect2 = document.getElementById('cantidad2')
 cantidadSelect2.value='1'
 let cantidadSelect3 = document.getElementById('cantidad3')
 cantidadSelect3.value='1'
 let cantidadSelect4 = document.getElementById('cantidad4')
 cantidadSelect4.value='1'
 let cantidadSelect5 = document.getElementById('cantidad5')
 cantidadSelect5.value='1'
 let cantidadSelect6 = document.getElementById('cantidad6')
 cantidadSelect6.value='1'
 
   
 if (valor_select == "goltrend") {
  campo1.value ="172795";
  campo5.value = "4011558729509";
  campo6.value = "18958";
  campo7.value = "15424";

  
  
}
if (valor_select == "suran8v") {
  campo1.value ="172795";
  campo5.value = "4011558729509";
  campo6.value = "18958";
  campo7.value = "18739";
  
}
if (valor_select == "suran16v") {
  campo1.value ="172795";
  campo1.value ="172796";
  campo5.value = "15502";
  campo6.value = "15979";
  campo7.value = "18739";
  
}
if (valor_select == "amarok20(2015>)") {
  campo1.value ="172795";
  
  campo5.value = "15407";
  campo6.value = "15169";
  campo7.value = "4011558353834";


  
  
UpdateQuantity("2","cantidad1")



  
}
if (valor_select == "gol16") {
  campo1.value ="172795";
  campo5.value = "18622";
  campo6.value = "18310";
  campo7.value = "18739";
  
}
if (valor_select == "prisma/onix1.4/spin1.8") {
  campo1.value ="171795";
  campo5.value = "4011558744502";
  campo6.value = "15550";
    
}
if (valor_select == "corsaclassic") {
  campo1.value ="171795";
  campo5.value = "4011558744502";
  campo6.value = "18151";
  campo7.value = "18712";
  
}
if (valor_select == "tracker18") {
  campo1.value ="171795";
  campo2.value = "171796";
  campo5.value = "15367";
  campo6.value = "15505";
  
}
if (valor_select == "argo/cronos13") {
  campo1.value ="170995";
  campo5.value = "4011558758004";
  campo6.value = "4011558080624";
  campo7.value = "18711";
  
}
if (valor_select == "focus2/31.6") {
  campo1.value ="171895";
  campo5.value = "15400";
  campo6.value = "4011558801830";
  campo7.value = "18726";
  
}
if (valor_select == "golfmsi16") {
  campo1.value ="172795";
  campo2.value ="172796";
  campo5.value = "15502";
  campo6.value = "15979";
  
  
}
if (valor_select == "20716") {
  campo1.value ="172995";
  campo5.value = "15067";
  campo6.value = "4011558365509";
  campo7.value = "15141";
  
}
if (valor_select == "20714") {
  campo1.value ="172995";
  campo5.value = "15067";
  campo6.value = "15150";
  campo7.value = "15141";
  
}
if (valor_select == "partner16") {
  campo1.value ="172995";
  campo5.value = "15067";
  campo6.value = "15345";
  campo7.value = "15141";
  
}
if (valor_select == "fiestaka16") {
  campo1.value ="171895";
  campo5.value = "15400";
  campo6.value = "4011558352998";
  campo7.value = "18726";
  
}
if (valor_select == "argo/cronos18") {
  campo1.value ="171895";
  campo2.value = "171896";
  campo5.value = "15353";
  campo6.value = "4011558081447";
  campo7.value = "18711";
 
}
if (valor_select == "amarok20(2014-)") {
  campo1.value ="172795";
 
  campo5.value = "15407";
  campo6.value = "15169";
  campo7.value = "15648";



UpdateQuantity("2","cantidad1")
  
}
if (valor_select == "aveog3") {
  campo1.value ="171795";
  campo5.value = "4011558744502";
  campo6.value = "18959";
  
}
if (valor_select == "paliosiena14") {
  campo1.value ="171895";
  campo5.value = "18572";
  campo6.value = "4011558072872";
  campo7.value = "18711";
  
}
if (valor_select == "ranger32") {
  campo1.value ="171895";
  campo2.value ="171896";
 
 
 


UpdateQuantity("2","cantidad1")
UpdateQuantity("2","cantidad2")



  campo5.value = "15404";
  campo6.value = "15420";
  campo7.value = "16424";
  
}
if (valor_select == "ranger22d") {
  campo1.value ="171895";
  campo2.value ="171896";

UpdateQuantity("2","cantidad1")
  
  campo5.value = "15404";
  campo6.value = "15420";
  campo7.value = "16424";
  
}
if (valor_select == "cruze14") {
  campo1.value ="170995";
  campo5.value = "4011558094072";
  campo6.value = "4011558084448"; 
  
}
if (valor_select == "mobi") {
  campo1.value ="171895";
  campo5.value = "18572";
  campo6.value = "4011558072872"; 
  campo7.value = "4011558621636";
  
}
if (valor_select == "clio12") {
  campo1.value ="172995";
  campo5.value = "18577";
  campo6.value = "18416"; 
  campo7.value = "15141";
  
}
if (valor_select == "oroch20") {
  campo1.value ="172995";
  campo2.value ="172996";
 
  campo5.value = "18624";
  campo6.value = "16252";
  campo7.value = "15141";



 
  
 UpdateQuantity("2","cantidad2")
  
}
if (valor_select == "celta") {
  campo1.value ="171795";
  campo5.value = "4011558744502";
  campo6.value = "18109"; 
  campo7.value = "18712";
  
}
if (valor_select == "sonic") {
  campo1.value ="171795";
  campo2.value ="171796";
  campo5.value = "15367";
  campo6.value = "15550";  
  
}
if (valor_select == "c3nafta") {
  campo1.value ="172995";
  campo5.value = "15067";
  campo6.value = "15345";
  campo7.value = "15141";
  
}
if (valor_select == "c416nafta") {
  campo1.value ="172995";
  campo5.value = "15067";
  campo6.value = "4011558365509";
  campo7.value = "15141";
  
}
if (valor_select == "c416thp") {
  campo1.value ="172895";
  campo2.value ="172896";
  campo5.value = "15067";
  campo6.value = "15392";
  campo7.value = "15141";
  
}
if (valor_select == "30816thp") {
  campo1.value ="172895";
  campo2.value ="172896";
  campo5.value = "15067";
  campo6.value = "15392";
  campo7.value = "15141";
  
}
if (valor_select == "30816vti") {
  campo1.value ="172995";
  campo5.value = "15067";
  campo6.value = "4011558365509";
  campo7.value = "15141";
  
}
if (valor_select == "30816hdi") {
  campo1.value ="172995";
  campo5.value = "18484";
  campo6.value = "15397";
  campo7.value = "15504";
  
}
if (valor_select == "up10") {
  campo1.value ="172795";
  campo5.value = "15502";
  campo6.value = "15501";
  campo7.value = "15424";
  
 }
 if (valor_select == "torod") {
  campo1.value ="172695";
  campo2.value ="172696";
  campo5.value = "16229";
  campo6.value = "4011558088132";
  campo7.value = "16234";
  
 }
if (valor_select == "toron") {
  campo1.value ="171895";
  campo2.value ="171896";
  campo5.value = "15353";
  campo6.value = "4011558088132";
  campo7.value = "4011558621636";
  
  }
 if (valor_select == "virtus16") {
  campo1.value ="172795";
  campo2.value ="172796";
  campo5.value = "15502";
  campo6.value = "15979"; 
  
  }
 if (valor_select == "kangoon") {
  campo1.value ="172995";
  campo2.value ="172996";
  campo5.value = "18624";
  campo6.value = "18042";
  campo7.value = "15141";
  
  }
 if (valor_select == "partnerhdi") {
  campo1.value ="172995";
  campo5.value = "18484";
  campo6.value = "15397";
  campo7.value = "15504";
  
  }
if (valor_select == "berlingohdi") {
  campo1.value ="172995";
  campo5.value = "18484";
  campo6.value = "15397";
  campo7.value = "15504";
  
  }
 if (valor_select == "fiestakinetic") {
  campo1.value ="171895";
  campo5.value = "15400";
  campo6.value = "4011558352998";
  campo7.value = "18726";
  
  }
 if (valor_select == "kwid") {
  campo1.value ="172995";
  campo5.value = "18577";
  campo6.value = "4011558338381";
  campo7.value = "15424";
  
  }
  if (valor_select == "kangoostepwayn") {
   campo1.value ="172995";
   campo2.value ="172996";
   campo5.value = "18578";
   campo6.value = "16252";
   campo7.value = "15141";
   
   }              
  if (valor_select == "etios") {
   campo1.value ="172895";
   campo5.value = "15524";
   campo6.value = "4011558086305";
                    
   }
   if (valor_select == "corolla2011") {
   campo1.value ="172895";
   campo5.value = "15521";
   campo6.value = "15372"; 
   
   }
   if (valor_select == "hilux30") {
   campo1.value ="172695";
   
   campo5.value = "15143";
   campo6.value = "18931";
   campo7.value = "18886";


UpdateQuantity("2","cantidad1")
   
   }
   if (valor_select == "sandero8v") {
   campo1.value ="172995";
   campo5.value = "18624";
   campo6.value = "15519";
   campo7.value = "15141";
   
  }
  if (valor_select == "ecosport15") {
   campo1.value ="171895";
   campo5.value = "15400";
   campo6.value = "4011558340506";
   campo7.value = "18726";
  
  }
  if (valor_select == "renegadenafta") {
   campo1.value ="171895";
   campo2.value ="171896";                              
   campo5.value = "15353";
   campo6.value = "4011558088132";
   campo7.value = "4011558621636";
  
  }   
  if (valor_select == "208n") {
    campo1.value ="172995";                               
    campo5.value = "15067";
    campo6.value = "15345";
    campo7.value = "15141";
   
   } 
   if (valor_select == "ecosportrocam") {
    campo1.value ="171895";                               
    campo2.value ="171896"; 
    campo5.value = "18617";
    campo6.value = "15148";
    campo7.value = "18944";
   
   } 
   if (valor_select == "gol14") {
    campo1.value ="172795";                               
    campo5.value = "18622";
    campo6.value = "18310";
    campo7.value = "15424";
   
   } 
   if (valor_select == "uppepper") {
    campo1.value ="172795";                               
    campo5.value = "15502";
    campo6.value = "4011558073350";
    campo7.value = "15424";
   
   }
   if (valor_select == "cruze18") {
    campo1.value ="171795";                               
    campo2.value ="171796";
    campo5.value = "15367";
    campo6.value = "15352";
   
   }      
   if (valor_select == "s10duramax") {
    campo1.value ="171795";                               
    
    campo5.value = "15980";
    campo6.value = "4011558061852";
    campo7.value = "765809302945";


   UpdateQuantity("2","cantidad1")
    
    
   
   }        
   if (valor_select == "paliosiena16") {
    campo1.value ="171895";                               
    campo2.value ="171896";
    campo5.value = "15353";
    campo6.value = "15350";
    campo7.value = "18711";
   
   }  
   if (valor_select == "punto14") {
    campo1.value ="171895";                               
    campo5.value = "18572";
    campo6.value = "18927";
    campo7.value = "18711";
   
   }  
   if (valor_select == "focus2/2.0") {
    campo1.value ="171895";                               
    campo2.value ="171896";
    campo5.value = "18597";
    campo6.value = "4011558801830";
    campo7.value = "18726";
   
   }         
   if (valor_select == "ka2rocam") {
    campo1.value ="171895";                               
    campo2.value ="171896";
    campo5.value = "18617";
    campo6.value = "15148";
    campo7.value = "18775";
   
   }      
   if (valor_select == "ranger30pe") {
    campo1.value ="171895";                               
    campo2.value ="171896";
    
    campo5.value = "18956";
    campo6.value = "18073";
    campo7.value = "18123";

 
    
UpdateQuantity("2","cantidad1")

   
   } 
   if (valor_select == "hrv2") {
    campo1.value ="170995";                               
    campo5.value = "18572";
    campo6.value = "765809306356";      
   
   } 
   if (valor_select == "fit15") {
    campo1.value ="170995";                               
    campo5.value = "18572";
    campo6.value = "15402";      
   
   } 
   if (valor_select == "vento25") {
    campo1.value ="172795";                               
    campo2.value ="172796";
    
    campo5.value ="18482";
    campo6.value = "18936";
    campo7.value = "18942";      

    
 
    UpdateQuantity("2","cantidad2")

   
   } 
   if (valor_select == "golftsi14") {
    campo1.value ="172795";                               
    campo2.value ="172796";
    campo5.value ="15502";
    campo6.value = "15552";     
   
   } 
   if (valor_select == "berlingo19") {
    campo1.value ="176395"; 
    campo2.value ="176396";                            
    campo5.value ="4011558076658";
    campo6.value ="18084";
    campo7.value = "18533";     
   
   } 
   if (valor_select == "partner19") {
    campo1.value ="176395"; 
    campo2.value ="176396";                            
    campo5.value ="4011558076658";
    campo6.value ="18084";
    campo7.value = "18533";     
   
   } 
   if (valor_select == "meriva18") {
    campo1.value ="171795";                           
    campo5.value ="4011558744502";
    campo6.value ="4011558075606";
    campo7.value = "18712";     
   
   }  
   if (valor_select == "tiida") {
    campo1.value ="171795";                               
    campo2.value ="171796";
    campo5.value ="18578";
    campo6.value = "15165";     
   
   }   
   if (valor_select == "unofire") {
    campo1.value ="171895";                           
    campo5.value ="18572";
    campo6.value ="18197";
    campo7.value = "18714";     
   
   }  
   if (valor_select == "nuevouno") {
    campo1.value ="171895";                           
    campo5.value ="18572";
    campo6.value ="4011558072872";
    campo7.value = "18711";     
   
   }  
   if (valor_select == "ecosport20kinetic") {
    campo1.value ="171895"; 
    campo2.value ="171896";                            
    campo5.value ="15442";
    campo6.value ="4011558077648";
    campo7.value = "18726";     
   
   } 
   if (valor_select == "bora20") {
    campo1.value ="172795"; 
    campo2.value ="172796";                            
    campo5.value ="18619";
    campo6.value ="18425";
    campo7.value = "18785";     
   
   } 
   if (valor_select == "boratdi") {
    campo1.value ="172795";                            
    campo5.value ="18498";
    campo6.value ="18425";
    campo7.value = "18842";     
   
   } 
  if (valor_select == "hilux24") {
    campo1.value ="172695"; 
                        
    campo5.value ="15143";
    campo6.value ="15659";
    campo7.value ="4011558338503" 

  
    
UpdateQuantity("2","cantidad1")

     
  } 
  if (valor_select == "c420") {
    campo1.value ="172995"; 
    campo2.value ="172996";                            
    campo5.value ="15067";
    campo6.value ="18932";  
    campo7.value ="15141"; 
    
  } 
  if (valor_select == "30720hdi") {
    campo1.value ="172995"; 
    campo2.value ="172996";                            
    campo5.value ="4011558076658";
    campo6.value ="18202";  
    campo7.value ="18536";
    
  } 
  if (valor_select == "30720n") {
    campo1.value ="172995"; 
    campo2.value ="172996";                            
    campo5.value ="15067";
    campo6.value ="18932";  
    campo7.value ="15141"; 
    
  } 
  if (valor_select == "march") {
    campo1.value ="171795";                             
    campo5.value ="18578";
    campo6.value ="15510";   
    
  } 
  if (valor_select == "kangoodci") {
    campo1.value ="172995"; 
    campo2.value ="172996";                            
    campo5.value ="18624";
    campo6.value ="18434";  
    campo7.value ="15522"; 
    
  } 
  if (valor_select == "tracker12") {
    campo1.value ="171795";                            
    campo5.value ="4011558094072";
    campo6.value ="4011558342371";  
    
  } 
  if (valor_select == "500multiair") {
    campo1.value ="171895";                            
    campo5.value ="15387";
    campo6.value ="16423"; 
    campo7.value ="18726"; 
    
  } 
  if (valor_select == "ecosport14d") {
    campo1.value ="171895";                            
    campo5.value ="18484";
    campo6.value ="4011558365608"; 
    campo7.value ="18853"; 
    
  } 
  if (valor_select == "astra20nafta") {
    campo1.value ="176195";                            
    campo2.value ="176196";
    campo5.value ="4011558744502";
    campo6.value ="15529"; 
    campo7.value ="18712"; 
    
  } 
  if (valor_select == "astra20diesel") {
    campo1.value ="176195";
    campo2.value ="176196"; 
              
    campo5.value ="18486";
    campo6.value ="15529"; 
    campo7.value ="4011558055783"; 
    
UpdateQuantity("2","cantidad2")
  } 
  if (valor_select == "ventodiesel") {
    campo1.value ="172795";
    campo2.value ="172796";                
    campo5.value ="18492";
    campo6.value ="15065"; 
    campo7.value ="18938"; 
    
  } 
  if (valor_select == "aveog1") {
    campo1.value ="171795";                
    campo5.value ="4011558744502";
    campo6.value ="18959"; 
    campo7.value ="15351"; 
    
  } 
  if (valor_select == "merivad") {
    campo1.value ="176195"; 
    campo2.value ="176196";           
    campo5.value ="15124";
    campo6.value ="4011558075606"; 
    campo7.value ="4011558055783"; 
    
  } 
  if (valor_select == "jumpy") {
    campo1.value ="172995"; 
    campo2.value ="172996";    
    
    campo5.value ="4011558067465";
    campo6.value ="4011558060053"; 
    campo7.value ="4011558077464"; 


    
    UpdateQuantity("2","cantidad2")
    
    
  } 
  if (valor_select == "palio18") {
    campo1.value ="176195";     
    campo5.value ="4011558744502";
    campo6.value ="18226"; 
    campo7.value ="18711"; 
    
  } 
  if (valor_select == "paliodiesel") {
    campo1.value ="176395";   
    campo2.value ="176396";
    campo5.value ="18602";
    campo6.value ="18226"; 
    campo7.value ="18812"; 
    
  } 
  if (valor_select == "s10mwm") {
    campo1.value ="176195";   
    
    campo5.value ="18570";
    campo6.value ="18040"; 
    campo7.value ="15142"; 


    UpdateQuantity("2","cantidad1")
    
    
  }
  if (valor_select == "compass24") {
    campo1.value ="171895";   
    campo2.value ="171896";
    campo5.value ="15507";
    campo6.value ="4011558088132"; 
    campo7.value ="4011558621636"; 
    
  } 
  if (valor_select == "polo16") {
    campo1.value ="176395";   
    campo5.value ="18622";
    campo6.value ="18288"; 
    campo7.value ="18712"; 
    
  } 
  if (valor_select == "polo19") {
    campo1.value ="176395";   
    campo5.value ="18683";
    campo6.value ="18289"; 
    campo7.value ="18821"; 
    
  } 
  if (valor_select == "polo19tdi") {
    campo1.value ="172795";   
    campo5.value ="18498";
    campo6.value ="18420"; 
    campo7.value ="18800"; 
    
  } 
  if (valor_select == "poloindia") {
    campo1.value ="172795";   
    campo5.value ="15497";
    campo6.value ="16251"; 
    campo7.value ="18942"; 
    
  } 
  if (valor_select == "capture16") {
    campo1.value ="172995"; 
    campo2.value ="172996";
    campo5.value ="18578";
    campo6.value ="16252"; 
    campo7.value ="15141"; 
    
  } 
  if (valor_select == "amarokv6") {
    campo1.value ="172795";
    
    campo5.value = "4011558056841";
    campo6.value = "15169";
    campo7.value = "4011558819705";


   UpdateQuantity("2","cantidad1")
    
  }
  if (valor_select == "kangoo19") {
    campo1.value ="176395";
    campo2.value = "176396";
    campo5.value = "18624";
    campo6.value = "15650";
    campo7.value = "15163";
    
  }
  if (valor_select == "renegadediesel") {
    campo1.value ="172695";
    campo2.value ="172696";
    campo5.value = "16229";
    campo6.value = "4011558088132";
    campo7.value = "16234";
    
   }
   if (valor_select == "bronco15") {
    campo1.value ="170995";
    campo2.value ="170996";
    
    campo5.value = "4011558044220";
    
    UpdateQuantity("2","cantidad2")
   }
   if (valor_select == "bronco20") {
    campo1.value ="171895";
    campo2.value ="171896";
   
    campo5.value ="15400";
    UpdateQuantity("2","cantidad2")
   }
   if (valor_select == "kicks") {
    campo1.value ="171795";
    campo5.value ="18578";
    
   }
   if (valor_select == "note") {
    campo1.value ="171795";
    campo5.value ="18578";
    campo6.value ="15165";
    
   }
   if (valor_select == "208iivti") {
    campo1.value ="172995";
    campo5.value ="15067";
    
   }
   if (valor_select == "20719d") {
    campo1.value ="176395";
    campo2.value ="176396";
    campo5.value = "4011558076658";
    campo6.value = "15139";
    campo7.value = "18533";
    
   }
   if (valor_select == "cactusthp") {
    campo1.value ="172895";
    campo2.value ="172896";
    campo5.value = "15067";
    campo6.value = "15392";
    
   }
   if (valor_select == "taos") {
    campo1.value ="172795";
    campo2.value ="172796";
    campo5.value = "15502";
    campo6.value = "15552";
    
   }
   if (valor_select == "gol19") {
    campo1.value ="176395";
    campo5.value = "18683";
    campo6.value = "18311";
    campo7.value = "18819";
    
   }
   if (valor_select == "ranger25") {
    campo1.value ="171895";
    campo2.value ="171896";
    campo5.value = "15442";
    campo6.value = "15420";
    campo7.value = "18726";
    
   }
   if (valor_select == "civicvtec") {
    campo1.value ="170995";
    campo5.value = "18572";
    campo6.value = "15127";     
   }
   if (valor_select == "3008thp") {
    campo1.value ="172895";
    campo2.value ="172896";
    campo5.value = "15067";
    campo6.value = "15392";
    campo7.value ="15141";
   }
   if (valor_select == "raptor") {
    campo1.value ="171895";
    campo2.value ="171895";
    campo5.value = "15404";
    
   }
   if (valor_select == "alaskan") {
    campo1.value ="172895";
    
    campo5.value = "16270";
    campo6.value = "4011558041311";
    campo7.value = "4011558064822";


    UpdateQuantity("2","cantidad1")

   }
   if (valor_select == "fluence16k4m") {
    campo1.value ="172995";
    campo2.value ="172996";
    campo5.value = "18624";
    campo6.value = "15362";
    campo7.value = "15141";
   }
   if (valor_select == "fluence20") {
    campo1.value ="172995";
    campo2.value ="172996";
    campo5.value = "18578";
    campo6.value = "15362";
    campo7.value = "15141";
   }
   if (valor_select == "escortzetec") {
    campo1.value ="171895";
    campo5.value = "18617";
    campo6.value = "18234";
    campo7.value = "18775";
   }
   if (valor_select == "escortendura") {
    campo1.value ="176395";
    campo2.value ="176396";
    campo5.value = "18604";
    campo6.value = "18234";
    campo7.value = "18527";
   }
   if (valor_select == "spark12") {
    campo1.value ="171795";
    campo5.value = "15609";
    campo6.value = "15496";
   }
   if (valor_select == "focus2diesel") {
    campo1.value ="171895";
    campo2.value ="171896";
   
    campo5.value = "15076";
    campo6.value = "4011558801830";

    UpdateQuantity("2","cantidad2")

   }

   if (valor_select == "equinox") {
    campo1.value ="170995";
    campo2.value ="170996";
    campo5.value = "4011558094072";
    
   }

   
   if (valor_select == "30820nafta") {
    campo1.value ="172995";
    campo2.value ="172996";
    campo5.value = "15067";
    campo6.value = "18932";
    campo7.value = "15141";
   }
   if (valor_select == "147") {
    campo1.value ="174195";
    campo5.value = "18643";
    campo6.value = "18132";
    campo7.value = "18697";
   }



   if (valor_select == "qubo") {
    campo1.value ="172995";
    campo5.value = "15067";
    campo6.value = "15412";
   }


   if (valor_select == "tiggo20") {
    campo1.value ="176195";
    campo2.value ="176196";
    campo5.value = "18658";
    
   }



   function actualizarDescripcion(campo, descripcionId, precioId, selectId) {
 
    const codigo = campo.value;
    const producto = productos.find((p) => p.codigo === codigo);
  
    if (producto) {
      let selectElement = document.getElementById(selectId);
     
      const selectedValue = selectElement.value;
      
      // Verifica si el valor seleccionado es un número válido
      const quantity = parseFloat(selectedValue);
      
      if (!isNaN(quantity)) {
        const precioFinal = producto.precio * quantity;
        document.getElementById(descripcionId).innerHTML = producto.descripcion;
       
        document.getElementById(precioId).innerHTML = precioFinal// Redondea el precio a dos decimales
      } else {
        Swal.fire('Valor seleccionado no válido');
      }
    } else {
    Swal.fire('Código no encontrado');
    }
  }

   actualizarDescripcion(campo1,'descripcion','precio','cantidad1')
   actualizarDescripcion(campo2,'descripcion1','precio1','cantidad2')
   
   actualizarDescripcion(campo4,'descripcion3','precio3','cantidad3')
   actualizarDescripcion(campo5,'descripcion4','precio4','cantidad4')
   actualizarDescripcion(campo6,'descripcion5','precio5','cantidad5')
   actualizarDescripcion(campo7,'descripcion6','precio6','cantidad6')






  } )




function imprimirPagina() {
  window.print()
}






































































 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     









































































































































































































































































































































































































































    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
