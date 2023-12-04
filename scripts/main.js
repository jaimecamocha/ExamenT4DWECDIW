// JAIME FERNÁNDEZ CALVO
// 

//imports
import { Vehiculo } from "./vehiculo.js";
import { automovilDeportivo } from "./automovilDeportivo.js";

// creamos un contenedor
const resultadoContainer = document.createElement('div');
document.body.appendChild(resultadoContainer);

//función mostrar datos
export function mostrarResultado(mensaje){
    resultadoContainer.innerHTML += `<p>${mensaje}</p>`;
}

//creamos la instancia de la clase vehiculo
const vehiculo1 = new Vehiculo('BMW', 'CLK', 'rojo', 1992, '2400');

//mostramos datos y accciones
mostrarResultado("<h2>--VEHÍCULO--</h2>")
vehiculo1.mostrarDatos();
vehiculo1.arrancar();
vehiculo1.acelerar("140");
vehiculo1.frenar();


//creamos el vehiculo object
const vehiculoObject = ({
    marca: 'BMW',
    modelo: 'CLK',
    color: 'rojo',
    fabricacion: 1992,
    cilindrada: '2400'
})

//añadimos el vehiculo object al localstorage
localStorage.setItem("vehiculo", JSON.stringify(vehiculoObject));

//mostramos por consola el vehiculo del local storage
console.log(localStorage.getItem("vehiculo"));


//creamos la instancia de la clase autmovilDeportivo
const deportivo1 = new automovilDeportivo('Ferrari', 'Spider', 'amarillo', 2020, '4000', '500');

//mostramos datos y acciones
mostrarResultado("<h2>--DEPORTIVO--</h2>")
deportivo1.mostrarDatos();
mostrarResultado("<div>Potencia motor: " + deportivo1.potenciaMotor + "</div>");
deportivo1.arrancar();
deportivo1.acelerar("140");
deportivo1.frenar();

//creamos el deportivo object
const deportivoObject = ({
    marca: 'Ferrari',
    modelo: 'Spider',
    color: 'amarillo',
    fabricacion: 2020,
    cilindrada: '4000',
    potenciaMotor: '500'
})

//añadimos el deportivo object al localstorage
localStorage.setItem("deportivo", JSON.stringify(deportivoObject));

//borramos la marca y el modelo
localStorage.removeItem('marca');
localStorage.removeItem('modelo');

//limpieza del localstorage
//localStorage.clear();