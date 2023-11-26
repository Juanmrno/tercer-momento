import { gastos } from "../model/ModelGastos.js";
console.log(gastos);



let registrarGastos = document.getElementById("registrarGastos");
registrarGastos.addEventListener("click", function () {
   document.getElementById("sectionRegistrarGastos").style.zIndex = "3";
   document.getElementById("sectionListar").style.zIndex = "2";
   document.getElementById("sectionMovimientosGastos").style.zIndex = "2";
});

let btnGuardar = document.getElementById("btnGuardar");
btnGuardar.addEventListener("click", () => {
   let gcategoria = (document.getElementById("gcategoria").value = "");
   let gdescripcion = (document.getElementById("gdescripcion").value = "");
   let gvalor = (document.getElementById("gvalor").value = "");
   let gfecha = (document.getElementById("gfecha").value = "");

   let gasto = {
      id: Math.random() * 100,
      categoria: gcategoria,
      descripcion: gdescripcion,
      valor: gvalor,
      fecha: gfecha,
   };

   gastos.push(gasto);

   document.getElementById("gcategoria").value = "";
   document.getElementById("gdescripcion").value = "";
   document.getElementById("gvalor").value = "";
   document.getElementById("gfecha").value = "";

   movimientos();
});

let listarGastos = document.getElementById("listarGastos");

listarGastos.addEventListener("click", function () {
   document.getElementById("sectionRegistrarGastos").style.zIndex = "2";
   document.getElementById("sectionListar").style.zIndex = "3";
   document.getElementById("sectionMovimientosGastos").style.zIndex = "2";

   gastos.map((gasto) => {
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
   });
});

let movimientosGastos = document.getElementById("movimientosGastos");
movimientosGastos.addEventListener("click", function () {
   document.getElementById("sectionRegistrarGastos").style.zIndex = "2";
   document.getElementById("sectionListar").style.zIndex = "2";
   document.getElementById("sectionMovimientosGastos").style.zIndex = "3";
});

function movimientos() {
   console.log("Guardando movimiento");
}

