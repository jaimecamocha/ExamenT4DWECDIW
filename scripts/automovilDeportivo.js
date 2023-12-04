// JAIME FERNÁNDEZ CALVO
// https://github.com/jaimecamocha/ExamenT4DWECDIW.git

//imports
import { mostrarResultado } from './main.js';
import { Vehiculo } from './vehiculo.js';


//clase automovilDeportivo
export class automovilDeportivo extends Vehiculo{
    #potenciaMotor;

    //constructor
    constructor(marca, modelo, color, fabricacion, cilindrada, potenciaMotor){
        super(marca, modelo, color, fabricacion, cilindrada);
        this.#potenciaMotor = potenciaMotor;
    }


    //métodos
    activarModoDeportivo(){
        const mensaje = `<p>¡Ha activado el modo deportivo!</p>`;
        mostrarResultado(mensaje);
    }


    //getter y setter
    get potenciaMotor(){
        return this.#potenciaMotor;
    }

    set potenciaMotor(potenciaMotor){
        this.#potenciaMotor = potenciaMotor;
    }
}