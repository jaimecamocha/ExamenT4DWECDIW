// JAIME FERNÁNDEZ CALVO
// 

//imports
import { mostrarResultado } from './main.js';


//clase automovilDeportivo
export class automovilDeportivo{
    #potenciaMotor;

    //constructor
    constructor(marca, modelo, color, fabricacion, cilindrada, potenciaMotor){
        super(marca, modelo, color, fabricacion, cilindrada);
        this.#potenciaMotor = potenciaMotor;
    }


    //métodos
    activarModoDeportivo(){
        const mensaje = `<p>¡Ha activado el modo deportivo!</p>`;
        mostrarResultado += `<p>${mensaje}</p>`; 
    }


    //getter y setter
    get potenciaMotor(){
        return this.#potenciaMotor;
    }

    set potenciaMotor(potenciaMotor){
        this.#potenciaMotor = potenciaMotor;
    }
}