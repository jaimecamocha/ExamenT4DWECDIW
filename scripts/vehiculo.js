// JAIME FERNÁNDEZ CALVO
// 

//imports
import { mostrarResultado } from './main.js';


//clase Vehículo
export class Vehiculo{
    #marca;
    #modelo;
    #color;
    #fabricacion;
    #cilindrada;

    //constructor
    constructor(marca, modelo, color, fabricacion, cilindrada){
        this.#marca = marca;
        this.#modelo = modelo;
        this.#color = color;
        this.#fabricacion = fabricacion;
        this.#cilindrada = cilindrada;
    }


    //métodos
    mostrarDatos(){
        const datos = `
            <h1>Vehículo</h1>
            <p>Marca: ${this.#marca}</p>
            <p>Modelo: ${this.#modelo}</p>
            <p>Color: ${this.#color}</p>
            <p>Año fabricación: ${this.#fabricacion}</p>
            <p>Cilindrada: ${this.#cilindrada}</p>
            `

            mostrarResultado(datos); 
    }

    acelerar(velocidad){
        const mensaje = `<p>Ha acelerado hasta llegar a ${velocidad} km/h</p>`;
        mostrarResultado(mensaje); 
    }

    arrancar(){
        const mensaje = `<p>Ha arrancado</p>`;
        mostrarResultado(mensaje); 
    }

    frenar(){
        const mensaje = `<p>Ha frenando</p>`;
        mostrarResultado(mensaje); 
    }


    //getter y setter
    get marca(){
        return this.#marca;
    }

    set marca(marca){
        this.#marca = marca;
    }

    get modelo(){
        return this.#modelo;
    }

    set modelo(modelo){
        this.#modelo = modelo;
    }

    get color(){
        return this.#color;
    }

    set color(color){
        this.#color = color;
    }

    get fabricacion(){
        return this.#fabricacion;
    }

    set fabricacion(fabricacion){
        this.#fabricacion = fabricacion;
    }

    get cilindrada(){
        return this.#cilindrada;
    }

    set cilindrada(cilindrada){
        this.#cilindrada = cilindrada;
    }
}