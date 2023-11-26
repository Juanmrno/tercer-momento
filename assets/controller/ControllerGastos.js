const topeMaximoGastos = 300000;
let valorTotalGastos = 0;
let gastos =[];

let registrarGastos = document.getElementById("registrarGastos");
registrarGastos.addEventListener("click", function () {
   document.getElementById("sectionRegistrarGastos").style.zIndex = "3";
   document.getElementById("sectionListar").style.zIndex = "2";
});

let btnGuardar = document.getElementById("btnGuardar");
btnGuardar.addEventListener("click", () => {
   let gcategoria = document.getElementById("gcategoria").value;
   let gdescripcion = document.getElementById("gdescripcion").value;
   let gvalor = parseFloat(document.getElementById("gvalor").value);
   let gfecha = document.getElementById("gfecha").value;

   if (gvalor > topeMaximoGastos) {
      alert("El gasto supera el tope máximo permitido.");
      return; 
   }

   let gasto = {
      id: Math.random() * 100,
      categoria: gcategoria,
      descripcion: gdescripcion,
      valor: gvalor,
      fecha: gfecha,
   };

   gastos.push(gasto);

   valorTotalGastos += gvalor;

   document.getElementById("gcategoria").value = "";
   document.getElementById("gdescripcion").value = "";
   document.getElementById("gvalor").value = "";
   document.getElementById("gfecha").value = "";

   // función para listar el nuevo gasto
   listarGasto(gasto);

   movimientos();
});

// Función para listar un gasto
function listarGasto(gasto) {
   let categoria = document.createElement("p");
   categoria.textContent = gasto.categoria;

   let descripcion = document.createElement("p");
   descripcion.textContent = gasto.descripcion;

   let valor = document.createElement("p");
   valor.textContent = gasto.valor;

   let fecha = document.createElement("p");
   fecha.textContent = gasto.fecha;

   let card = document.createElement("article");
   card.classList.add("card");
   card.append(categoria, descripcion, valor, fecha);

   document.getElementById("sectionListar").append(card);
}

let listarGastos = document.getElementById("listarGastos");
listarGastos.addEventListener("click", function () {
   document.getElementById("sectionRegistrarGastos").style.zIndex = "2";
   document.getElementById("sectionListar").style.zIndex = "3";

   // Limpiar la sección de listado antes de volver a cargar los gastos
   document.getElementById("sectionListar").innerHTML = "";

   // Volver a cargar todos los gastos
   gastos.map((gasto) => {
      listarGasto(gasto);
   });
});



function movimientos() {
   console.log("Guardando movimiento");
   console.log("Valor total de los gastos:", valorTotalGastos);
}
